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
          <div>
            <h2 id="guides-title" className={styles.title}>
              Free guides for founders
            </h2>
            <p className={styles.intro}>Simple explainers on the things nobody tells you about starting up.</p>
          </div>
          <TextLink href="/resources">See all guides</TextLink>
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
