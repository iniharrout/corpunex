import styles from "./JumpNav.module.css";

/** Row of in-page anchor links, for long index pages. */
export default function JumpNav({ label, items }: { label: string; items: { id: string; label: string }[] }) {
  return (
    <nav aria-label={label}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
