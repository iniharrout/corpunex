import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { paths } from "@/content/home";
import { Calculator, Globe, Medal, Rocket } from "@/components/illustrations/Spots";
import CallbackLink from "@/components/callback/CallbackLink";
import ServicePicker from "./ServicePicker";
import styles from "./Hero.module.css";

const art = { rocket: Rocket, receipt: Calculator, badge: Medal, globe: Globe };

export default function Hero() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`wrap ${styles.inner}`}>
          <p className={styles.kicker}>
            <ShieldCheck size={16} strokeWidth={2} aria-hidden />
            Filings prepared and certified by CAs and CSs
          </p>
          <h1 id="hero-title" className={styles.title}>
            Your business, set up right <em>and kept compliant.</em>
          </h1>
          <p className={styles.lead}>
            We register your company, set up GST and take care of your yearly filings, so you can focus on building
            your business.
          </p>
          <ServicePicker />
          <p className={styles.alt}>
            Not sure what you need? <CallbackLink className={styles.altLink} />
          </p>
        </div>
      </section>

      {/* The four starting points, rising out of the hero */}
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
