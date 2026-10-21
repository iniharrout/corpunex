"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  Search,
  ExternalLink,
  Layers,
  FileSearch,
} from "lucide-react";
import {
  restrictedMcaWords,
  startupTrademarkClasses,
  type RestrictedWordRule,
  type TrademarkClassInfo,
} from "@/content/nameSearch";
import styles from "./CompanyNameSearchTool.module.css";

type ActiveTab = "mca" | "trademark";

const CAPITAL_SCALE_WORDS = ["international", "global", "universal", "continental", "industries", "corporation"];

export default function CompanyNameSearchTool() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("mca");

  // MCA Name Validator State
  const [brandName, setBrandName] = useState("Zenith");
  const [activityWord, setActivityWord] = useState("Technologies");
  const [entityType, setEntityType] = useState("Private Limited");
  const [authorizedCapital, setAuthorizedCapital] = useState("1000000"); // ₹10 Lakhs

  // A name passed from elsewhere on the site (?q=, e.g. the homepage hero) fills the form.
  // Read once on mount, so the page can still be prerendered.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q")?.trim();
    if (!q) return;
    let rest = q.replace(/\s+/g, " ");
    let type: string | null = null;
    const suffixes: [RegExp, string][] = [
      [/\s+opc\s+(private|pvt\.?)\s+(limited|ltd\.?)$/i, "OPC Private Limited"],
      [/\s+(private|pvt\.?)\s+(limited|ltd\.?)$/i, "Private Limited"],
      [/\s+llp$/i, "LLP"],
      [/\s+opc$/i, "OPC Private Limited"],
    ];
    for (const [pattern, entity] of suffixes) {
      const m = rest.match(pattern);
      if (m) {
        type = entity;
        rest = rest.slice(0, m.index).trim();
        break;
      }
    }
    const words = rest.split(" ");
    const frame = requestAnimationFrame(() => {
      if (type) setEntityType(type);
      setBrandName(words.length > 1 ? words.slice(0, -1).join(" ") : rest);
      setActivityWord(words.length > 1 ? words[words.length - 1] : "");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Trademark Tab State
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [classSearchQuery, setClassSearchQuery] = useState("");

  // Validation Engine
  const trimmedBrand = brandName.trim();
  const trimmedActivity = activityWord.trim();
  const combinedName = `${trimmedBrand} ${trimmedActivity}`.trim();
  const fullLegalName = `${combinedName} ${entityType}`;

  const lowerCombined = combinedName.toLowerCase();

  // Check 1: Structure & Word count
  const hasValidLength = trimmedBrand.length >= 2;
  const hasActivity = trimmedActivity.length >= 2;

  // Check 2: Article check
  const startsWithArticle = /^(a|an|the)\b/i.test(trimmedBrand);

  // Check 3: Restricted regulator words
  const matchedRestrictedWord = restrictedMcaWords.find((r) => lowerCombined.includes(r.word.toLowerCase()));

  // Check 4: Capital threshold for scale words
  const capitalInt = parseInt(authorizedCapital, 10) || 100000;
  const matchedScaleWord = CAPITAL_SCALE_WORDS.find((w) => lowerCombined.includes(w));
  const hasSufficientScaleCapital = !matchedScaleWord || capitalInt >= 10000000; // >= 1 Crore

  // Check 5: Punctuation
  const hasNoSpecialChars = !/[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]/.test(combinedName);

  // Viability Scoring
  const hasErrors =
    !hasValidLength ||
    !hasActivity ||
    startsWithArticle ||
    !!matchedRestrictedWord ||
    !hasNoSpecialChars;

  const hasWarnings = !!matchedScaleWord && !hasSufficientScaleCapital;

  const viabilityStatus = hasErrors
    ? "rejected"
    : hasWarnings
    ? "warning"
    : "approved";

  // Filtered Trademark Classes
  const filteredClasses = useMemo(() => {
    return startupTrademarkClasses.filter((c) => {
      const matchesIndustry =
        selectedIndustry === "all" ||
        c.industry.toLowerCase().includes(selectedIndustry.toLowerCase());

      if (!matchesIndustry) return false;

      if (!classSearchQuery.trim()) return true;

      const q = classSearchQuery.toLowerCase();
      return (
        c.classNumber.toString().includes(q) ||
        c.industry.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.examples.some((ex) => ex.toLowerCase().includes(q))
      );
    });
  }, [selectedIndustry, classSearchQuery]);

  return (
    <div className={styles.toolWrapper}>
      {/* Top Tab Bar */}
      <div className={styles.tabNav} role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === "mca"}
          className={`${styles.tabBtn} ${activeTab === "mca" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("mca")}
        >
          <Layers size={17} aria-hidden />
          MCA Company Name Validator
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "trademark"}
          className={`${styles.tabBtn} ${activeTab === "trademark" ? styles.activeTabBtn : ""}`}
          onClick={() => setActiveTab("trademark")}
        >
          <FileSearch size={17} aria-hidden />
          Trademark Class Finder & IP Guide
        </button>
      </div>

      {/* Tab 1: MCA Company Name Validator */}
      {activeTab === "mca" && (
        <div className={styles.panel} role="tabpanel">
          <div className={styles.validatorGrid}>
            <div className={styles.formCol}>
              <div className={styles.inputCard}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="brand-name-input" className={styles.fieldLabel}>
                    <span>1. Distinctive Brand Prefix</span>
                    <span className={styles.fieldHint}>Unique coined word (e.g. Infosys, Zomato)</span>
                  </label>
                  <input
                    id="brand-name-input"
                    type="text"
                    className={styles.textInput}
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Zenith, Cloudflare, Paycraft"
                    maxLength={40}
                  />
                </div>

                <div className={styles.dualInputs}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="activity-input" className={styles.fieldLabel}>
                      <span>2. Business Activity Word</span>
                    </label>
                    <input
                      id="activity-input"
                      type="text"
                      className={styles.textInput}
                      value={activityWord}
                      onChange={(e) => setActivityWord(e.target.value)}
                      placeholder="e.g. Technologies, Foods, Logistics"
                      maxLength={30}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="entity-select" className={styles.fieldLabel}>
                      <span>3. Legal Entity Suffix</span>
                    </label>
                    <select
                      id="entity-select"
                      className={styles.selectInput}
                      value={entityType}
                      onChange={(e) => setEntityType(e.target.value)}
                    >
                      <option value="Private Limited">Private Limited (Pvt Ltd)</option>
                      <option value="LLP">Limited Liability Partnership (LLP)</option>
                      <option value="OPC Private Limited">One Person Company (OPC)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="capital-select" className={styles.fieldLabel}>
                    <span>4. Planned Authorized Share Capital</span>
                    <span className={styles.fieldHint}>Scales requiring &ge;₹1 Cr (e.g. International)</span>
                  </label>
                  <select
                    id="capital-select"
                    className={styles.selectInput}
                    value={authorizedCapital}
                    onChange={(e) => setAuthorizedCapital(e.target.value)}
                  >
                    <option value="100000">₹1,00,000 (Standard Startup Minimum)</option>
                    <option value="1000000">₹10,00,000 (Recommended for 2+ Directors)</option>
                    <option value="5000000">₹50,00,000 (Growth Stage)</option>
                    <option value="10000000">₹1,00,00,000 (₹1 Crore - Meets Scale Scale Words)</option>
                  </select>
                </div>
              </div>

              {/* Quick Naming Tip */}
              <div style={{
                fontSize: "var(--text-small)",
                lineHeight: 1.5,
                color: "var(--color-ink-muted)",
                background: "var(--color-paper-deep)",
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-line)",
              }}>
                <strong style={{ color: "var(--color-ink)" }}>Pro Tip from Corpunex CAs: </strong>
                MCA Rule 8 requires a company name to follow the structure:
                <em style={{ color: "var(--color-accent)", fontStyle: "normal", fontWeight: "bold" }}> [Distinctive Coined Word] + [Main Object/Activity] + [Entity Type]</em>.
                Names without an activity word (e.g. &ldquo;Zenith Private Limited&rdquo;) are routinely rejected by CRC.
              </div>
            </div>

            {/* Diagnostic Results Column */}
            <div className={styles.feedbackCol}>
              <div
                className={`${styles.previewBadgeCard} ${
                  viabilityStatus === "approved"
                    ? styles.statusApproved
                    : viabilityStatus === "warning"
                    ? styles.statusWarning
                    : styles.statusRejected
                }`}
              >
                <div className={styles.statusHead}>
                  <span className={styles.statusLabel}>
                    {viabilityStatus === "approved" && "High Likelihood of MCA Approval"}
                    {viabilityStatus === "warning" && "Notice / Capital Adjustment Needed"}
                    {viabilityStatus === "rejected" && "Statutory Rejection Risk"}
                  </span>
                  {viabilityStatus === "approved" ? (
                    <CheckCircle2 size={22} strokeWidth={2.5} />
                  ) : viabilityStatus === "warning" ? (
                    <AlertTriangle size={22} strokeWidth={2.5} />
                  ) : (
                    <XCircle size={22} strokeWidth={2.5} />
                  )}
                </div>

                <div className={styles.fullNamePreview}>{fullLegalName}</div>
              </div>

              {/* Checklist Card */}
              <div className={styles.checklistCard}>
                <h4 className={styles.checklistTitle}>Statutory Compliance Breakdown</h4>
                <ul className={styles.checkList}>
                  <li className={styles.checkItem}>
                    {hasValidLength && hasActivity ? (
                      <CheckCircle2 size={18} className={styles.iconPass} />
                    ) : (
                      <XCircle size={18} className={styles.iconFail} />
                    )}
                    <div>
                      <strong>2-Part Name Structure (Brand + Activity)</strong>
                      <div className={styles.detailExplainer}>
                        {hasValidLength && hasActivity
                          ? "Passes standard Rule 8 format check."
                          : "Please ensure both a unique coined name and an activity word (e.g. Technologies, Foods) are provided."}
                      </div>
                    </div>
                  </li>

                  <li className={styles.checkItem}>
                    {!startsWithArticle ? (
                      <CheckCircle2 size={18} className={styles.iconPass} />
                    ) : (
                      <XCircle size={18} className={styles.iconFail} />
                    )}
                    <div>
                      <strong>No Generic Article Prefix</strong>
                      <div className={styles.detailExplainer}>
                        {!startsWithArticle
                          ? "Does not start with 'A', 'An', or 'The'."
                          : "MCA rules prohibit starting company names with articles unless justified as part of a registered trademark."}
                      </div>
                    </div>
                  </li>

                  <li className={styles.checkItem}>
                    {!matchedRestrictedWord ? (
                      <CheckCircle2 size={18} className={styles.iconPass} />
                    ) : (
                      <XCircle size={18} className={styles.iconFail} />
                    )}
                    <div>
                      <strong>Sectoral Regulator Restriction Check</strong>
                      <div className={styles.detailExplainer}>
                        {!matchedRestrictedWord ? (
                          "Free from restricted regulatory keywords."
                        ) : (
                          <span style={{ color: "var(--color-error)" }}>
                            Restricted word &ldquo;{matchedRestrictedWord.word}&rdquo; requires approval from {matchedRestrictedWord.regulator}: {matchedRestrictedWord.requirement}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>

                  <li className={styles.checkItem}>
                    {hasSufficientScaleCapital ? (
                      <CheckCircle2 size={18} className={styles.iconPass} />
                    ) : (
                      <AlertTriangle size={18} className={styles.iconWarn} />
                    )}
                    <div>
                      <strong>Capital Adequacy for Scale Keywords</strong>
                      <div className={styles.detailExplainer}>
                        {hasSufficientScaleCapital ? (
                          "Authorized share capital complies with scale keywords."
                        ) : (
                          <span style={{ color: "var(--color-sun-strong)" }}>
                            Word &ldquo;{matchedScaleWord}&rdquo; requires at least ₹1 Crore (₹10,000,000) authorized capital to prevent misleading scale representation.
                          </span>
                        )}
                      </div>
                    </div>
                  </li>

                  <li className={styles.checkItem}>
                    {hasNoSpecialChars ? (
                      <CheckCircle2 size={18} className={styles.iconPass} />
                    ) : (
                      <XCircle size={18} className={styles.iconFail} />
                    )}
                    <div>
                      <strong>Clean Punctuation & Characters</strong>
                      <div className={styles.detailExplainer}>
                        {hasNoSpecialChars
                          ? "Alphanumeric only without illegal punctuation."
                          : "Avoid symbols like @, #, $, %, &, and periods within the title."}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Action Card */}
              <div className={styles.actionCard}>
                <Link
                  href="/services/business-registration/private-limited-company"
                  className={styles.reserveBtn}
                >
                  File Name Reservation with CAs
                  <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
                </Link>
                <span className={styles.actionNote}>
                  We prepare SPICe+ Part A with up to 2 name preferences and handle MCA resubmissions at zero extra fee.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Trademark Class Finder */}
      {activeTab === "trademark" && (
        <div className={styles.panel} role="tabpanel">
          <div className={styles.tmControls}>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--color-ink)", marginBottom: "4px" }}>
                  Nice Classification Directory for Startups
                </h3>
                <p style={{ fontSize: "var(--text-small)", color: "var(--color-ink-muted)", margin: 0 }}>
                  Trademarks in India are registered across 45 classes (Classes 1–34 for Goods, Classes 35–45 for Services).
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", border: "1.5px solid var(--color-line-strong)", borderRadius: "var(--radius-md)", padding: "6px 12px", background: "var(--color-surface)" }}>
                <Search size={16} color="var(--color-ink-muted)" />
                <input
                  type="search"
                  placeholder="Filter by keyword (e.g. SaaS, app)..."
                  value={classSearchQuery}
                  onChange={(e) => setClassSearchQuery(e.target.value)}
                  style={{ border: "none", outline: "none", fontSize: "var(--text-small)", background: "transparent" }}
                />
              </div>
            </div>

            <div className={styles.industryPills}>
              {["all", "Tech", "SaaS", "E-Commerce", "Fintech", "Apparel", "EdTech", "Health", "Logistics"].map((ind) => (
                <button
                  key={ind}
                  type="button"
                  className={`${styles.industryPill} ${selectedIndustry === ind ? styles.activeIndustryPill : ""}`}
                  onClick={() => setSelectedIndustry(ind)}
                >
                  {ind === "all" ? "All Startup Classes" : ind}
                </button>
              ))}
            </div>
          </div>

          <ul className={styles.classesGrid}>
            {filteredClasses.map((item) => (
              <li key={item.classNumber} className={styles.classCard}>
                <div className={styles.classTop}>
                  <span className={styles.classNumberBadge}>Class {item.classNumber}</span>
                  <span className={styles.typeBadge}>{item.type}</span>
                </div>

                <h4 className={styles.classIndustry}>{item.industry}</h4>
                <p className={styles.classDesc}>{item.shortDescription}</p>

                <div className={styles.examplesList}>
                  {item.examples.map((ex, idx) => (
                    <span key={idx} className={styles.exampleTag}>
                      {ex}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.officialSearchTip}>
            <div className={styles.tipTitle}>
              <ShieldAlert size={18} color="var(--color-accent)" />
              <span>Official IP India Public Search Portal</span>
            </div>
            <p className={styles.tipText}>
              Before finalizing your brand, conduct a wordmark search on the official Government of India Trademark Registry
              portal (<a href="https://ipindiaonline.gov.in/tmrpublicsearch/" target="_blank" rel="noopener noreferrer" className={styles.ipLink}>ipindiaonline.gov.in <ExternalLink size={12} style={{ display: "inline", verticalAlign: "middle" }} /></a>).
              Search with both &ldquo;Starts With&rdquo; and &ldquo;Match With&rdquo; filters to catch phonetic imitations under Section 11 of the Trade Marks Act.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
