"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import styles from "./Tools.module.css";

type Answer = string;

const questions: { id: string; question: string; options: { value: Answer; label: string }[] }[] = [
  {
    id: "people",
    question: "How many people will own the business?",
    options: [
      { value: "one", label: "Just me" },
      { value: "many", label: "Two or more of us" },
    ],
  },
  {
    id: "invest",
    question: "Do you plan to raise money from investors, or give staff shares (ESOPs)?",
    options: [
      { value: "yes", label: "Yes, now or later" },
      { value: "no", label: "No, we'll fund it ourselves" },
    ],
  },
  {
    id: "protect",
    question: "Do you want your personal savings protected if the business owes money?",
    options: [
      { value: "yes", label: "Yes, that matters to me" },
      { value: "no", label: "Not a big concern right now" },
    ],
  },
];

const results = {
  pvt: {
    name: "Private Limited company",
    why: "It's the only structure investors put money into, it lets you give staff shares, and it keeps your personal assets separate from the business.",
    href: "/services/business-registration/private-limited-company",
  },
  opc: {
    name: "One Person Company",
    why: "You can run a proper company on your own, with your personal assets protected and no co-founder needed. You can turn it into a Private Limited company later.",
    href: "/services/business-registration/one-person-company",
  },
  llp: {
    name: "LLP",
    why: "Your personal assets are protected, and there are fewer yearly filings than a company. It suits firms of partners that don't plan to raise equity.",
    href: "/services/business-registration/llp-registration",
  },
  sole: {
    name: "Sole proprietorship",
    why: "It's the simplest and cheapest way to start on your own. Just remember that you're personally responsible for any business debts.",
    href: "/services/business-registration/sole-proprietorship",
  },
  partnership: {
    name: "Partnership firm",
    why: "It's quick and inexpensive for two or more people. Partners are personally responsible for debts, so look at an LLP if that worries you.",
    href: "/services/business-registration/partnership-firm-registration",
  },
};

function recommend(a: Record<string, Answer>) {
  if (a.invest === "yes") return results.pvt;
  if (a.people === "one") return a.protect === "yes" ? results.opc : results.sole;
  return a.protect === "yes" ? results.llp : results.partnership;
}

/** Three questions that point a founder to a business structure. */
export default function CompanyTypeFinder() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const step = questions.findIndex((q) => !answers[q.id]);
  const done = step === -1;
  const result = done ? recommend(answers) : null;

  return (
    <div className={styles.finder}>
      <ol className={styles.progress} aria-label="Progress">
        {questions.map((q, i) => (
          <li key={q.id} data-state={answers[q.id] ? "done" : i === step ? "current" : "todo"}>
            <span className="visually-hidden">Question {i + 1}</span>
          </li>
        ))}
      </ol>

      {!done && (
        <fieldset className={styles.question} key={questions[step].id}>
          <legend>
            <span className={styles.qNum}>
              Question {step + 1} of {questions.length}
            </span>
            {questions[step].question}
          </legend>
          <div className={styles.choices}>
            {questions[step].options.map((o) => (
              <button
                key={o.value}
                type="button"
                className={styles.choice}
                onClick={() => setAnswers({ ...answers, [questions[step].id]: o.value })}
              >
                {o.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {result && (
        <div className={styles.answer} aria-live="polite">
          <p className={styles.qNum}>Our suggestion</p>
          <h2 className={styles.answerTitle}>{result.name}</h2>
          <p>{result.why}</p>
          <div className={styles.answerActions}>
            <Link href={result.href} className={styles.answerLink}>
              See how to register
              <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </Link>
            <button type="button" className={styles.restart} onClick={() => setAnswers({})}>
              <RotateCcw size={16} strokeWidth={2} aria-hidden />
              Start again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
