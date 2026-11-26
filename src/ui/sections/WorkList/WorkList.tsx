'use client';

import Link from 'next/link';
import styles from './WorkList.module.css';
import { useState } from 'react';
import Image from 'next/image';

type SelectedWork = {
  slug: string;
  client: string;
  role: string;
  img: string;
  alt: string;
  focus?: string;
};

const works: SelectedWork[] = [
  {
    slug: 'sns',
    client: 'Sneakersnstuff',
    role: 'Idea, concept, art direction, casting',
    img: '/images/nike-pre-day-03.png',
    alt: 'Nike Air Max campaign poster for Sneakersnstuff',
    focus: 'center top',
  },
  {
    slug: 'urbanears',
    client: 'Urbanears',
    role: 'Art direction, creative management',
    img: '/images/urbanears-juno-04.png',
    alt: 'Open Urbanears Juno charging case with earbuds, lit against a black background',
  },
  {
    slug: 'marshall',
    client: 'Marshall',
    role: 'Art direction',
    img: '/images/marshall-heston-pdp-05.avif',
    alt: 'People dancing in a living room with a Marshall Heston speaker under the TV',
  },
];

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
