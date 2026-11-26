'use client';

import Link from 'next/link';
import styles from './WorkList.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { works } from '@/shared/content/works';

export default function WorkList() {
  const [active, setActive] = useState(0);
  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.heading}>Selected work</h2>
      <div className={styles.layout}>
        <ul className={styles.list}>
          {works.map((work, index) => (
            <li key={work.slug}>
              <Link
                className={styles.row}
                href={`/work/${work.slug}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className={styles.client}>{work.client}</span>
                <span className={styles.role}>{work.role}</span>
              </Link>
            </li>
          ))}
        </ul>
        <figure className={styles.preview}>
          {works.map((work, index) => (
            <Image
              key={work.slug}
              className={`${styles.image} ${index === active ? styles.active : ''}`}
              src={work.img}
              alt={index === active ? work.alt : ''}
              fill
              sizes="320px"
              style={{ objectPosition: work.focus }}
            />
          ))}
        </figure>
      </div>
    </section>
  );
}
