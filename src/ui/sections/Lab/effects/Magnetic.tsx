'use client';

import { useRef } from 'react';
import styles from './Magnetic.module.css';

const labels = ['Concept', 'Art direction', 'Code'];

function Magnet({ label }: { label: string }) {
  const button = useRef<HTMLButtonElement>(null);

  function handleMove(event: React.PointerEvent<HTMLSpanElement>) {
    const element = button.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    element.style.transform = `translate(${dx * 0.35}px, ${dy * 0.35}px)`;
  }

  function reset() {
    if (button.current) button.current.style.transform = '';
  }

  // The padded wrapper is the magnetic field around the button.
  return (
    <span className={styles.field} onPointerMove={handleMove} onPointerLeave={reset}>
      <button ref={button} type="button" className={styles.button}>
        {label}
      </button>
    </span>
  );
}

export default function Magnetic() {
  return (
    <div className={styles.stage}>
      {labels.map((label) => (
        <Magnet key={label} label={label} />
      ))}
    </div>
  );
}
