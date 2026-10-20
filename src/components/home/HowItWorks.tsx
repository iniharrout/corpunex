import { steps } from "@/content/home";
import { Certificate, ChatBubbles, FolderUpload } from "@/components/illustrations/Spots";
import styles from "./HowItWorks.module.css";

const art = [ChatBubbles, FolderUpload, Certificate];

export default function HowItWorks() {
  return (
    <section className="section band-deep" aria-labelledby="how-title">
      <div className="wrap">
        <div className={styles.head}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 id="how-title" className={styles.title}>
            Three steps from idea to registered company
          </h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((s, i) => {
            const Art = art[i];
            return (
              <li key={s.title} className={`sticker ${styles.step}`} data-reveal>
                <Art className={styles.art} />
                <p className={styles.number}>Step {i + 1}</p>
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
