import { useEffect, useRef } from "react";
import * as TWGL from "twgl.js";

import vertex from "./shaders/background.vert.glsl";
import fragment from "./shaders/background.frag.glsl";

// Vertex positions for a plane.
const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};

// Must match POSITIONS_LENGTH in the fragment shader.
const POSITIONS_LENGTH = 2;

export function Background() {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useBackgroundEffect(canvas);

  return (
    <div
      aria-hidden
      className="fixed top-[0] left-[0] -z-20 h-full w-full blur-md"
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

  const positions = useRef<Vec2[]>(createPositions());

  const uniforms = useRef<{
    time: number;
    resolution: [number, number];
    positions: Float32Array;
  }>({
    time: 0,
    resolution: [0, 0],
    // WebGL takes a uniform array as one flat run of floats, not an array of arrays.
    positions: new Float32Array(POSITIONS_LENGTH * 2),
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    gl.current = canvas!.getContext("webgl");

    if (gl.current === null) {
      throw new Error("WebGL context wasn't retrieved properly.");
    }

    programInfo.current = TWGL.createProgramInfo(gl.current, [
      vertex,
      fragment,
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
    const canvas = canvasRef.current;

    if (
      canvas === null ||
      gl.current === null ||
      programInfo.current === null ||
      bufferInfo.current === null
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

    positions.current = updatePositions(positions.current);

    uniforms.current.time = time * 0.001;
    uniforms.current.resolution[0] = canvas.width;
    uniforms.current.resolution[1] = canvas.height;
    Vec2.arrayToFloat32Array(positions.current, uniforms.current.positions);

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

function createPositions(): Vec2[] {
  return [new Vec2(0.3, 0.4), new Vec2(0.4, 0.45)];
}

function updatePositions(currentPositions: Vec2[]): Vec2[] {
  return currentPositions;
}

/**
 * A very simple 2D vector class.
 */
class Vec2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Storing state in a Float32Array directly would accumulate floating point errors.
  // Storage as an array of Vec2 and converting when needed avoids accumulation.
  // Probably not significant here but worth baring in mind.
  static arrayToFloat32Array(vecs: Vec2[], target: Float32Array): Float32Array {
    for (let i = 0; i < vecs.length; i++) {
      target[i * 2] = vecs[i].x;
      target[i * 2 + 1] = vecs[i].y;
    }
    return target;
  }
}
