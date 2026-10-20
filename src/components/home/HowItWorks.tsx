import { steps } from "@/content/home";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className="section band-sky" aria-labelledby="how-title">
      <div className="wrap">
        <h2 id="how-title" className={styles.title}>
          How it works
        </h2>
        <p className={styles.intro}>Three simple steps. We do the hard part.</p>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.number} aria-hidden>
                {i + 1}
              </span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepBody}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
