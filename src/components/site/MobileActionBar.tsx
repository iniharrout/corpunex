import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./MobileActionBar.module.css";

/** Sticky bottom bar on phones and small tablets: the primary CTA plus WhatsApp. */
export default function MobileActionBar({
  ctaLabel = "Talk to an advisor",
  ctaHref = "/contact",
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className={styles.bar} role="region" aria-label="Quick contact">
      <a href={site.whatsappHref} className={styles.whatsapp} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} strokeWidth={1.5} aria-hidden />
        WhatsApp
      </a>
      <ButtonLink href={ctaHref} block>
        {ctaLabel}
      </ButtonLink>
    </div>
  );
}
