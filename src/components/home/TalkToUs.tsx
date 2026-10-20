import Image from "next/image";
import CallbackButton from "@/components/callback/CallbackButton";
import { PhoneRing } from "@/components/illustrations/Spots";
import { site } from "@/config/site";
import styles from "./TalkToUs.module.css";

export default function TalkToUs() {
  return (
    <section className="section" aria-labelledby="talk-title">
      <div className={`wrap ${styles.grid}`}>
        <figure className={styles.polaroid} data-reveal>
          <div className={styles.photo}>
            <Image
              src="/images/compliance-advisor.jpg"
              alt="An advisor walking a founder through their company documents on a laptop"
              fill
              sizes="(min-width: 900px) 40vw, 90vw"
            />
          </div>
        </figure>
        <div className={styles.copy}>
          <PhoneRing className={styles.phone} />
          <h2 id="talk-title" className={styles.title}>
            Not sure where to start? <span className="highlight">Speak to an advisor.</span>
          </h2>
          <p className={styles.body}>
            A short call is often the quickest way to work out what you need. An advisor will listen, explain your
            options in plain language and tell you what it involves. There&apos;s no obligation.
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
