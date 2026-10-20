import Link from "next/link";
import { journey } from "@/content/home";
import styles from "./Journey.module.css";

export default function Journey() {
  return (
    <section className="section" aria-labelledby="journey-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="journey-title" className={styles.title}>
            One firm from the first filing to the funding round.
          </h2>
          <p className={styles.intro}>
            Most founders use us for incorporation, then keep us for what comes next. Each stage below links to the
            services involved.
          </p>
        </div>

        <ol className={styles.track}>
          {journey.map((stage, i) => (
            <li key={stage.step} className={styles.stage}>
              <span className={styles.marker} aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.step}>{stage.step}</h3>
              <p className={styles.summary}>{stage.summary}</p>
              <ul className={styles.links}>
                {stage.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
