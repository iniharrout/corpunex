import { Mail } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import CallbackLink from "@/components/callback/CallbackLink";
import { site } from "@/config/site";
import styles from "./ContactSection.module.css";

const next = [
  { title: "We read your message", body: "An advisor looks at what you're setting up or what's due." },
  { title: "We suggest the right setup", body: "You'll hear which registrations and filings apply to you." },
  { title: "You get an itemised quote", body: "Our fee and every government fee, on separate lines." },
];

export default function ContactSection() {
  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-title">
      <div className="wrap">
        <div className={styles.card}>
          <div className={styles.info}>
            <p className={styles.eyebrow}>Get in touch</p>
            <h2 id="contact-title" className={styles.title}>
              Tell us what you&apos;re building
            </h2>
            <p className={styles.lead}>No obligation. It takes about a minute.</p>
            <ol className={styles.steps}>
              {next.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.num} aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <p className={styles.stepTitle}>{s.title}</p>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={styles.direct}>
              <a href={`mailto:${site.email}`}>
                <Mail size={16} strokeWidth={2} aria-hidden />
                {site.email}
              </a>
              <CallbackLink className={styles.callback} />
            </div>
          </div>
          <div className={styles.form}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
