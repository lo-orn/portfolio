'use client';

import { useState } from 'react';
import styles from './VariableWeight.module.css';

export default function VariableWeight() {
  const [weight, setWeight] = useState(500);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    setWeight(Math.round(400 + ratio * 300));
  }

  return (
    <div className={styles.stage} onPointerMove={handleMove}>
      <p className={styles.word} style={{ fontWeight: weight }}>
        Weight
      </p>
      <p className={styles.readout}>wght {weight}</p>
    </div>
  );
}
