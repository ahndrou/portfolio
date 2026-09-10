import { useEffect, useRef } from "react";
import * as TWGL from "twgl.js";

import vertex from "./shaders/background.vert.glsl";
import fragment from "./shaders/background.frag.glsl";
import { Flock } from "~/common/boids";
import { Vec2 } from "~/common/maths";

// Vertex positions for a plane.
const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};

const BOIDS_COUNT = 40;
const BOIDS_RADIUS = 0.0575;

// Converts the frame's milliseconds into the seconds the simulation is tuned
// in. 0.001 runs it in real time; lower values slow the whole thing down
// without changing the shape of the motion.
const BOID_SPEED = 0.001;

const BG_COLOR = [0.0392, 0.0431, 0.0392];
const BLOB_CORE_COLOR = [0.0411, 0.0451, 0.0411];
const BLOB_GLOW_COLOR = [0.0581, 0.0581, 0.0411];

/**
 * Maps a canvas size onto the simulation space shared by the boids and the
 * shader. The unit length is scaled so that the space's area stays constant as
 * the aspect ratio changes, keeping boid density - and so the amount of
 * merging between blobs - at what it was tuned to be.
 * @param width Canvas width in pixels.
 * @param height Canvas height in pixels.
 * @returns Pixel length of one simulation unit and the resulting boundaries.
 */
function simulationSpace(width: number, height: number) {
  const unit = Math.sqrt(width * height);

  return { unit, xBound: width / unit, yBound: height / unit };
}

export function Background() {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useBackgroundEffect(canvas);

  return (
    <div
      aria-hidden
      className="fixed top-[0] left-[0] -z-20 h-full w-full blur-xl"
    >
      <canvas ref={canvas} className="h-full w-full"></canvas>
    </div>
  );
}

function useBackgroundEffect(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
) {
  const gl = useRef<WebGLRenderingContext | null>(null);
  const programInfo = useRef<TWGL.ProgramInfo | null>(null);
  const bufferInfo = useRef<TWGL.BufferInfo | null>(null);

  const rafID = useRef<number | null>(null);
  const previousRafTime = useRef<number | null>(null);

  const boidsFlock = useRef<Flock | null>(null);

  // Bounds the flock was last simulated against. Used to detect changes to the
  // simulation space so the flock can be stretched to match.
  const previousBounds = useRef<{ x: number; y: number } | null>(null);

  // Cursor position in the shader's coordinate space. Null when
  // cursor is outside of the window.
  const cursor = useRef<Vec2 | null>(null);

  const uniforms = useRef<{
    resolution: [number, number];
    unitScale: number;
    positions: Float32Array;
    bgColor: Float32Array;
    coreColor: Float32Array;
    glowColor: Float32Array;
  }>({
    resolution: [0, 0],
    unitScale: 0,
    // WebGL requires an array of Vec2s be passed as a flat Float32Array.
    positions: new Float32Array(BOIDS_COUNT * 2),
    bgColor: Float32Array.from(BG_COLOR),
    coreColor: Float32Array.from(BLOB_CORE_COLOR),
    glowColor: Float32Array.from(BLOB_GLOW_COLOR),
  });

  useEffect(() => {
    const canvas = canvasRef.current!;

    // The canvas still has its default backing store size until this runs, so
    // the flock would otherwise be seeded into the wrong space and jolted into
    // place on the first rendered frame.
    TWGL.resizeCanvasToDisplaySize(canvas);

    const { xBound, yBound } = simulationSpace(canvas.width, canvas.height);

    boidsFlock.current = Flock.createRandomFlock(BOIDS_COUNT, xBound, yBound);

    previousBounds.current = { x: xBound, y: yBound };

    gl.current = canvas!.getContext("webgl");

    if (gl.current === null) {
      throw new Error("WebGL context wasn't retrieved properly.");
    }

    const modifiedFragment = fragment
      .replace("#define MAX_POINTS 1", `#define MAX_POINTS ${BOIDS_COUNT}`)
      .replace("#define RADIUS 0.1", `#define RADIUS ${BOIDS_RADIUS}`);

    programInfo.current = TWGL.createProgramInfo(gl.current, [
      vertex,
      modifiedFragment,
    ]);

    if (programInfo.current === null) {
      throw new Error("Shader program wasn't constructed properly.");
    }

    bufferInfo.current = TWGL.createBufferInfoFromArrays(gl.current, arrays);

    rafID.current = requestAnimationFrame(render);

    function onPointerMove(event: PointerEvent) {
      if (cursor.current === null) cursor.current = new Vec2(0, 0);

      const rect = canvas.getBoundingClientRect();
      // Avoid division by zero.
      if (rect.width === 0 || rect.height === 0) return;

      // The backing store tracks the element's CSS pixel size one to one, so
      // the rect maps onto the same simulation space the shader draws in.
      const { unit } = simulationSpace(rect.width, rect.height);

      cursor.current.set(
        ((event.clientX - rect.left) * 2 - rect.width) / unit,
        // Clip space has y pointing up, the DOM has it pointing down.
        ((rect.bottom - event.clientY) * 2 - rect.height) / unit,
      );
    }

    function onPointerOut(event: PointerEvent) {
      // Only fires with a null relatedTarget when the cursor leaves the window.
      // Setting it back to null avoids a stale value being left in cursor.current
      // which would keep applying steering forces.
      if (event.relatedTarget === null) cursor.current = null;
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);

      if (rafID.current === null) return;
      else cancelAnimationFrame(rafID.current);
    };
  }, []);

  function render(time: DOMHighResTimeStamp) {
    // Runs on first frame only. There is no time delta to integrate yet.
    if (previousRafTime.current === null) {
      previousRafTime.current = time;
      rafID.current = requestAnimationFrame(render);
      return;
    }

    const canvas = canvasRef.current;

    if (
      canvas === null ||
      gl.current === null ||
      programInfo.current === null ||
      bufferInfo.current === null ||
      boidsFlock.current === null
    ) {
      throw new Error("Tried rendering before setup has been completed.");
    }

    // WebGL canvas (buffer) size is set independently from HTML canvas element size. This
    // keeps them in sync. Important to avoid stretching/squashing issues.
    TWGL.resizeCanvasToDisplaySize(canvas);

    // A collapsed canvas has no space to simulate in, and would put a division
    // by zero through the whole mapping below.
    if (canvas.width === 0 || canvas.height === 0) {
      rafID.current = requestAnimationFrame(render);
      return;
    }

    // Whilst the above line determines the pixels available in the buffer, this line
    // tells WebGL the area of the buffer that clip space coordinates ([-1, -1], [1, 1]) map onto.
    // We could use this to transform the position/scale of the render on the buffer.
    gl.current.viewport(0, 0, canvas.width, canvas.height);

    const timeDelta = time - previousRafTime.current;
    previousRafTime.current = time;

    // The simulation space stretches with the canvas. Without this the
    // containment force would only ever squeeze the flock inwards, leaving it
    // bunched up after the window is widened again.
    const { unit, xBound, yBound } = simulationSpace(
      canvas.width,
      canvas.height,
    );

    const previous = previousBounds.current;

    if (
      previous !== null &&
      previous.x > 0 &&
      previous.y > 0 &&
      (xBound !== previous.x || yBound !== previous.y)
    ) {
      boidsFlock.current.rescale(xBound / previous.x, yBound / previous.y);
    }

    previousBounds.current = { x: xBound, y: yBound };

    updateBoids(boidsFlock.current, timeDelta, xBound, yBound, cursor.current);

    uniforms.current.resolution[0] = canvas.width;
    uniforms.current.resolution[1] = canvas.height;
    uniforms.current.unitScale = unit;
    boidsFlock.current.toFlatPositionArray(uniforms.current.positions);

    gl.current.useProgram(programInfo.current.program);
    TWGL.setBuffersAndAttributes(
      gl.current,
      programInfo.current,
      bufferInfo.current,
    );
    TWGL.setUniforms(programInfo.current, uniforms.current);
    TWGL.drawBufferInfo(gl.current, bufferInfo.current);

    rafID.current = requestAnimationFrame(render);
  }
}

function updateBoids(
  boids: Flock,
  timeDelta: number,
  xBound: number,
  yBound: number,
  cursor: Vec2 | null,
) {
  if (cursor !== null) boids.avoidPosition(cursor);
  boids.containWithinBounds(xBound, yBound);
  boids.applyFriction();
  boids.update(timeDelta * BOID_SPEED);
}
