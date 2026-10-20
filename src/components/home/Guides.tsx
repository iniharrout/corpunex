import Link from "next/link";
import { articles, readingMinutes } from "@/content/articles";
import { TextLink } from "@/components/ui/Button";
import styles from "./Guides.module.css";

export default function Guides() {
  const latest = articles.slice(0, 3);
  return (
    <section className="section band-deep" aria-labelledby="guides-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="guides-title" className={styles.title}>
            Guides
          </h2>
          <TextLink href="/resources">All guides</TextLink>
        </div>
        <ul className={styles.list}>
          {latest.map((a) => (
            <li key={a.slug}>
              <Link href={`/resources/${a.slug}`} className={styles.item}>
                <span className={styles.meta}>
                  {a.category} · {readingMinutes(a)} min read
                </span>
                <span className={styles.itemTitle}>{a.title}</span>
                <span className={styles.summary}>{a.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
