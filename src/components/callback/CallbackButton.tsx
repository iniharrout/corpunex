"use client";

import type { ReactNode } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCallbackRequest } from "./CallbackProvider";

interface CallbackButtonProps {
  topic?: string;
  variant?: "primary" | "secondary" | "ink" | "onInk" | "ghost";
  size?: "default" | "large";
  block?: boolean;
  icon?: boolean;
  children?: ReactNode;
}

/** Opens the site-wide "Request a call back" dialog. */
export default function CallbackButton({
  topic,
  variant = "secondary",
  size,
  block,
  icon = true,
  children = "Request a call back",
}: CallbackButtonProps) {
  const { open } = useCallbackRequest();
  return (
    <Button type="button" variant={variant} size={size} block={block} onClick={() => open(topic)}>
      {icon && <PhoneCall size={16} strokeWidth={2} aria-hidden />}
      {children}
    </Button>
  );
}
