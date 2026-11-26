'use client';

import dynamic from 'next/dynamic';
import JustNow from './JustNow';
import styles from './Lab.module.css';

// Client only: the effect is picked at random, so the server can't render the same one.
const LabBox = dynamic(() => import('./LabBox'), {
  ssr: false,
  loading: () => <div className={styles.box} />,
});

export default function Lab() {
  return (
    <section id="lab" className={styles.lab}>
      <h2 className={styles.heading}>Lab</h2>
      <LabBox />
      <JustNow />
    </section>
  );
}
