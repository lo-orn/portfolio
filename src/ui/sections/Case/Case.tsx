import Image from 'next/image';
import Link from 'next/link';
import type { Media, Work } from '@/shared/content/works';
import styles from './Case.module.css';

type CaseProps = {
  work: Work;
  next: Work;
};

function MediaItem({ media, preload }: { media: Media; preload: boolean }) {
  if (media.type === 'video') {
    return (
      <video
        className={styles.media}
        src={media.src}
        poster={media.poster}
        width={media.width}
        height={media.height}
        aria-label={media.label}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <Image
      className={styles.media}
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
      preload={preload}
    />
  );
}

// Very wide media gets its own row, phone-format video keeps 9:16, the rest is 4:5.
function shape(media: Media) {
  const ratio = media.width / media.height;
  if (ratio > 1.4) return styles.wide;
  if (ratio < 0.7) return styles.tall;
  return '';
}

export default function Case({ work, next }: CaseProps) {
  return (
    <main>
      <section className={styles.intro}>
        <Link className={styles.back} href="/#work">
          ← All work
        </Link>
        <h1 className={styles.title}>{work.client}</h1>
        <p className={styles.summary}>{work.summary}</p>

        <dl className={styles.meta}>
          <div>
            <dt>Role</dt>
            <dd>{work.role}</dd>
          </div>
          <div>
            <dt>Projects</dt>
            <dd>
              <ol className={styles.projects}>
                {work.chapters.map((chapter, index) => (
                  <li key={chapter.title}>
                    <a className={styles.projectLink} href={`#chapter-${index + 1}`}>
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ol>
            </dd>
          </div>
        </dl>
      </section>

      {work.chapters.map((chapter, chapterIndex) => (
        <section key={chapter.title} id={`chapter-${chapterIndex + 1}`} className={styles.chapter}>
          <h2 className={styles.chapterTitle}>
            <span className={styles.number}>{String(chapterIndex + 1).padStart(2, '0')}</span>
            {chapter.title}
          </h2>
          <div className={styles.gallery}>
            {chapter.media.map((media, mediaIndex) => (
              <figure
                key={media.src}
                className={`${styles.item} ${shape(media)}`}
              >
                <MediaItem media={media} preload={chapterIndex === 0 && mediaIndex === 0} />
              </figure>
            ))}
          </div>
        </section>
      ))}

      <Link className={styles.next} href={`/work/${next.slug}`}>
        <span className={styles.nextLabel}>Next case</span>
        <span className={styles.nextTitle}>{next.client} →</span>
      </Link>
    </main>
  );
}
