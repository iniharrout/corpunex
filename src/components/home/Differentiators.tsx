import { differentiators } from "@/content/home";
import { Fact } from "@/components/ui/Placeholder";
import styles from "./Differentiators.module.css";

export default function Differentiators() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.aside}>
          <h2 id="why-title" className={styles.title}>
            Why founders choose Corpunex
          </h2>
          <p className={styles.intro}>
            Online portals can file a form. What founders tell us they want is someone accountable for getting it right.
          </p>
        </div>
        <ol className={styles.list}>
          {differentiators.map((d) => (
            <li key={d.title} className={styles.item}>
              <div className={styles.figure}>
                <span className={styles.number}>
                  <Fact value={d.figure} />
                </span>
                <span className={styles.caption}>{d.figureCaption}</span>
              </div>
              <div>
                <h3 className={styles.itemTitle}>{d.title}</h3>
                <p className={styles.body}>{d.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
