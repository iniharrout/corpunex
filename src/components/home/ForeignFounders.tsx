import { foreignFounderPoints } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./ForeignFounders.module.css";

export default function ForeignFounders() {
  return (
    <section className={`section band-ink ${styles.section}`} aria-labelledby="foreign-title">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <h2 id="foreign-title" className={styles.title}>
            Setting up in India from abroad?
          </h2>
          <p className={styles.intro}>
            Foreign and NRI founders follow the same incorporation process with a few extra rules under the Companies
            Act and FEMA. We handle the apostilled documents, the resident director question and RBI reporting.
          </p>
          <ButtonLink href="/contact" variant="onInk" arrow>
            Talk to a cross-border advisor
          </ButtonLink>
        </div>
        <div>
          <h3 className={styles.listTitle}>What is different for you</h3>
          <ol className={styles.list}>
            {foreignFounderPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
