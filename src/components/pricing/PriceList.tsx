import Link from "next/link";
import { ongoingServices } from "@/content/pricing";
import { Ph } from "@/components/ui/Placeholder";
import { inr } from "@/lib/fees";
import styles from "./pricing.module.css";

export default function PriceList() {
  return (
    <div className={styles.priceList}>
      {ongoingServices.map((group) => (
        <div key={group.group} className={styles.priceGroup}>
          <h3 className={styles.priceGroupTitle}>{group.group}</h3>
          <table className={styles.priceTable}>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">Service</th>
                <th scope="col">What it covers</th>
                <th scope="col">Professional fee</th>
              </tr>
            </thead>
            <tbody>
              {group.items.map((item) => (
                <tr key={item.service}>
                  <th scope="row">
                    <Link href={item.href}>{item.service}</Link>
                  </th>
                  <td className={styles.scope}>{item.scope}</td>
                  <td className={styles.cost}>
                    <span className="tabular">
                      from {item.price === null ? <Ph>price</Ph> : inr(item.price)}
                    </span>
                    <span className={styles.unit}>{item.unit}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
