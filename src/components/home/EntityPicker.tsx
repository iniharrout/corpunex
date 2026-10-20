import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { incorporationTiers } from "@/content/pricing";
import { inr } from "@/lib/fees";
import CallbackButton from "@/components/callback/CallbackButton";
import { People } from "@/components/illustrations/Spots";
import styles from "./EntityPicker.module.css";

const crew: Record<string, 1 | 2 | 3> = { pvt: 3, llp: 2, opc: 1 };

const plain: Record<string, { tag: string; points: string[] }> = {
  pvt: {
    tag: "Most popular",
    points: ["You can raise money from investors", "You can give employees stock options", "2 or more founders"],
  },
  llp: {
    tag: "Fewer filings",
    points: ["Good for firms and agencies", "Lighter yearly compliance", "2 or more partners"],
  },
  opc: {
    tag: "Solo founder",
    points: ["Just you, no co-founder needed", "Limited liability like a company", "Can convert to Pvt Ltd later"],
  },
};

export default function EntityPicker() {
  return (
    <section className="section" aria-labelledby="entity-title">
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <h2 id="entity-title" className={styles.title}>
              Which type of company is right for you?
            </h2>
            <p className={styles.intro}>Here&apos;s the short version. We&apos;ll help you decide on a call.</p>
          </div>
          <CallbackButton topic="Register a company or LLP">Help me choose</CallbackButton>
        </div>
        <ul className={styles.grid}>
          {incorporationTiers.map((t) => (
            <li key={t.entity} className={`sticker ${styles.card}`} data-featured={t.entity === "pvt" || undefined}>
              <span className={styles.tag}>{plain[t.entity].tag}</span>
              <People count={crew[t.entity]} className={styles.people} />
              <h3 className={styles.name}>{t.name}</h3>
              <ul className={styles.points}>
                {plain[t.entity].points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className={styles.price}>
                <span className={styles.from}>from</span> <span className="tabular">{inr(t.price)}</span>
                <span className={styles.plus}> + GST</span>
              </p>
              <Link href={t.href} className={styles.link}>
                See what&apos;s included
                <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.note}>Government fees are extra and depend on your state. See the calculator below.</p>
      </div>
    </section>
  );
}
