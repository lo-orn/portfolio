'use client';

import { useRef } from 'react';
import styles from './KineticType.module.css';

const text = 'Art direction';
const radius = 240;

export default function KineticType() {
  const letters = useRef<(HTMLSpanElement | null)[]>([]);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    for (const letter of letters.current) {
      if (!letter) continue;
      const rect = letter.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const force = Math.max(0, 1 - Math.hypot(dx, dy) / radius);

      letter.style.transform = `translate(${-dx * force * 0.3}px, ${-dy * force * 0.4}px) scale(${1 + force * 0.35})`;
      letter.style.color = force > 0.55 ? 'var(--color-accent)' : '';
    }
  }

  function reset() {
    for (const letter of letters.current) {
      if (!letter) continue;
      letter.style.transform = '';
      letter.style.color = '';
    }
  }

  return (
    <div className={styles.stage} onPointerMove={handleMove} onPointerLeave={reset}>
      <p className={styles.word} aria-label={text}>
        {[...text].map((char, index) => (
          <span
            key={index}
            ref={(element) => {
              letters.current[index] = element;
            }}
            className={styles.letter}
            aria-hidden="true"
          >
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </p>
    </div>
  );
}
