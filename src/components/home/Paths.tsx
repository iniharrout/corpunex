import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { paths } from "@/content/home";
import { ToneIcon } from "@/components/ui/ToneIcon";
import styles from "./Paths.module.css";

export default function Paths() {
  return (
    <section className="section" aria-labelledby="paths-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="paths-title" className={styles.title}>
            Where are you right now?
          </h2>
          <p className={styles.intro}>Pick the one that sounds like you. We&apos;ll show you what to do next.</p>
        </div>
        <ul className={styles.grid}>
          {paths.map((p) => (
            <li key={p.title}>
              <Link href={p.href} className={`${styles.card} ${styles[p.tone]} on-tone`}>
                <ToneIcon name={p.icon} tone={p.tone} />
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardBody}>{p.body}</p>
                <span className={styles.cta}>
                  {p.cta}
                  <ArrowRight size={16} strokeWidth={2} aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
