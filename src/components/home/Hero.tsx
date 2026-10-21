import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  FileText,
  MapPin,
  MessagesSquare,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { paths } from "@/content/home";
import { timeline } from "@/config/site";
import { Calculator, Globe, Medal, Rocket } from "@/components/illustrations/Spots";
import CallbackLink from "@/components/callback/CallbackLink";
import ServicePicker from "./ServicePicker";
import styles from "./Hero.module.css";

const art = { rocket: Rocket, receipt: Calculator, badge: Medal, globe: Globe };

const trust = [
  { icon: ShieldCheck, label: "Filings certified by CAs and CSs" },
  { icon: ReceiptText, label: "Itemised quote before you start" },
  { icon: MapPin, label: "Bhubaneswar and New Delhi" },
];

/** The steps shown in the illustrated tracker. Generic, not a real client's file. */
const trackerSteps = [
  { title: "Name approved", detail: "Checked against existing companies and trademarks", state: "done" },
  { title: "Documents checked", detail: "Every ID and address proof reviewed", state: "done" },
  { title: "Registration filed", detail: "Rulebook (MoA and AoA) and forms, signed online", state: "active" },
  { title: "Certificate issued", detail: "Certificate of incorporation, PAN and TAN", state: "todo" },
] as const;

function Tracker() {
  return (
    <div className={styles.scene} aria-hidden>
      <div className={styles.tracker}>
        <div className={styles.trackerHead}>
          <span className={styles.trackerIcon}>
            <FileText size={18} strokeWidth={2} />
          </span>
          <div>
            <p className={styles.trackerLabel}>Your company setup</p>
            <p className={styles.trackerName}>Your Company Private Limited</p>
          </div>
          <span className={styles.trackerStatus}>In progress</span>
        </div>

        <div className={styles.progress}>
          <span className={styles.progressFill} />
        </div>
        <p className={styles.progressNote}>{timeline.sentence}</p>

        <ol className={styles.steps}>
          {trackerSteps.map((s) => (
            <li key={s.title} className={styles.step} data-state={s.state}>
              <span className={styles.dot}>{s.state === "done" && <Check size={12} strokeWidth={3} />}</span>
              <div>
                <p className={styles.stepTitle}>{s.title}</p>
                <p className={styles.stepDetail}>{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={`${styles.float} ${styles.floatGst}`}>
        <span className={`${styles.floatIcon} ${styles.mint}`}>
          <BadgeCheck size={18} strokeWidth={2} />
        </span>
        <div>
          <p className={styles.floatTitle}>GST registration</p>
          <p className={styles.floatBody}>Set up when you need it</p>
        </div>
      </div>

      <div className={`${styles.float} ${styles.floatDue}`}>
        <span className={`${styles.floatIcon} ${styles.sun}`}>
          <CalendarClock size={18} strokeWidth={2} />
        </span>
        <div>
          <p className={styles.floatTitle}>Yearly filings</p>
          <p className={styles.floatBody}>Reminded before each due date</p>
        </div>
      </div>

      <div className={`${styles.float} ${styles.floatAdvisor}`}>
        <span className={`${styles.floatIcon} ${styles.sky}`}>
          <MessagesSquare size={18} strokeWidth={2} />
        </span>
        <div>
          <p className={styles.floatTitle}>Real people to ask</p>
          <p className={styles.floatBody}>By email or a call back</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`wrap ${styles.inner}`}>
          <div className={styles.copy}>
            <p className={styles.kicker}>
              <span className={styles.kickerDot} aria-hidden />
              Company registration, GST and compliance in India
            </p>
            <h1 id="hero-title" className={styles.title}>
              Your business, set up right <em>and kept compliant.</em>
            </h1>
            <p className={styles.lead}>
              We register your company, set up GST and take care of every yearly filing. You get one clear quote up
              front and a team of CAs and CSs behind every form, so you can focus on building.
            </p>

            <div className={styles.picker}>
              <ServicePicker />
            </div>

            <p className={styles.alt}>
              Not sure what you need? <CallbackLink className={styles.altLink} />
              <span className={styles.altSep} aria-hidden>
                or
              </span>
              <Link href="/tools/company-type-finder" className={styles.altLink}>
                find your company type
              </Link>
            </p>

            <ul className={styles.trust}>
              {trust.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={16} strokeWidth={2} aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <Tracker />
        </div>
      </section>

      {/* The four starting points */}
      <section className={styles.pathsWrap} aria-label="Choose where you are">
        <ul className={`wrap ${styles.paths}`}>
          {paths.map((p) => {
            const Art = art[p.icon];
            return (
              <li key={p.title}>
                <Link href={p.href} className={styles.path}>
                  <Art className={styles.pathArt} />
                  <span className={styles.pathTitle}>{p.title}</span>
                  <span className={styles.pathBody}>{p.body}</span>
                  <span className={styles.pathCta}>
                    {p.cta}
                    <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
