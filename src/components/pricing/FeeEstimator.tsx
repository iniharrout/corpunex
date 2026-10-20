"use client";

import { useId, useState } from "react";
import {
  CAPITAL_OPTIONS,
  ENTITY_LABEL,
  STATES,
  estimateFees,
  inr,
  lakh,
  type EntityType,
  type FeeLine,
} from "@/lib/fees";
import { timeline } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./FeeEstimator.module.css";

interface FeeEstimatorProps {
  /** Fix the entity (e.g. on the Private Limited page) and hide the switch. */
  entity?: EntityType;
}

function Segmented<T extends string | number>({
  legend,
  options,
  value,
  onChange,
  format,
}: {
  legend: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
  format: (v: T) => string;
}) {
  const name = useId();
  return (
    <fieldset className={styles.field}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.segmented}>
        {options.map((opt) => (
          <label key={String(opt)} className={styles.segment}>
            <input
              type="radio"
              name={name}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="visually-hidden"
            />
            <span>{format(opt)}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Lines({ title, lines, total }: { title: string; lines: FeeLine[]; total: number }) {
  return (
    <div className={styles.group}>
      <div className={styles.groupHead}>
        <span>{title}</span>
        <span className="tabular">{inr(total)}</span>
      </div>
      <ul className={styles.lines}>
        {lines.map((l) => (
          <li key={l.label}>
            <span>
              {l.label}
              {l.note && <span className={styles.note}>{l.note}</span>}
            </span>
            <span className="tabular">{inr(l.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeeEstimator({ entity: lockedEntity }: FeeEstimatorProps) {
  const [entity, setEntity] = useState<EntityType>(lockedEntity ?? "pvt");
  const [state, setState] = useState("odisha");
  const [capital, setCapital] = useState(CAPITAL_OPTIONS[0]);
  const [directors, setDirectors] = useState(2);
  const stateId = useId();

  const minDirectors = entity === "opc" ? 1 : 2;
  const effectiveDirectors = Math.max(directors, minDirectors);
  const fees = estimateFees({ entity, state, capital, directors: effectiveDirectors });
  const signatoryLabel = entity === "llp" ? "Designated partners" : "Directors";

  return (
    <div className={styles.estimator}>
      <form className={styles.controls} onSubmit={(e) => e.preventDefault()} aria-label="Fee estimate inputs">
        {!lockedEntity && (
          <Segmented
            legend="Structure"
            options={["pvt", "llp", "opc"] as EntityType[]}
            value={entity}
            onChange={(v) => {
              setEntity(v);
              if (v === "opc") setDirectors(1);
              else if (directors < 2) setDirectors(2);
            }}
            format={(v) => ENTITY_LABEL[v]}
          />
        )}

        <div className={styles.field}>
          <label htmlFor={stateId} className={styles.legend}>
            State of registered office
          </label>
          <select id={stateId} className={styles.select} value={state} onChange={(e) => setState(e.target.value)}>
            {Object.entries(STATES).map(([key, s]) => (
              <option key={key} value={key}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <Segmented
          legend={entity === "llp" ? "Partner contribution" : "Authorised capital"}
          options={CAPITAL_OPTIONS}
          value={capital}
          onChange={setCapital}
          format={(v) => lakh(v)}
        />

        <Segmented
          legend={signatoryLabel}
          options={entity === "opc" ? [1, 2, 3] : [2, 3, 4]}
          value={effectiveDirectors}
          onChange={setDirectors}
          format={(v) => String(v)}
        />

        <p className={styles.hint}>
          Need more than {lakh(1500000)} capital, more signatories, or a state not listed? We quote those individually.
        </p>
      </form>

      <section className={styles.receipt} aria-live="polite" aria-label="Estimated cost">
        <div className={styles.receiptHead}>
          <span>Estimate</span>
          <span>
            {ENTITY_LABEL[entity]} · {STATES[state].name}
          </span>
        </div>

        <Lines title="Government fees, paid at cost" lines={fees.government} total={fees.governmentTotal} />
        <Lines title="Third-party costs" lines={fees.thirdParty} total={fees.thirdPartyTotal} />
        <Lines title="Corpunex fee" lines={fees.professional} total={fees.professionalTotal} />

        <div className={styles.total}>
          <span>Estimated total</span>
          <span className={`tabular ${styles.totalAmount}`}>{inr(fees.total)}</span>
        </div>
        <p className={styles.fine}>
          {timeline.sentence} Government fees are paid to the authority directly and you receive the official
          receipts. Rates are indicative and confirmed in your written quote.
        </p>
        <ButtonLink href="/contact" block arrow>
          Get this as a written quote
        </ButtonLink>
      </section>
    </div>
  );
}
