import type { Metadata } from "next";
import ContactPanel from "@/components/shared/ContactPanel";
import { Fact } from "@/components/ui/Placeholder";
import { site, timeline } from "@/config/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Talk to an advisor",
  description:
    "Ask about company registration, GST, accounting, compliance or entering India as a foreign founder. Reply by phone, email or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className={styles.page} aria-labelledby="contact-title">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <h1 id="contact-title" className={styles.title}>
            Talk to an advisor
          </h1>
          <p className={styles.lead}>
            Tell us what you are setting up or what is due. An advisor will reply with what is needed, how long it
            takes and what it costs.
          </p>

          <dl className={styles.details}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone and WhatsApp</dt>
              <dd>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{site.hours}</dd>
            </div>
            <div>
              <dt>Offices</dt>
              <dd>{site.offices}</dd>
            </div>
            <div>
              <dt>Registered office</dt>
              <dd>
                <Fact value={site.registeredAddress} />
              </dd>
            </div>
          </dl>

          <p className={styles.note}>
            Registering a company? Have your proposed names, the directors&apos; PAN cards and the registered office
            address ready. Incorporation typically takes {timeline.short} from complete documents.
          </p>
        </div>
        <ContactPanel title="Send us a message" />
      </div>
    </section>
  );
}
