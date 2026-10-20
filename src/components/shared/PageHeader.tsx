import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { JsonLd } from "@/components/ui/JsonLd";
import styles from "./PageHeader.module.css";

export interface Crumb {
  label: string;
  href: string;
}

/** BreadcrumbList schema for a trail of crumbs. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href}`,
    })),
  };
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={styles.breadcrumb}>
        {crumbs.map((c, i) => (
          <li key={c.href}>
            {i === crumbs.length - 1 ? <span aria-current="page">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Title block for inner pages: breadcrumb, h1 and lead, with optional
 * content (meta line, actions) underneath. Emits BreadcrumbList schema.
 */
export default function PageHeader({
  crumbs,
  title,
  lead,
  children,
  id = "page-title",
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <header className={styles.header}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="wrap">
        <Breadcrumbs crumbs={crumbs} />
        <h1 id={id} className={styles.title}>
          {title}
        </h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children && <div className={styles.extra}>{children}</div>}
      </div>
    </header>
  );
}
