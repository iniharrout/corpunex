import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import CallbackButton from "@/components/callback/CallbackButton";
import { PhoneRing } from "@/components/illustrations/Spots";
import { site } from "@/config/site";
import styles from "./TalkToUs.module.css";

/** Common situations, each pointing to the service that usually fits. */
const situations = [
  {
    need: "I have an idea and want to start a company",
    answer: "Private Limited company",
    href: "/services/business-registration/private-limited-company",
  },
  {
    need: "I'm going it alone",
    answer: "One Person Company",
    href: "/services/business-registration/one-person-company",
  },
  {
    need: "I'm starting a firm with partners",
    answer: "LLP",
    href: "/services/business-registration/llp-registration",
  },
  {
    need: "My sales are growing, or I sell across states",
    answer: "GST registration",
    href: "/services/gst-taxation/gst-registration",
  },
  {
    need: "I already have a company and filings are due",
    answer: "Annual ROC compliance",
    href: "/services/corporate-compliance/annual-roc-compliance",
  },
  {
    need: "I want to protect my brand name",
    answer: "Trademark registration",
    href: "/services/trademark-ip/trademark-registration",
  },
  {
    need: "I want Startup India recognition",
    answer: "DPIIT recognition",
    href: "/services/startup-services/startup-india-recognition",
  },
  {
    need: "I make or sell food",
    answer: "FSSAI licence",
    href: "/services/licences-registrations/fssai-licence",
  },
];

export default function TalkToUs() {
  return (
    <section className="section" aria-labelledby="talk-title">
      <div className="wrap">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Find your service</p>
          <h2 id="talk-title" className={styles.title}>
            Not sure where to start? <span className="highlight">Pick what sounds like you.</span>
          </h2>
          <p className={styles.lead}>
            Most founders arrive with one of these. Choose yours to see what&apos;s involved, the documents you need and
            how long it takes.
          </p>
        </div>

        <div className={styles.layout}>
          <ul className={styles.situations}>
            {situations.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={styles.situation}>
                  <span className={styles.need}>&ldquo;{s.need}&rdquo;</span>
                  <span className={styles.answer}>
                    {s.answer}
                    <ArrowRight size={16} strokeWidth={2} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <aside className={styles.advisor} aria-labelledby="advisor-title">
            <PhoneRing className={styles.art} />
            <h3 id="advisor-title" className={styles.advisorTitle}>
              Still not sure? Speak to an advisor.
            </h3>
            <p className={styles.advisorBody}>
              Tell us a little about your business. An advisor will call you back, explain your options in plain words
              and tell you what&apos;s involved. There&apos;s no obligation.
            </p>
            <CallbackButton variant="primary" size="large" block />
            <a href={`mailto:${site.email}`} className={styles.email}>
              <Mail size={16} strokeWidth={2} aria-hidden />
              {site.email}
            </a>
            <Link href="/services" className={styles.all}>
              Browse all services
              <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
