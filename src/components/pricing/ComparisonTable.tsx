import { comparisonRows, incorporationTiers } from "@/content/entities";
import styles from "./pricing.module.css";

export default function ComparisonTable({ caption }: { caption: string }) {
  return (
    <div className={styles.tableScroll} role="region" aria-label={caption} tabIndex={0}>
      <table className={styles.table}>
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            <td />
            {incorporationTiers.map((t) => (
              <th key={t.entity} scope="col">
                {t.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {incorporationTiers.map((t) => (
                <td key={t.entity}>
                  {row.values[t.entity]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
