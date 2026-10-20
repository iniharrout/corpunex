import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { articles, readingMinutes, type Article } from "@/content/articles";
import { Calculator, Certificate, Medal, Rocket, FolderUpload } from "@/components/illustrations/Spots";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./Guides.module.css";

/** Cover illustration and tint for each guide category. */
const covers: Record<Article["category"], { Art: (p: { className?: string }) => React.ReactNode; tone: string }> = {
  "Starting up": { Art: Rocket, tone: "sky" },
  "Startup schemes": { Art: Medal, tone: "sun" },
  Tax: { Art: Calculator, tone: "mint" },
  Trademarks: { Art: Certificate, tone: "lilac" },
  Compliance: { Art: FolderUpload, tone: "peach" },
};

export default function Guides() {
  const latest = articles.slice(0, 3);
  return (
    <section className="section band-deep" aria-labelledby="guides-title">
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Resources</p>
            <h2 id="guides-title" className={styles.title}>
              Guides for founders
            </h2>
            <p className={styles.intro}>Clear, practical explainers on registration, tax and compliance in India.</p>
          </div>
          <ButtonLink href="/resources" variant="secondary" arrow>
            View all guides
          </ButtonLink>
        </div>
        <ul className={styles.list}>
          {latest.map((a) => {
            // Document-checklist guides get the folder rather than a second rocket.
            const { Art, tone } = /document/.test(a.slug)
              ? { Art: FolderUpload, tone: "peach" }
              : covers[a.category];
            return (
              <li key={a.slug}>
                <Link href={`/resources/${a.slug}`} className={`sticker ${styles.card}`} data-reveal>
                  <div className={`${styles.cover} ${styles[tone]}`}>
                    <Art className={styles.art} />
                  </div>
                  <div className={styles.body}>
                    <span className={styles.tag}>{a.category}</span>
                    <h3 className={styles.cardTitle}>{a.title}</h3>
                    <p className={styles.summary}>{a.summary}</p>
                    <div className={styles.meta}>
                      <span>
                        <Clock size={14} strokeWidth={2} aria-hidden />
                        {readingMinutes(a)} min read
                      </span>
                      <span className={styles.read}>
                        Read guide
                        <ArrowRight size={14} strokeWidth={2.25} aria-hidden />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
