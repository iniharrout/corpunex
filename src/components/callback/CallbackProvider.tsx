"use client";

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { ENQUIRY_TOPICS } from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/Button";
import { PhoneRing } from "@/components/illustrations/Spots";
import { postLeadToGoogleChat } from "@/lib/leadNotifier";
import styles from "./Callback.module.css";

interface CallbackContextValue {
  open: (topic?: string) => void;
}

const CallbackContext = createContext<CallbackContextValue | null>(null);

export function useCallbackRequest() {
  const ctx = useContext(CallbackContext);
  if (!ctx) throw new Error("useCallbackRequest must be used inside CallbackProvider");
  return ctx;
}

interface Fields {
  name: string;
  mobile: string;
  topic: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", mobile: "", topic: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  const digits = f.mobile.replace(/[\s-]/g, "");
  if (!/^(\+?\d{1,3})?\d{10}$/.test(digits)) e.mobile = "Enter a 10-digit mobile number.";
  if (!f.topic) e.topic = "Choose what the call is about.";
  return e;
}

/**
 * Owns the single "Request a call back" dialog for the whole site.
 * Any CallbackButton opens it; the topic can be pre-filled.
 */
export default function CallbackProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const id = useId();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const open = useCallback((topic?: string) => {
    setStatus("idle");
    setErrors({});
    setFields({ ...empty, topic: topic && ENQUIRY_TOPICS.includes(topic) ? topic : "" });
    dialogRef.current?.showModal();
  }, []);

  const close = () => dialogRef.current?.close();

  // Close when the backdrop is clicked. The press must also start on the
  // backdrop, so dragging out of a text field never closes the form.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    let pressedBackdrop = false;
    function onPointerDown(e: PointerEvent) {
      pressedBackdrop = e.target === dialog;
    }
    function onClick(e: MouseEvent) {
      if (pressedBackdrop && e.target === dialog) dialog?.close();
      pressedBackdrop = false;
    }
    dialog.addEventListener("pointerdown", onPointerDown);
    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("pointerdown", onPointerDown);
      dialog.removeEventListener("click", onClick);
    };
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
      document.getElementById(`${id}-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    await postLeadToGoogleChat({
      formName: "Request a Call Back Modal",
      name: fields.name,
      phone: fields.mobile,
      topic: fields.topic,
      extra: {
        "User Request": "Phone Call Back",
      },
    });
    setStatus("sent");
  }

  const describedBy = (key: keyof Fields) => (errors[key] ? `${id}-${key}-error` : undefined);

  return (
    <CallbackContext.Provider value={{ open }}>
      {children}
      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={`${id}-title`}>
        <div className={styles.inner}>
          <button type="button" className={styles.close} onClick={close}>
            <X size={20} strokeWidth={2} aria-hidden />
            <span className="visually-hidden">Close</span>
          </button>

          {status === "sent" ? (
            <div className={styles.sent} role="status">
              <h2 id={`${id}-title`} className={styles.title}>
                Thanks, {fields.name.split(" ")[0]}!
              </h2>
              <p className={styles.intro}>
                We&apos;ve got your request. Someone from our team will call you on {fields.mobile} during working
                hours.
              </p>
              <Button type="button" variant="secondary" onClick={close}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className={styles.form}>
              <PhoneRing className={styles.phone} />
              <h2 id={`${id}-title`} className={styles.title}>
                Request a call back
              </h2>
              <p className={styles.intro}>Leave your number and we&apos;ll call you. No obligation.</p>

              <div className={styles.field}>
                <label htmlFor={`${id}-name`}>Your name</label>
                <input
                  id={`${id}-name`}
                  autoComplete="name"
                  value={fields.name}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={describedBy("name")}
                  onChange={(e) => update("name", e.target.value)}
                />
                {errors.name && (
                  <span id={`${id}-name-error`} className={styles.error}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor={`${id}-mobile`}>Mobile number</label>
                <input
                  id={`${id}-mobile`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="98765 43210"
                  value={fields.mobile}
                  aria-invalid={errors.mobile ? true : undefined}
                  aria-describedby={describedBy("mobile")}
                  onChange={(e) => update("mobile", e.target.value)}
                />
                {errors.mobile && (
                  <span id={`${id}-mobile-error`} className={styles.error}>
                    {errors.mobile}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor={`${id}-topic`}>What is the call about?</label>
                <select
                  id={`${id}-topic`}
                  value={fields.topic}
                  aria-invalid={errors.topic ? true : undefined}
                  aria-describedby={describedBy("topic")}
                  onChange={(e) => update("topic", e.target.value)}
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {ENQUIRY_TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                {errors.topic && (
                  <span id={`${id}-topic-error`} className={styles.error}>
                    {errors.topic}
                  </span>
                )}
              </div>

              <Button type="submit" size="large" block disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Call me back"}
              </Button>
              <p className={styles.fine}>We only use your number to call you about this request.</p>
            </form>
          )}
        </div>
      </dialog>
    </CallbackContext.Provider>
  );
}
