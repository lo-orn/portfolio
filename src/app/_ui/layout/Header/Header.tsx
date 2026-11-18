import Link from 'next/link';
import Clock from './Clock';
import styles from './Header.module.css';

const links = ['work', 'lab', 'about', 'contact'];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Lo Eklöf Örnestål</Link>
      <nav aria-label="main">
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link}>
              <a className={styles.link} href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles.status}>
        Stockholm <Clock /> · Intern at Most Studios
      </p>
    </header>
  );
}
