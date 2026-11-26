import styles from './JustNow.module.css';

export default function JustNow() {
  return (
    <div className={styles.stage}>
      <p className={styles.label}>Project</p>
      <h3 className={styles.title}>Just now</h3>
      <p className={styles.text}>
        Birds, plants and seasonal moments you can see outdoors right now, wherever you are.
      </p>
      <p className={styles.tech}>Vite · TypeScript · Groq · iNaturalist · Unsplash</p>
      <a className={styles.link} href="https://github.com/lo-orn/just-now">
        View on GitHub →
      </a>
    </div>
  );
}
