'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TextScramble.module.css';

const phrases = ['Art director who codes.', 'From concept to code.', 'Design, then engineering.'];
const glyphs = '!<>-_/[]{}=+*^?#';

export default function TextScramble() {
  const [text, setText] = useState(phrases[0]);
  const [current, setCurrent] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearInterval(timer.current), []);

  function scramble() {
    const next = (current + 1) % phrases.length;
    const target = phrases[next];
    setCurrent(next);
    let frame = 0;

    window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      frame++;
      const revealed = Math.floor(frame / 2);
      setText(
        [...target]
          .map((char, index) =>
            index < revealed || char === ' ' ? char : glyphs[Math.floor(Math.random() * glyphs.length)],
          )
          .join(''),
      );
      if (revealed >= target.length) window.clearInterval(timer.current);
    }, 30);
  }

  return (
    <button
      type="button"
      className={styles.stage}
      onClick={scramble}
      onPointerEnter={scramble}
      aria-label={`${phrases[current]} Press to scramble.`}
    >
      <span className={styles.text} aria-hidden="true">
        {text}
      </span>
    </button>
  );
}
