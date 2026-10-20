import { steps } from "@/content/home";
import { Certificate, ChatBubbles, FolderUpload } from "@/components/illustrations/Spots";
import { Sparkle, Star } from "@/components/illustrations/Doodles";
import styles from "./HowItWorks.module.css";

const art = [ChatBubbles, FolderUpload, Certificate];

export default function HowItWorks() {
  return (
    <section className={`section band-sky ${styles.section}`} aria-labelledby="how-title">
      <Sparkle className={styles.sparkle} size={40} />
      <Star className={styles.star} size={34} color="var(--color-yellow)" />
      <div className="wrap">
        <h2 id="how-title" className={styles.title}>
          How it works
        </h2>
        <p className={styles.intro}>
          Three steps. <span className="hand">We do the boring bits.</span>
        </p>
        <ol className={styles.steps}>
          {steps.map((s, i) => {
            const Art = art[i];
            return (
              <li key={s.title} className={`sticker ${styles.step}`} data-reveal>
                <span className={styles.number} aria-hidden>
                  {i + 1}
                </span>
                <Art className={styles.art} />
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
