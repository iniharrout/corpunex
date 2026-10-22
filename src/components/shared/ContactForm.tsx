"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { postLeadToGoogleChat } from "@/lib/leadNotifier";
import styles from "./ContactForm.module.css";

export const ENQUIRY_TOPICS = [
  "Register a company or LLP",
  "GST, accounting or tax returns",
  "Annual ROC compliance",
  "Startup India or fundraising",
  "Trademark or legal documents",
  "Foreign founder entering India",
  "Something else",
];

interface Fields {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!/^\+?[0-9\s-]{8,16}$/.test(f.phone.trim())) e.phone = "Enter a phone number with country code, e.g. +91 98765 43210.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter an email address, e.g. name@company.com.";
  if (!f.topic) e.topic = "Choose what you need help with.";
  return e;
}

export default function ContactForm({
  defaultTopic = "",
  formSource = "Contact Form",
}: {
  defaultTopic?: string;
  formSource?: string;
}) {
  const id = useId();
  const [fields, setFields] = useState<Fields>({ name: "", phone: "", email: "", topic: defaultTopic, message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const topicParam = new URLSearchParams(window.location.search).get("topic");
      if (topicParam && ENQUIRY_TOPICS.includes(topicParam)) {
        setFields((f) => ({ ...f, topic: topicParam }));
      }
    }
  }, []);

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    await postLeadToGoogleChat({
      formName: formSource,
      name: fields.name,
      phone: fields.phone,
      email: fields.email,
      topic: fields.topic,
      message: fields.message,
    });
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className={styles.sent} role="status">
        <p className={styles.sentTitle}>Thanks, {fields.name.split(" ")[0]}. We have your message.</p>
        <p>Someone from our team will get back to you by phone or email during working hours.</p>
      </div>
    );
  }

  const fieldProps = (key: keyof Fields) => ({
    id: `${id}-${key}`,
    name: key,
    value: fields[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined,
  });

  const error = (key: keyof Fields) =>
    errors[key] && (
      <span id={`${id}-${key}-error`} className={styles.error}>
        {errors[key]}
      </span>
    );

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor={`${id}-name`}>Name</label>
        <input {...fieldProps("name")} autoComplete="name" onChange={(e) => update("name", e.target.value)} />
        {error("name")}
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${id}-phone`}>Phone</label>
          <input
            {...fieldProps("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            onChange={(e) => update("phone", e.target.value)}
          />
          {error("phone")}
        </div>
        <div className={styles.field}>
          <label htmlFor={`${id}-email`}>Email</label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            onChange={(e) => update("email", e.target.value)}
          />
          {error("email")}
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-topic`}>What do you need help with?</label>
        <select {...fieldProps("topic")} onChange={(e) => update("topic", e.target.value)}>
          <option value="" disabled>
            Choose one
          </option>
          {ENQUIRY_TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {error("topic")}
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-message`}>
          Anything we should know? <span className={styles.optional}>Optional</span>
        </label>
        <textarea {...fieldProps("message")} rows={3} onChange={(e) => update("message", e.target.value)} />
      </div>
      <Button type="submit" size="large" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </Button>
      <p className={styles.privacy}>
        We use these details only to reply to you. See our <a href="/privacy-policy">privacy policy</a>.
      </p>
    </form>
  );
}
