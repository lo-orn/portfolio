'use client';

import { useEffect, useRef } from 'react';
import styles from './ShaderGradient.module.css';

const vertex = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragment = `
precision mediump float;
uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float wave = sin(uv.x * 3.0 + time * 0.6 + pointer.x * 2.0)
    + sin(uv.y * 4.0 - time * 0.4)
    + sin((uv.x + uv.y) * 2.5 + time * 0.3 + pointer.y * 2.0);
  vec3 blue = vec3(0.11, 0.18, 0.91);
  vec3 paper = vec3(0.95, 0.95, 0.93);
  vec3 ink = vec3(0.07);
  vec3 color = mix(blue, paper, 0.5 + 0.5 * sin(wave));
  color = mix(color, ink, smoothstep(0.55, 1.0, 0.5 + 0.5 * cos(wave * 0.7 + uv.y)));
  gl_FragColor = vec4(color, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

export default function ShaderGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl');
    if (!canvas || !gl) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, 'resolution');
    const pointerLocation = gl.getUniformLocation(program, 'pointer');
    const time = gl.getUniformLocation(program, 'time');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const render = (ms: number) => {
      const scale = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = canvas.clientWidth * scale;
      canvas.height = canvas.clientHeight * scale;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform2f(pointerLocation, pointer.current.x, pointer.current.y);
      gl.uniform1f(time, ms / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!still) frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleMove(event: React.PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    };
  }

  return <canvas ref={canvasRef} className={styles.canvas} onPointerMove={handleMove} aria-hidden="true" />;
}
