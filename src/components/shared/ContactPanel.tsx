import { Mail } from "lucide-react";
import { site } from "@/config/site";
import CallbackButton from "@/components/callback/CallbackButton";
import ContactForm from "./ContactForm";
import styles from "./ContactPanel.module.css";

/** Short enquiry form, with email and call-back as alternatives. */
export default function ContactPanel({ title = "Tell us what you need" }: { title?: string }) {
  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.intro}>It takes a minute. No obligation.</p>
      <ContactForm />
      <div className={styles.alternatives}>
        <p className={styles.or}>Prefer to talk?</p>
        <div className={styles.row}>
          <CallbackButton />
          <a href={`mailto:${site.email}`} className={styles.email}>
            <Mail size={18} strokeWidth={2} aria-hidden />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
