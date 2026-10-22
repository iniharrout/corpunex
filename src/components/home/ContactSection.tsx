import { Mail, MessageSquareText, PhoneCall } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import CallbackButton from "@/components/callback/CallbackButton";
import { site } from "@/config/site";
import styles from "./ContactSection.module.css";

const next = [
  { title: "We read your message", body: "An advisor looks at what you're setting up or what's due." },
  { title: "We suggest the right setup", body: "You'll hear which registrations and filings apply to you." },
  { title: "You get an itemised quote", body: "Our fee and every government fee, on separate lines, before anything starts." },
];

export default function ContactSection() {
  return (
    <section id="contact" className={`section band-deep ${styles.section}`} aria-labelledby="contact-title">
      <div className="wrap">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2 id="contact-title" className={styles.title}>
            Tell us what you&apos;re building. <span className="highlight">We&apos;ll take it from there.</span>
          </h2>
          <p className={styles.lead}>Choose whichever suits you. There&apos;s no obligation.</p>
        </div>

        <ul className={styles.ways}>
          <li className={styles.way}>
            <span className={styles.icon} aria-hidden>
              <MessageSquareText size={22} strokeWidth={1.75} />
            </span>
            <h3 className={styles.wayTitle}>Send a message</h3>
            <p className={styles.wayBody}>Tell us about your business using the form below.</p>
            <a href="#contact-form" className={styles.wayLink}>
              Go to the form
            </a>
          </li>
          <li className={styles.way}>
            <span className={styles.icon} aria-hidden>
              <PhoneCall size={22} strokeWidth={1.75} />
            </span>
            <h3 className={styles.wayTitle}>Request a call back</h3>
            <p className={styles.wayBody}>Leave your number and an advisor will ring you.</p>
            <CallbackButton variant="secondary" icon={false} />
          </li>
          <li className={styles.way}>
            <span className={styles.icon} aria-hidden>
              <Mail size={22} strokeWidth={1.75} />
            </span>
            <h3 className={styles.wayTitle}>Email us</h3>
            <p className={styles.wayBody}>Write to us any time. Our office hours are {site.hours}.</p>
            <a href={`mailto:${site.email}`} className={styles.wayLink}>
              {site.email}
            </a>
          </li>
        </ul>

        <div id="contact-form" className={styles.card}>
          <div className={styles.form}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <p className={styles.formLead}>It takes about a minute.</p>
            <ContactForm formSource="Homepage Contact Form" />
          </div>
          <aside className={styles.next} aria-labelledby="next-title">
            <h3 id="next-title" className={styles.nextTitle}>
              What happens next
            </h3>
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
            <dl className={styles.facts}>
              <div>
                <dt>Offices</dt>
                <dd>{site.offices}</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{site.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
