import Image from "next/image";
import styles from "./ui.module.css";

interface PhotoFrameProps {
  /** Path in /public once a real photo exists. */
  src?: string;
  /** Describes what the photo shows. Doubles as the brief for the placeholder. */
  alt: string;
  /** Short instruction for the photographer or team, shown in the empty frame. */
  brief?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Image slot for real Corpunex photography only. Without `src` it renders a
 * marked [REAL PHOTO] frame at the final aspect ratio, so layouts do not
 * shift when photos arrive.
 */
export function PhotoFrame({
  src,
  alt,
  brief,
  ratio = "4 / 5",
  priority,
  sizes = "(min-width: 900px) 40vw, 100vw",
  className,
}: PhotoFrameProps) {
  if (src) {
    return (
      <div className={[styles.frame, className].filter(Boolean).join(" ")} style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    );
  }
  return (
    <div
      className={[styles.frame, styles.frameEmpty, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Photo to come: ${alt}`}
      data-placeholder
    >
      <span className={styles.frameLabel}>
        <strong>Real photo</strong>
        {brief}
      </span>
    </div>
  );
}
