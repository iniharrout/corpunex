import { PhotoFrame } from "@/components/ui/PhotoFrame";
import CallbackButton from "@/components/callback/CallbackButton";
import { site } from "@/config/site";
import styles from "./TalkToUs.module.css";

export default function TalkToUs() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="talk-title">
      <div className={`wrap ${styles.card}`}>
        <PhotoFrame
          src="/images/compliance-advisor.jpg"
          alt="A Corpunex advisor walking a founder through their company documents on a laptop"
          ratio="16 / 10"
          className={styles.photo}
          sizes="(min-width: 900px) 50vw, 100vw"
        />
        <div className={styles.copy}>
          <h2 id="talk-title" className={styles.title}>
            Got questions? Talk to a real person.
          </h2>
          <p className={styles.body}>
            Starting a company for the first time raises a lot of questions. Ask us anything, even if you&apos;re not
            sure you&apos;re ready yet. We&apos;ll explain your options in plain language.
          </p>
          <div className={styles.actions}>
            <CallbackButton variant="primary" size="large" />
            <a href={`mailto:${site.email}`} className={styles.email}>
              or email {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
