'use client';

import { useEffect, useState } from 'react';
import styles from './TimeOfDay.module.css';

const moods = [
  { until: 5, name: 'night', from: '#0b1030', to: '#1c2de8', ink: '#f3f2ee' },
  { until: 9, name: 'morning', from: '#f7d9c4', to: '#f3f2ee', ink: '#121212' },
  { until: 16, name: 'day', from: '#cfe3ff', to: '#f3f2ee', ink: '#121212' },
  { until: 20, name: 'evening', from: '#ff8a5c', to: '#d94f9b', ink: '#121212' },
  { until: 24, name: 'night', from: '#2a1450', to: '#0b1030', ink: '#f3f2ee' },
];

const stockholm = (date: Date, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Stockholm', ...options }).format(date);

export default function TimeOfDay() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const hour = Number(stockholm(now, { hour: 'numeric' }));
  const mood = moods.find((item) => hour <= item.until) ?? moods[0];

  return (
    <div
      className={styles.stage}
      style={{ background: `linear-gradient(160deg, ${mood.from}, ${mood.to})`, color: mood.ink }}
    >
      <p className={styles.time}>{stockholm(now, { hour: '2-digit', minute: '2-digit' })}</p>
      <p className={styles.caption}>It&rsquo;s {mood.name} in Stockholm. This box follows the sky.</p>
    </div>
  );
}
