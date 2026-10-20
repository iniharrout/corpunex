import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { Art, type ArtName } from "@/components/illustrations/artFor";
import { Sparkle, Squiggle, Star } from "@/components/illustrations/Doodles";
import styles from "./PageHeader.module.css";

export interface Crumb {
  label: string;
  href: string;
}

export type Tone = "sky" | "mint" | "sun" | "peach";

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

/** Wraps `phrase` inside `title` in the yellow highlighter. */
function withHighlight(title: string, phrase?: string): ReactNode {
  if (!phrase) return title;
  const at = title.indexOf(phrase);
  if (at < 0) return title;
  return (
    <>
      {title.slice(0, at)}
      <span className="highlight">{phrase}</span>
      {title.slice(at + phrase.length)}
    </>
  );
}

/**
 * Title block for inner pages: a pastel panel with breadcrumb, h1 and
 * lead, plus optional extras (actions, jump links). Emits BreadcrumbList
 * schema.
 */
export default function PageHeader({
  crumbs,
  title,
  highlight,
  lead,
  tone = "sky",
  children,
  art,
  id = "page-title",
}: {
  crumbs: Crumb[];
  title: string;
  /** A phrase inside `title` to mark with the highlighter. */
  highlight?: string;
  lead?: ReactNode;
  tone?: Tone;
  children?: ReactNode;
  /** Spot illustration shown beside the title on wider screens. */
  art?: ArtName;
  id?: string;
}) {
  return (
    <header className={styles.header}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="wrap">
        <div className={`${styles.panel} ${styles[tone]}`} data-has-art={art ? true : undefined}>
          <div className={styles.text}>
            <Breadcrumbs crumbs={crumbs} />
            <h1 id={id} className={styles.title}>
              {withHighlight(title, highlight)}
            </h1>
            {lead && <p className={styles.lead}>{lead}</p>}
            {children && <div className={styles.extra}>{children}</div>}
          </div>
          {art && <Art name={art} className={styles.art} />}
          <Sparkle className={styles.sparkle} size={34} />
          <Star className={styles.star} size={26} />
          <Squiggle className={styles.squiggle} size={110} />
        </div>
      </div>
    </header>
  );
}
