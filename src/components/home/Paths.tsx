import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { paths } from "@/content/home";
import { Calculator, Globe, Medal, Rocket } from "@/components/illustrations/Spots";
import styles from "./Paths.module.css";

const art = { rocket: Rocket, receipt: Calculator, badge: Medal, globe: Globe };

export default function Paths() {
  return (
    <section className="section" aria-labelledby="paths-title">
      <div className="wrap">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Get started</p>
          <h2 id="paths-title" className={styles.title}>
            Where are you in your journey?
          </h2>
          <p className={styles.intro}>Choose the option that fits. We&apos;ll show you exactly what comes next.</p>
        </div>
        <ul className={styles.grid}>
          {paths.map((p) => {
            const Art = art[p.icon];
            return (
              <li key={p.title}>
                <Link href={p.href} className={`sticker ${styles.card}`} data-reveal>
                  <Art className={styles.art} />
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardBody}>{p.body}</p>
                  <span className={styles.cta}>
                    {p.cta}
                    <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
