import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import styles from "./FaqList.module.css";

export interface Faq {
  question: string;
  /** Plain text, also used for FAQPage schema. */
  answer: string;
  /** Optional richer rendering of the answer. */
  body?: ReactNode;
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className={styles.list}>
      {faqs.map((faq) => (
        <details key={faq.question} className={styles.item}>
          <summary className={styles.question}>
            <span>{faq.question}</span>
            <Plus size={20} strokeWidth={1.5} aria-hidden className={styles.icon} />
          </summary>
          <div className={styles.answer}>{faq.body ?? <p>{faq.answer}</p>}</div>
        </details>
      ))}
    </div>
  );
}

/** FAQPage schema. Answers still containing placeholders are left out. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.filter((f) => !/\[(VERIFY|REAL)/.test(f.answer)).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
