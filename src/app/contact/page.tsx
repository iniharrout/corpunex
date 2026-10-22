import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactPanel from "@/components/shared/ContactPanel";
import CallbackButton from "@/components/callback/CallbackButton";
import { site, timeline } from "@/config/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us: Talk to a Company Registration Expert",
  description:
    "Tell us about your business and we'll suggest the right setup, with a clear quote. Or request a call back.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className={styles.page} aria-labelledby="contact-title">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <h1 id="contact-title" className={styles.title}>
            Let&apos;s get your business <span className="highlight">started.</span>
          </h1>
          <p className={styles.lead}>
            Tell us what you&apos;re planning. We&apos;ll reply with what you need, how long it takes and what it
            costs. No jargon, no obligation.
          </p>

          <div className={styles.options}>
            <div className={styles.option}>
              <h2 className={styles.optionTitle}>Rather talk it through?</h2>
              <p>Leave your number and we&apos;ll call you back during working hours.</p>
              <CallbackButton variant="primary" />
            </div>
            <div className={styles.option}>
              <h2 className={styles.optionTitle}>Email us</h2>
              <p>
                <a href={`mailto:${site.email}`} className={styles.email}>
                  <Mail size={18} strokeWidth={2} aria-hidden />
                  {site.email}
                </a>
              </p>
              <p className={styles.small}>
                {site.hours} · {site.offices}
              </p>
            </div>
          </div>

          <p className={styles.note}>
            Registering a company? Keep your proposed company names, each director&apos;s PAN card and an address
            proof for the office handy. Registration usually takes {timeline.short} once we have everything.
          </p>
        </div>
        <ContactPanel
          title="Send us a message"
          formSource="Contact Us Page Form"
        />
      </div>
    </section>
  );
}
