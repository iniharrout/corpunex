import type { Metadata } from "next";
import { faqGroups } from "@/content/faqs";
import PageHeader from "@/components/shared/PageHeader";
import JumpNav from "@/components/shared/JumpNav";
import { FaqList, faqSchema } from "@/components/shared/FaqList";
import CtaBand from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FAQs: Company Registration, GST and Compliance",
  description:
    "Answers on company and LLP registration, Startup India, GST and income tax, trademarks, annual compliance, and how our fees work.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqGroups.flatMap((g) => g.faqs))} />

      <PageHeader
        art="chat"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Questions", href: "/faq" },
        ]}
        title="Questions founders ask us."
        highlight="founders ask us."
        tone="sun"
        lead="Short, plain answers to what comes up most. If yours isn't here, ask us and an advisor will get back to you."
      >
        <JumpNav label="Topics" items={faqGroups.map((g) => ({ id: g.id, label: g.title }))} />
      </PageHeader>

      <div className={`wrap section ${styles.list}`}>
        {faqGroups.map((g) => (
          <section key={g.id} id={g.id} className={styles.group} aria-labelledby={`${g.id}-title`}>
            <h2 id={`${g.id}-title`} className={styles.h2}>
              {g.title}
            </h2>
            <FaqList faqs={g.faqs} />
          </section>
        ))}
      </div>

      <CtaBand title="Still have a question?">Send it to us. Send it to us and an advisor will get back to you.</CtaBand>
    </>
  );
}
