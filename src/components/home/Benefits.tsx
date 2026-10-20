import { benefits } from "@/content/home";
import { Calculator, Calendar, Certificate, ChatBubbles } from "@/components/illustrations/Spots";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./Benefits.module.css";

const art = { receipt: Calculator, shield: Certificate, chat: ChatBubbles, calendar: Calendar };
/** Cover tint chosen to sit well behind each illustration's own colours. */
const cover = { receipt: "mint", shield: "sky", chat: "sun", calendar: "peach" } as const;

export default function Benefits() {
  return (
    <section className="section band-deep" aria-labelledby="benefits-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Why Corpunex</p>
          <h2 id="benefits-title" className={styles.title}>
            Why founders choose us
          </h2>
          <p className={styles.lead}>
            Registering a company is only the start. We stay with you for the filings that follow, explain every step,
            and never surprise you with a bill.
          </p>
          <ButtonLink href="/about" variant="secondary" arrow>
            About Corpunex
          </ButtonLink>
        </div>
        <ul className={styles.cards}>
          {benefits.map((b) => {
            const Art = art[b.icon];
            return (
              <li key={b.title} className={`sticker ${styles.card}`} data-reveal>
                <div className={`${styles.cover} ${styles[cover[b.icon]]}`}>
                  <Art className={styles.art} />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>{b.title}</h3>
                  <p className={styles.cardText}>{b.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
