import { caseStudies, type CaseStudy } from "@/content/home";
import { Fact } from "@/components/ui/Placeholder";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import styles from "./CaseStudies.module.css";

function Story({ story, featured }: { story: CaseStudy; featured?: boolean }) {
  return (
    <article className={featured ? styles.featured : styles.story}>
      <PhotoFrame
        className={styles.photo}
        alt={`${story.founder} of ${story.company}`}
        brief={story.photoBrief}
        ratio={featured ? "4 / 3" : "3 / 2"}
        sizes={featured ? "(min-width: 900px) 45vw, 100vw" : "(min-width: 900px) 30vw, 100vw"}
      />
      <div className={styles.body}>
        <p className={styles.meta}>
          <Fact value={story.sector} />
        </p>
        <h3 className={styles.company}>
          <Fact value={story.company} />
        </h3>
        <p className={styles.founder}>
          <Fact value={story.founder} />
        </p>
        <dl className={styles.facts}>
          <div>
            <dt>The problem</dt>
            <dd>
              <Fact value={story.problem} />
            </dd>
          </div>
          <div>
            <dt>What we did</dt>
            <dd>
              <Fact value={story.work} />
            </dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd className={styles.result}>
              <Fact value={story.result} />
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  const [first, ...rest] = caseStudies;
  return (
    <section className="section band-deep" aria-labelledby="cases-title">
      <div className="wrap">
        <h2 id="cases-title" className={styles.title}>
          Three founders, three different starting points.
        </h2>
        <Story story={first} featured />
        <div className={styles.pair}>
          {rest.map((s, i) => (
            <Story key={i} story={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
