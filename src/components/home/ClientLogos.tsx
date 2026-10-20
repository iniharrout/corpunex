import Image from "next/image";
import { clientLogos } from "@/content/home";
import styles from "./ClientLogos.module.css";

/** Hidden until real, permissioned client or partner logos are added to content/home.ts. */
export default function ClientLogos() {
  if (clientLogos.length === 0) return null;
  return (
    <section className={styles.row} aria-label="Clients and partners">
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.caption}>Founders and companies we work with</p>
        <ul className={styles.logos}>
          {clientLogos.map((logo) => (
            <li key={logo.name}>
              <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
