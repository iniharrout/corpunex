import { ButtonLink } from "@/components/ui/Button";
import CallbackButton from "@/components/callback/CallbackButton";
import styles from "./MobileActionBar.module.css";

/** Sticky bottom bar on phones and small tablets. */
export default function MobileActionBar() {
  return (
    <div className={styles.bar} role="region" aria-label="Quick actions">
      <CallbackButton block>Call me back</CallbackButton>
      <ButtonLink href="/contact" block>
        Get started
      </ButtonLink>
    </div>
  );
}
