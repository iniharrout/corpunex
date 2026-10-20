"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./ServicePicker.module.css";

const options = [
  { label: "Register a Private Limited company", href: "/services/business-registration/private-limited-company" },
  { label: "Register an LLP", href: "/services/business-registration/llp-registration" },
  { label: "Register a One Person Company", href: "/services/business-registration/one-person-company" },
  { label: "Get a GST registration", href: "/services/gst-taxation/gst-registration" },
  { label: "File my GST returns", href: "/services/gst-taxation/gst-return-filing" },
  { label: "File my company's yearly returns", href: "/services/corporate-compliance/annual-roc-compliance" },
  { label: "Get Startup India recognition", href: "/services/startup-services/startup-india-recognition" },
  { label: "Register a trademark", href: "/services/trademark-ip/trademark-registration" },
  { label: "Set up an Indian subsidiary", href: "/services/business-registration/indian-subsidiary" },
  { label: "Register a partnership firm", href: "/services/business-registration/partnership-firm-registration" },
  { label: "Register an NGO (Section 8)", href: "/services/ngo-entity-registration/section-8-company" },
  { label: "Close a company", href: "/services/corporate-compliance/close-a-company" },
  { label: "Something else", href: "/contact" },
];

/** "I want to …" selector that takes the visitor straight to the right service page. */
export default function ServicePicker() {
  const router = useRouter();
  const id = useId();
  const [href, setHref] = useState(options[0].href);

  return (
    <form
      className={styles.picker}
      onSubmit={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      <label htmlFor={id} className={styles.label}>
        I want to
      </label>
      <select id={id} className={styles.select} value={href} onChange={(e) => setHref(e.target.value)}>
        {options.map((o) => (
          <option key={o.href + o.label} value={o.href}>
            {o.label}
          </option>
        ))}
      </select>
      <button type="submit" className={styles.go}>
        Get started
        <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
      </button>
    </form>
  );
}
