'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from './Lab.module.css';

const effects = [
  {
    name: 'Image trail',
    description: 'Selected work, following your cursor.',
    Effect: dynamic(() => import('./effects/ImageTrail')),
  },
  {
    name: 'Kinetic type',
    description: 'Letters that move out of your way.',
    Effect: dynamic(() => import('./effects/KineticType')),
  },
  {
    name: 'Liquid glass',
    description: 'A lens that bends what is behind it.',
    Effect: dynamic(() => import('./effects/LiquidGlass')),
  },
  {
    name: 'Text scramble',
    description: 'Hover to decode a new line.',
    Effect: dynamic(() => import('./effects/TextScramble')),
  },
  {
    name: 'Magnetic buttons',
    description: 'Buttons that lean towards you.',
    Effect: dynamic(() => import('./effects/Magnetic')),
  },
  {
    name: 'Variable weight',
    description: 'One font, every weight in between.',
    Effect: dynamic(() => import('./effects/VariableWeight')),
  },
  {
    name: 'Time of day',
    description: 'Colours that follow the Stockholm sky.',
    Effect: dynamic(() => import('./effects/TimeOfDay')),
  },
  {
    name: 'Shader gradient',
    description: 'A WebGL surface that flows with you.',
    Effect: dynamic(() => import('./effects/ShaderGradient')),
  },
  {
    name: 'Spotlight',
    description: 'A torch over a hidden image.',
    Effect: dynamic(() => import('./effects/Spotlight')),
  },
  {
    name: 'Elastic line',
    description: 'A string you can pluck.',
    Effect: dynamic(() => import('./effects/ElasticLine')),
  },
];

const randomIndex = () => Math.floor(Math.random() * effects.length);

export default function LabBox() {
  const [index, setIndex] = useState(randomIndex);
  const { name, description, Effect } = effects[index];

  function shuffle() {
    // Always a different effect than the one showing.
    const step = 1 + Math.floor(Math.random() * (effects.length - 1));
    setIndex((index + step) % effects.length);
  }

  return (
    <>
      <div className={styles.box}>
        <Effect />
      </div>
      <div className={styles.bar}>
        <p className={styles.info} aria-live="polite">
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
        </p>
        <button type="button" className={styles.shuffle} onClick={shuffle}>
          Shuffle ↻
        </button>
      </div>
    </>
  );
}
