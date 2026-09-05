import { useEffect, useRef } from "react";
import * as TWGL from "twgl.js";

const vs = `
  attribute vec4 position;

  void main() {
    gl_Position = position;
  }
`;

const fs = `
  precision mediump float;

  uniform vec2 resolution;
  uniform float time;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    float color = 0.0;
    // lifted from glslsandbox.com
    color += sin( uv.x * cos( time / 3.0 ) * 60.0 ) + cos( uv.y * cos( time / 2.80 ) * 10.0 );
    color += sin( uv.y * sin( time / 2.0 ) * 40.0 ) + cos( uv.x * sin( time / 1.70 ) * 40.0 );
    color += sin( uv.x * sin( time / 1.0 ) * 10.0 ) + sin( uv.y * sin( time / 3.50 ) * 80.0 );
    color *= sin( time / 10.0 ) * 0.5;

    gl_FragColor = vec4( vec3( color * 0.5, sin( color + time / 2.5 ) * 0.75, color ), 1.0 );
  }
`;

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

    programInfo.current = TWGL.createProgramInfo(gl.current, [vs, fs]);

    if (programInfo.current === null) {
      throw new Error("Shader program wasn't constructed properly.");
    }

    bufferInfo.current = TWGL.createBufferInfoFromArrays(gl.current, arrays);

    requestAnimationFrame(render);

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
    <div
      aria-hidden
      className="absolute top-[0] bottom-[0] left-[0] -z-20 w-full overflow-clip"
    >
      <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
}
