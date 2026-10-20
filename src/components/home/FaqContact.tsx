import { homeFaqs } from "@/content/home";
import { FaqList } from "@/components/shared/FaqList";
import ContactPanel from "@/components/shared/ContactPanel";
import styles from "./FaqContact.module.css";

export default function FaqContact() {
  return (
    <section id="contact" className="section" aria-labelledby="faq-title">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <h2 id="faq-title" className={styles.title}>
            Questions first&#8209;time founders ask
          </h2>
          <FaqList faqs={homeFaqs} />
        </div>
        <ContactPanel />
      </div>
    </section>
  );
}
