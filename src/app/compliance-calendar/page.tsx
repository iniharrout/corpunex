import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { calendar, monthly, type Deadline } from "@/content/calendar";
import PageHeader from "@/components/shared/PageHeader";
import JumpNav from "@/components/shared/JumpNav";
import CtaBand from "@/components/shared/CtaBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Compliance Calendar for Companies and LLPs",
  description:
    "Every yearly due date for Private Limited companies and LLPs in one place: ROC filings, GST returns, TDS, advance tax and income tax returns, month by month.",
  alternates: { canonical: "/compliance-calendar" },
};

const tone: Record<Deadline["who"], string> = {
  Companies: styles.sky,
  LLPs: styles.mint,
  "Everyone with GST": styles.sun,
  "Everyone who deducts TDS": styles.peach,
  "All businesses": styles.lilac,
};

function Row({ d }: { d: Deadline }) {
  return (
    <li className={styles.row}>
      <span className={styles.date}>{d.date}</span>
      <div className={styles.detail}>
        <p className={styles.filing}>
          {d.href ? (
            <Link href={d.href}>
              {d.filing}
              <ArrowRight size={14} strokeWidth={2} aria-hidden />
            </Link>
          ) : (
            d.filing
          )}
        </p>
        <p className={styles.what}>{d.what}</p>
      </div>
      <span className={`${styles.who} ${tone[d.who]}`}>{d.who}</span>
    </li>
  );
}

export default function ComplianceCalendarPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Compliance calendar", href: "/compliance-calendar" },
        ]}
        title="Compliance calendar: every due date for your business."
        highlight="every due date"
        lead="The filings a Private Limited company or LLP makes in a year, month by month, for a financial year ending 31 March. Miss one and late fees or interest usually follow."
        tone="sun"
      >
        <JumpNav
          label="Months"
          items={[{ id: "every-month", label: "Every month" }, ...calendar.map((m) => ({ id: m.month.toLowerCase(), label: m.month }))]}
        />
      </PageHeader>

      <div className={`wrap ${styles.body}`}>
        <p className={styles.note}>
          These are the usual dates. The government sometimes extends them, and some only apply above certain limits.
          Your own calendar depends on your business, which we work out for you.
        </p>

        <section id="every-month" className={styles.month} aria-labelledby="every-month-title">
          <h2 id="every-month-title" className={styles.monthTitle}>
            Every month
          </h2>
          <ul className={styles.rows}>
            {monthly.map((d) => (
              <Row key={d.filing} d={d} />
            ))}
          </ul>
        </section>

        {calendar.map((m) => (
          <section key={m.month} id={m.month.toLowerCase()} className={styles.month} aria-labelledby={`${m.month}-title`}>
            <h2 id={`${m.month}-title`} className={styles.monthTitle}>
              {m.month}
            </h2>
            <ul className={styles.rows}>
              {m.deadlines.map((d) => (
                <Row key={d.date + d.filing} d={d} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CtaBand title="Never miss a due date again.">
        We keep your calendar, remind you what we need, and file every form on time.
      </CtaBand>
    </>
  );
}
