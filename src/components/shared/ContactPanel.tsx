import { MessageCircle, Phone, CalendarDays } from "lucide-react";
import { site } from "@/config/site";
import ContactForm from "./ContactForm";
import styles from "./ContactPanel.module.css";

/** Short enquiry form with WhatsApp, phone and booking alternatives. */
export default function ContactPanel({ title = "Tell us what you need" }: { title?: string }) {
  const bookingHref = site.bookingUrl ?? site.phoneHref;
  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.intro}>Short form, no obligation. An advisor reads every message.</p>
      <ContactForm />
      <div className={styles.alternatives}>
        <p className={styles.or}>Or reach us directly</p>
        <ul>
          <li>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} strokeWidth={1.5} aria-hidden />
              WhatsApp
            </a>
          </li>
          <li>
            <a href={bookingHref} {...(site.bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <CalendarDays size={18} strokeWidth={1.5} aria-hidden />
              Book a call
            </a>
          </li>
          <li>
            <a href={site.phoneHref}>
              <Phone size={18} strokeWidth={1.5} aria-hidden />
              {site.phoneDisplay}
            </a>
          </li>
        </ul>
        <p className={styles.hours}>{site.hours}</p>
      </div>
    </div>
  );
}
