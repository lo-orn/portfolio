// src/app/_ui/sections/Hero/Hero.tsx
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1 className={styles.title}>
          Art director
          <br />
          who <em className={styles.accent}>codes.</em>
        </h1>
        <p className={styles.body}>
          I&rsquo;m a creative frontend developer with 7 years as an art director for
          Sneakersnstuff, Urbanears and Marshall. Now I build the web where ideas live on, with
          Next.js and TypeScript.
        </p>
      </div>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          src="/images/sns-spring-2022-04.png"
          alt="Close-up of a face with a frog in the mouth"
          width={784}
          height={980}
          sizes="(max-width: 720px) 100vw, 320px"
          preload
        />
        <figcaption className={styles.caption}>Sneakersnstuff — Spring 2022</figcaption>
      </figure>
    </section>
  );
}
