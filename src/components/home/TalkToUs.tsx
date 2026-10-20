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
            Got questions? Talk to a <span className="highlight">real person.</span>
          </h2>
          <p className={styles.body}>
            Starting a company for the first time raises a lot of questions. Ask us anything, even if you&apos;re not
            sure you&apos;re ready. We&apos;ll explain your options in plain language, no pressure.
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
