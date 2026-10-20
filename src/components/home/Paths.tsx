import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { paths } from "@/content/home";
import { Calculator, Globe, Medal, Rocket } from "@/components/illustrations/Spots";
import { CurvyArrow } from "@/components/illustrations/Doodles";
import styles from "./Paths.module.css";

const art = { rocket: Rocket, receipt: Calculator, badge: Medal, globe: Globe };

export default function Paths() {
  return (
    <section className="section" aria-labelledby="paths-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="paths-title" className={styles.title}>
            So, where are you right now?
          </h2>
          <p className={`hand ${styles.note}`} aria-hidden>
            pick one!
          </p>
          <CurvyArrow className={styles.arrow} size={64} />
        </div>
        <ul className={styles.grid}>
          {paths.map((p, i) => {
            const Art = art[p.icon];
            return (
              <li key={p.title} style={{ ["--tilt" as string]: `${[-1.5, 1, -1, 1.5][i]}deg` }}>
                <Link href={p.href} className={`sticker ${styles.card} ${styles[p.tone]}`}>
                  <Art className={styles.art} />
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardBody}>{p.body}</p>
                  <span className={styles.cta}>
                    {p.cta}
                    <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
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
