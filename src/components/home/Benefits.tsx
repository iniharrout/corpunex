import { benefits } from "@/content/home";
import { ToneIcon } from "@/components/ui/ToneIcon";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className="section" aria-labelledby="benefits-title">
      <div className="wrap">
        <h2 id="benefits-title" className={styles.title}>
          Why founders choose Corpunex
        </h2>
        <ul className={styles.grid}>
          {benefits.map((b) => (
            <li key={b.title} className={styles.item}>
              <ToneIcon name={b.icon} tone={b.tone} />
              <div>
                <h3 className={styles.itemTitle}>{b.title}</h3>
                <p className={styles.body}>{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
