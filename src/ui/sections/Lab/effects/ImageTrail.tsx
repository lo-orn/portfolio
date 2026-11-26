'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from './ImageTrail.module.css';

const images = [
  '/work/sns/spring-01.png',
  '/work/sns/air-max-01.png',
  '/work/urbanears/zinken-01.png',
  '/work/sns/asics-01.png',
  '/work/marshall/heston-05.avif',
  '/work/sns/winter-05.png',
  '/work/urbanears/juno-02.png',
  '/work/sns/new-balance-01.png',
];

type Item = { id: number; x: number; y: number; src: string };

export default function ImageTrail() {
  const [items, setItems] = useState<Item[]>([]);
  const last = useRef({ x: 0, y: 0 });
  const count = useRef(0);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (Math.hypot(x - last.current.x, y - last.current.y) < 90) return;

    last.current = { x, y };
    const id = count.current++;
    setItems((prev) => [...prev.slice(-7), { id, x, y, src: images[id % images.length] }]);
    setTimeout(() => setItems((prev) => prev.filter((item) => item.id !== id)), 1000);
  }

  return (
    <div className={styles.stage} onPointerMove={handleMove}>
      <p className={styles.hint}>Move your cursor</p>
      {items.map((item) => (
        <Image
          key={item.id}
          className={styles.image}
          src={item.src}
          alt=""
          width={160}
          height={200}
          sizes="160px"
          style={{ left: item.x, top: item.y }}
        />
      ))}
    </div>
  );
}
