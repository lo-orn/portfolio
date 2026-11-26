'use client';

import Image from 'next/image';
import styles from './Spotlight.module.css';

export default function Spotlight() {
  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`);
  }

  return (
    <div className={styles.stage} onPointerMove={handleMove}>
      <p className={styles.hint}>Look closer</p>
      <div className={styles.reveal}>
        <Image
          className={styles.image}
          src="/work/marshall/heston-04.avif"
          alt=""
          fill
          sizes="(max-width: 1360px) 100vw, 1280px"
        />
      </div>
    </div>
  );
}
