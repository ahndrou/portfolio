import { useEffect, useRef } from "react";
import * as TWGL from "twgl.js";

import vertex from "./shaders/background.vert.glsl";
import fragment from "./shaders/background.frag.glsl";

// Vertex positions for a plane.
const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};

export function Background() {
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
      canvas.current === null ||
      gl.current === null ||
      programInfo.current === null ||
      bufferInfo.current === null
    ) {
      throw new Error("Tried rendering before setup has been completed.");
    }

    // WebGL canvas (buffer) size is set independently from HTML canvas element size. This
    // keeps them in sync. Important to avoid stretching/squashing issues.
    TWGL.resizeCanvasToDisplaySize(canvas.current);

    // Whilst the above line determines the pixels available in the buffer, this line
    // tells WebGL the area of the buffer that clip space coordinates ([-1, -1], [1, 1]) map onto.
    // We could use this to transform the position/scale of the render on the buffer.
    gl.current.viewport(0, 0, canvas.current.width, canvas.current.height);

    const uniforms = {
      time: time * 0.001,
      resolution: [canvas.current.width, canvas.current.height],
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
