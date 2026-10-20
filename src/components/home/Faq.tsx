import { Mail } from "lucide-react";
import { homeFaqs } from "@/content/home";
import { FaqList } from "@/components/shared/FaqList";
import { TextLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import { ChatBubbles } from "@/components/illustrations/Spots";
import { site } from "@/config/site";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.side}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 id="faq-title" className={styles.title}>
            Frequently asked questions
          </h2>
          <p className={styles.lead}>The questions first-time founders ask us most often.</p>
          <TextLink href="/faq">See all FAQs</TextLink>

          <div className={styles.help}>
            <ChatBubbles className={styles.helpArt} />
            <p className={styles.helpTitle}>Still have a question?</p>
            <p className={styles.helpText}>Our team will explain your options in plain language.</p>
            <CallbackButton variant="primary" block />
            <a href={`mailto:${site.email}`} className={styles.helpEmail}>
              <Mail size={16} strokeWidth={2} aria-hidden />
              {site.email}
            </a>
          </div>
        </div>
        <FaqList faqs={homeFaqs} />
      </div>
    </section>
  );
}
