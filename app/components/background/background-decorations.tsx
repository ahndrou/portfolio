import { useEffect, useRef } from "react";
import * as TWGL from "twgl.js";

import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";

// Vertex positions for a plane.
const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};

export function BackgroundDecorations() {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const gl = useRef<WebGLRenderingContext | null>(null);
  const programInfo = useRef<TWGL.ProgramInfo | null>(null);
  const bufferInfo = useRef<TWGL.BufferInfo | null>(null);

  const rafID = useRef<number | null>(null);

  useEffect(() => {
    gl.current = canvas.current!.getContext("webgl");

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
    if (
      gl.current === null ||
      programInfo.current === null ||
      bufferInfo.current === null
    ) {
      throw new Error("Tried rendering before setup has been completed.");
    }

    const uniforms = {
      time: time * 0.001,
      resolution: [gl.current.canvas.width, gl.current.canvas.height],
    };

    gl.current.useProgram(programInfo.current.program);
    TWGL.setBuffersAndAttributes(
      gl.current,
      programInfo.current,
      bufferInfo.current,
    );
    TWGL.setUniforms(programInfo.current, uniforms);
    TWGL.drawBufferInfo(gl.current, bufferInfo.current);

    rafID.current = requestAnimationFrame(render);
  }

  return (
    <div aria-hidden className="fixed top-[0] left-[0] -z-20 h-full w-full">
      <canvas ref={canvas} className="h-full w-full"></canvas>
    </div>
  );
}
