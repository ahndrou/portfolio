import { useEffect, useRef } from "react";
import * as TWGL from "twgl.js";

import vertex from "./shaders/background.vert.glsl";
import fragment from "./shaders/background.frag.glsl";
import { Flock } from "~/common/boids";

// Vertex positions for a plane.
const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};

const BOIDS_COUNT = 30;

export function Background() {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useBackgroundEffect(canvas);

  return (
    <div aria-hidden className="fixed top-[0] left-[0] -z-20 h-full w-full">
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

  const uniforms = useRef<{
    resolution: [number, number];
    positions: Float32Array;
  }>({
    resolution: [0, 0],
    // WebGL requires an array of Vec2s be passed as a flat Float32Array.
    positions: new Float32Array(BOIDS_COUNT * 2),
  });

  useEffect(() => {
    const canvas = canvasRef.current!;

    boidsFlock.current = Flock.createRandomFlock(BOIDS_COUNT, {
      x: canvas!.width,
      y: canvas!.height,
    });

    gl.current = canvas!.getContext("webgl");

    if (gl.current === null) {
      throw new Error("WebGL context wasn't retrieved properly.");
    }

    const modifiedFragment = fragment.replace(
      "#define MAX_POINTS 1",
      `#define MAX_POINTS ${BOIDS_COUNT}`,
    );

    programInfo.current = TWGL.createProgramInfo(gl.current, [
      vertex,
      modifiedFragment,
    ]);

    if (programInfo.current === null) {
      throw new Error("Shader program wasn't constructed properly.");
    }

    bufferInfo.current = TWGL.createBufferInfoFromArrays(gl.current, arrays);

    rafID.current = requestAnimationFrame(render);

    return () => {
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

    // Whilst the above line determines the pixels available in the buffer, this line
    // tells WebGL the area of the buffer that clip space coordinates ([-1, -1], [1, 1]) map onto.
    // We could use this to transform the position/scale of the render on the buffer.
    gl.current.viewport(0, 0, canvas.width, canvas.height);

    const timeDelta = time - previousRafTime.current;
    previousRafTime.current = time;

    updateBoids(boidsFlock.current, timeDelta, [canvas.width, canvas.height]);

    uniforms.current.time = time * 0.001;
    uniforms.current.resolution[0] = canvas.width;
    uniforms.current.resolution[1] = canvas.height;
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
  resolution: [number, number],
) {
  boids.update(timeDelta * 0.0001, resolution);
}
