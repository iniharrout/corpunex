"use client";

import { PhoneCall } from "lucide-react";
import { useCallbackRequest } from "./CallbackProvider";
import styles from "./FloatingCallbackButton.module.css";

interface FloatingCallbackButtonProps {
  topic?: string;
}

/**
 * Floating "Request a Call" button.
 * Placed on the page to allow visitors to quickly trigger the callback dialog
 * without exposing personal direct numbers.
 */
export default function FloatingCallbackButton({
  topic = "General enquiry",
}: FloatingCallbackButtonProps) {
  const { open } = useCallbackRequest();

  return (
    <button
      type="button"
      className={styles.floatingBtn}
      onClick={() => open(topic)}
      aria-label="Request a phone call back from Corpunex advisors"
      title="Request a call back"
    >
      <span className={styles.iconWrapper} aria-hidden>
        <span className={styles.pulseRing} />
        <PhoneCall size={16} strokeWidth={2.25} />
        <span className={styles.statusDot} />
      </span>
      <span className={styles.label}>
        <span className={styles.mainText}>Request a Call</span>
        <span className={styles.subText}>CAs & CSs online</span>
      </span>
    </button>
  );
}
