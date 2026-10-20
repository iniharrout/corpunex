import { Building2, Plane, Rocket } from "lucide-react";
import { foreignSetupSteps } from "@/content/home";
import { Globe } from "@/components/illustrations/Spots";
import CallbackButton from "@/components/callback/CallbackButton";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./ForeignFounders.module.css";

const audiences = [
  { icon: Building2, label: "Foreign companies opening an Indian subsidiary" },
  { icon: Plane, label: "NRIs starting a company back home" },
  { icon: Rocket, label: "Overseas startups building a team in India" },
];

export default function ForeignFounders() {
  return (
    <section className="section" aria-labelledby="foreign-title">
      <div className="wrap">
        <div className={styles.card}>
          <div className={styles.top}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>Setting up from abroad</p>
              <h2 id="foreign-title" className={styles.title}>
                Expanding into India? <span className="highlight">We&apos;ll handle the setup.</span>
              </h2>
              <p className={styles.lead}>
                Registering an Indian company from abroad follows the same process as for Indian founders, plus a few
                extra steps for documents signed overseas and for India&apos;s foreign investment rules. We take care of
                each one.
              </p>
              <div className={styles.actions}>
                <ButtonLink href="/services/business-registration/indian-subsidiary" size="large" arrow>
                  Indian subsidiary setup
                </ButtonLink>
                <CallbackButton topic="Foreign founder entering India" size="large">
                  Talk to a cross-border advisor
                </CallbackButton>
              </div>
            </div>

            <div className={styles.visual}>
              <Globe className={styles.globe} />
              <ul className={styles.audiences} aria-label="Who this is for">
                {audiences.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <span className={styles.audienceIcon} aria-hidden>
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.path}>
            <h3 className={styles.pathTitle}>How it works from abroad</h3>
            <ol className={styles.steps}>
              {foreignSetupSteps.map((step, i) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.num} aria-hidden>
                    {i + 1}
                  </span>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepBody}>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
