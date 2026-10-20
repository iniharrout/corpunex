import { advisors } from "@/content/home";
import { Fact } from "@/components/ui/Placeholder";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { TextLink } from "@/components/ui/Button";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className="section" aria-labelledby="team-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="team-title" className={styles.title}>
            The people who sign your filings.
          </h2>
          <p className={styles.intro}>
            Membership numbers are listed so you can check them with ICAI, ICSI or the Bar Council yourself.
          </p>
        </div>
        <ul className={styles.grid}>
          {advisors.map((a, i) => (
            <li key={i} className={styles.person}>
              <PhotoFrame
                alt={`${a.name}, ${a.role} at Corpunex`}
                brief={a.photoBrief}
                ratio="4 / 5"
                sizes="(min-width: 900px) 22vw, 50vw"
              />
              <h3 className={styles.name}>
                <Fact value={a.name} />
              </h3>
              <p className={styles.role}>{a.role}</p>
              <p className={styles.credential}>
                <Fact value={a.credential} />
              </p>
              <p className={styles.bio}>
                <Fact value={a.bio} />
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.more}>
          <TextLink href="/about">More about the team and how we work</TextLink>
        </div>
      </div>
    </section>
  );
}
