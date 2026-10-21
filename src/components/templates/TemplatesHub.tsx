"use client";

import { useState, useMemo, useRef } from "react";
import {
  Search,
  Copy,
  Check,
  Download,
  Printer,
  FileText,
  X,
  CheckCircle2,
  AlertTriangle,
  Scroll,
} from "lucide-react";
import {
  allTemplates,
  templateCategories,
  type FullStartupTemplate,
  type TemplateCategory,
} from "@/content/templates";
import styles from "./TemplatesHub.module.css";

export default function TemplatesHub() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<FullStartupTemplate | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const openDraft = (template: FullStartupTemplate) => {
    setActiveTemplate(template);
    dialogRef.current?.showModal();
  };

  const closeDraft = () => {
    dialogRef.current?.close();
    setActiveTemplate(null);
  };

  // Filter templates based on category and search query
  const filteredTemplates = useMemo(() => {
    return allTemplates.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.entityTypes.toLowerCase().includes(q) ||
        item.keyClauses.some((c) => c.title.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const handleDownload = (template: FullStartupTemplate) => {
    const blob = new Blob([template.draftContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = template.downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = (template: FullStartupTemplate) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>${template.title} - Corpunex Template</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #111; line-height: 1.6; }
            h1 { font-size: 20px; border-bottom: 2px solid #0057ff; padding-bottom: 8px; margin-bottom: 20px; }
            pre { font-family: monospace; font-size: 13px; white-space: pre-wrap; word-break: break-word; }
            .meta { font-size: 12px; color: #666; margin-bottom: 24px; }
          </style>
        </head>
        <body>
          <h1>${template.title}</h1>
          <div class="meta">For: ${template.entityTypes} | Execution: ${template.stampDutyNote}</div>
          <pre>${template.draftContent}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className={styles.container}>
      {/* Top Search & Filter Bar */}
      <div className={styles.controlsBar}>
        <div className={styles.searchWrapper}>
          <Search size={18} color="var(--color-ink-muted)" aria-hidden />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search templates (e.g. vesting, NDA, bank resolution)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.categoryPills} role="tablist" aria-label="Template categories">
          {templateCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`${styles.pill} ${selectedCategory === cat.id ? styles.activePill : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultCount}>
        Showing {filteredTemplates.length} {filteredTemplates.length === 1 ? "template" : "templates"}
      </div>

      {/* Grid of Templates */}
      {filteredTemplates.length > 0 ? (
        <ul className={styles.grid}>
          {filteredTemplates.map((template) => (
            <li key={template.slug} className={styles.card} data-reveal>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.tag}>{template.categoryLabel}</span>
                  <span className={styles.entityBadge}>{template.entityTypes}</span>
                </div>

                <h3 className={styles.title}>{template.title}</h3>
                <p className={styles.summary}>{template.summary}</p>

                <div className={styles.stampNote}>
                  <Scroll size={14} flex-shrink="0" aria-hidden />
                  <span>{template.stampDutyNote}</span>
                </div>

                <ul className={styles.clausesBox}>
                  {template.keyClauses.map((clause, idx) => (
                    <li key={idx} className={styles.clauseRow}>
                      <CheckCircle2 size={13} className={styles.clauseIcon} aria-hidden />
                      <span>
                        <strong>{clause.title}:</strong> {clause.explanation}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.openDraftBtn}
                  onClick={() => openDraft(template)}
                >
                  <FileText size={15} aria-hidden />
                  View & Copy Draft
                </button>

                <div style={{ display: "flex", gap: "6px" }}>
                  {copiedId === template.slug ? (
                    <span className={styles.copiedTag}>
                      <Check size={14} strokeWidth={2.5} /> Copied!
                    </span>
                  ) : (
                    <button
                      type="button"
                      className={styles.quickCopyBtn}
                      onClick={() => handleCopy(template.draftContent, template.slug)}
                      title="Quick Copy to clipboard"
                    >
                      <Copy size={13} aria-hidden /> Copy
                    </button>
                  )}

                  <button
                    type="button"
                    className={styles.quickCopyBtn}
                    onClick={() => handleDownload(template)}
                    title="Download as TXT file"
                  >
                    <Download size={13} aria-hidden /> TXT
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState}>
          <p>No startup templates found matching &ldquo;{searchQuery}&rdquo;.</p>
          <button
            type="button"
            className={styles.pill}
            style={{ marginTop: "12px" }}
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
          >
            Clear Search & Show All
          </button>
        </div>
      )}

      {/* Modal Dialog for Full Template Inspection */}
      <dialog
        ref={dialogRef}
        className={styles.modalDialog}
        aria-labelledby="template-modal-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) closeDraft();
        }}
      >
        {activeTemplate && (
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleGroup}>
                <span className={styles.tag}>{activeTemplate.categoryLabel} • {activeTemplate.entityTypes}</span>
                <h3 id="template-modal-title" className={styles.modalTitle}>
                  {activeTemplate.title}
                </h3>
              </div>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeDraft}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.executionAlert}>
                <AlertTriangle size={18} flex-shrink="0" aria-hidden />
                <div>
                  <strong>Execution Guidance: </strong>
                  {activeTemplate.stampDutyNote} Replace all placeholder values inside square brackets [like this] before printing or signing.
                </div>
              </div>

              <pre className={styles.draftCodeBlock}>{activeTemplate.draftContent}</pre>
            </div>

            <div className={styles.modalFooter}>
              <div style={{ fontSize: "var(--text-micro)", color: "var(--color-ink-muted)" }}>
                Prepared by Corpunex Chartered Accountants & Advocates.
              </div>

              <div className={styles.footerActions}>
                <button
                  type="button"
                  className={`${styles.actionBtn} ${styles.actionSecondary}`}
                  onClick={() => handlePrint(activeTemplate)}
                >
                  <Printer size={15} /> Print / Save PDF
                </button>
                <button
                  type="button"
                  className={`${styles.actionBtn} ${styles.actionSecondary}`}
                  onClick={() => handleDownload(activeTemplate)}
                >
                  <Download size={15} /> Download TXT
                </button>
                <button
                  type="button"
                  className={`${styles.actionBtn} ${styles.actionPrimary}`}
                  onClick={() => handleCopy(activeTemplate.draftContent, activeTemplate.slug)}
                >
                  {copiedId === activeTemplate.slug ? (
                    <>
                      <Check size={16} strokeWidth={2.5} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> Copy Clean Text
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
