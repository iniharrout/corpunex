"use client";

import { useId, useState } from "react";
import styles from "./Tools.module.css";

const PRESETS = [5, 18, 40];

const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** Adds GST to, or removes GST from, an amount, with the CGST/SGST or IGST split. */
export default function GstCalculator() {
  const id = useId();
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState(18);
  const [custom, setCustom] = useState("");
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [supply, setSupply] = useState<"intra" | "inter">("intra");

  const value = Number(amount.replace(/,/g, ""));
  const r = custom !== "" ? Number(custom) : rate;
  const valid = Number.isFinite(value) && value >= 0 && Number.isFinite(r) && r >= 0 && r <= 100;

  const base = valid ? (mode === "add" ? value : value / (1 + r / 100)) : 0;
  const gst = valid ? base * (r / 100) : 0;
  const total = base + gst;

  return (
    <div className={styles.tool}>
      <div className={styles.inputs}>
        <div className={styles.field}>
          <label htmlFor={`${id}-amount`}>Amount (₹)</label>
          <input
            id={`${id}-amount`}
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-invalid={!valid || undefined}
          />
        </div>

        <fieldset className={styles.field}>
          <legend>This amount is</legend>
          <div className={styles.segmented}>
            <label>
              <input type="radio" name={`${id}-mode`} checked={mode === "add"} onChange={() => setMode("add")} />
              <span>Before GST</span>
            </label>
            <label>
              <input type="radio" name={`${id}-mode`} checked={mode === "remove"} onChange={() => setMode("remove")} />
              <span>Including GST</span>
            </label>
          </div>
        </fieldset>

        <fieldset className={styles.field}>
          <legend>GST rate</legend>
          <div className={styles.segmented}>
            {PRESETS.map((p) => (
              <label key={p}>
                <input
                  type="radio"
                  name={`${id}-rate`}
                  checked={custom === "" && rate === p}
                  onChange={() => {
                    setRate(p);
                    setCustom("");
                  }}
                />
                <span>{p}%</span>
              </label>
            ))}
          </div>
          <label htmlFor={`${id}-custom`} className={styles.subLabel}>
            Or enter another rate (%)
          </label>
          <input
            id={`${id}-custom`}
            inputMode="decimal"
            placeholder="e.g. 3"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
          />
        </fieldset>

        <fieldset className={styles.field}>
          <legend>Where is the customer?</legend>
          <div className={styles.segmented}>
            <label>
              <input type="radio" name={`${id}-supply`} checked={supply === "intra"} onChange={() => setSupply("intra")} />
              <span>Same state</span>
            </label>
            <label>
              <input type="radio" name={`${id}-supply`} checked={supply === "inter"} onChange={() => setSupply("inter")} />
              <span>Another state</span>
            </label>
          </div>
        </fieldset>
      </div>

      <div className={styles.result} aria-live="polite">
        {valid ? (
          <dl>
            <div>
              <dt>Amount before GST</dt>
              <dd>{inr(base)}</dd>
            </div>
            {supply === "intra" ? (
              <>
                <div>
                  <dt>CGST ({r / 2}%)</dt>
                  <dd>{inr(gst / 2)}</dd>
                </div>
                <div>
                  <dt>SGST ({r / 2}%)</dt>
                  <dd>{inr(gst / 2)}</dd>
                </div>
              </>
            ) : (
              <div>
                <dt>IGST ({r}%)</dt>
                <dd>{inr(gst)}</dd>
              </div>
            )}
            <div className={styles.total}>
              <dt>Total including GST</dt>
              <dd>{inr(total)}</dd>
            </div>
          </dl>
        ) : (
          <p className={styles.error}>Enter an amount and a rate between 0 and 100.</p>
        )}
      </div>
    </div>
  );
}
