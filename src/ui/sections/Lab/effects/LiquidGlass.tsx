'use client';

import Image from 'next/image';
import { useRef } from 'react';
import styles from './LiquidGlass.module.css';

export default function LiquidGlass() {
  const lens = useRef<HTMLDivElement>(null);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    lens.current?.style.setProperty('--x', `${event.clientX - rect.left}px`);
    lens.current?.style.setProperty('--y', `${event.clientY - rect.top}px`);
  }

  return (
    <div className={styles.stage} onPointerMove={handleMove}>
      <svg className={styles.defs} aria-hidden="true">
        <filter id="liquid-glass">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <Image
        className={styles.background}
        src="/work/marshall/heston-05.avif"
        alt=""
        fill
        sizes="(max-width: 1360px) 100vw, 1280px"
      />
      <p className={styles.word}>Liquid glass</p>
      <div ref={lens} className={styles.lens} aria-hidden="true" />
    </div>
  );
}
