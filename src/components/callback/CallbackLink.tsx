"use client";

import { PhoneCall } from "lucide-react";
import { useCallbackRequest } from "./CallbackProvider";

/** Text-style trigger for the call-back dialog, for compact places like the top bar. */
export default function CallbackLink({ className, topic }: { className?: string; topic?: string }) {
  const { open } = useCallbackRequest();
  return (
    <button
      type="button"
      className={className}
      onClick={() => open(topic)}
    >
      <PhoneCall size={14} strokeWidth={2} aria-hidden />
      Request a call back
    </button>
  );
}
