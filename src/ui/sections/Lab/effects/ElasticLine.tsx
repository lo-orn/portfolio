'use client';

import { useEffect, useRef } from 'react';
import styles from './ElasticLine.module.css';

export default function ElasticLine() {
  const stage = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const line = useRef({ x: 0, y: 0, velocity: 0, grabbed: false, frame: 0 });

  function draw() {
    const box = stage.current?.getBoundingClientRect();
    if (!box || !path.current) return;
    const mid = box.height / 2;
    const { x, y } = line.current;
    path.current.setAttribute('d', `M0 ${mid} Q ${x} ${mid + y} ${box.width} ${mid}`);
  }

  useEffect(() => {
    const state = line.current;
    draw();
    return () => cancelAnimationFrame(state.frame);
  }, []);

  // A simple spring: pull back towards 0, lose a little energy each frame.
  function release() {
    const state = line.current;
    state.grabbed = false;
    cancelAnimationFrame(state.frame);
    const step = () => {
      state.velocity = (state.velocity - state.y * 0.12) * 0.86;
      state.y += state.velocity;
      draw();
      if (Math.abs(state.y) > 0.5 || Math.abs(state.velocity) > 0.5) {
        state.frame = requestAnimationFrame(step);
      }
    };
    step();
  }

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - box.left;
    const offset = event.clientY - box.top - box.height / 2;
    const state = line.current;

    if (!state.grabbed && Math.abs(offset) < 40) {
      state.grabbed = true;
      cancelAnimationFrame(state.frame);
    }
    if (!state.grabbed) return;
    if (Math.abs(offset) > 160) {
      release();
      return;
    }
    // The control point sits twice as far out, so the curve passes through the cursor.
    state.x = x;
    state.y = offset * 2;
    state.velocity = 0;
    draw();
  }

  return (
    <div ref={stage} className={styles.stage} onPointerMove={handleMove} onPointerLeave={release}>
      <p className={styles.hint}>Pluck the line</p>
      <svg className={styles.svg} aria-hidden="true">
        <path ref={path} className={styles.path} />
      </svg>
    </div>
  );
}
