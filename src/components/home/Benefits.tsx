import { benefits } from "@/content/home";
import { ToneIcon } from "@/components/ui/ToneIcon";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={`section band-ink ${styles.section}`} aria-labelledby="benefits-title">
      <div className="wrap">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Why Corpunex</p>
          <h2 id="benefits-title" className={styles.title}>
            Built for founders doing this for the first time
          </h2>
        </div>
        <ul className={styles.grid}>
          {benefits.map((b) => (
            <li key={b.title} className={styles.item} data-reveal>
              <ToneIcon name={b.icon} tone={b.tone} />
              <h3 className={styles.itemTitle}>{b.title}</h3>
              <p className={styles.body}>{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
