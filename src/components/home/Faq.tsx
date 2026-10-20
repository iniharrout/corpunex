import { Mail } from "lucide-react";
import { homeFaqs } from "@/content/home";
import { faqGroups } from "@/content/faqs";
import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import { ChatBubbles } from "@/components/illustrations/Spots";
import { site } from "@/config/site";
import FaqTabs from "./FaqTabs";
import styles from "./Faq.module.css";

/** Short tab names for the FAQ groups. */
const tabLabels: Record<string, string> = {
  "about-us": "About us",
  incorporation: "Registering",
  startups: "Startups",
  tax: "GST and tax",
  trademarks: "Trademarks",
  compliance: "Yearly filings",
  "working-with-us": "Fees",
};

export default function Faq() {
  const tabs = [
    { id: "popular", label: "Most asked", faqs: homeFaqs },
    ...faqGroups.map((g) => ({ id: g.id, label: tabLabels[g.id] ?? g.title, faqs: g.faqs })),
  ];

  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="wrap">
        <div className={styles.head}>
          <p className={styles.eyebrow}>Questions</p>
          <h2 id="faq-title" className={styles.title}>
            Answers to what founders <span className="highlight">ask us most.</span>
          </h2>
          <p className={styles.lead}>Pick a topic. Every answer is in plain words, with no jargon.</p>
        </div>

        <FaqTabs tabs={tabs} />

        <div className={styles.help}>
          <ChatBubbles className={styles.helpArt} />
          <div className={styles.helpText}>
            <p className={styles.helpTitle}>Didn&apos;t find your answer?</p>
            <p>Ask us anything and an advisor will get back to you.</p>
          </div>
          <div className={styles.helpActions}>
            <CallbackButton variant="primary" />
            <a href={`mailto:${site.email}`} className={styles.helpEmail}>
              <Mail size={16} strokeWidth={2} aria-hidden />
              Email us
            </a>
            <ButtonLink href="/faq" variant="ghost" arrow>
              All questions
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
