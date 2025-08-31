import { useEffect, useRef, useState } from "react";
import "./TableModal.css";

export default function TaskModal({ openModal, onClose, modalData }) {
  const [activeTab, setActiveTab] = useState("description");
  const dialogRef = useRef(null);
  const scrollAreaRef = useRef(null);

  // ESC key press to close the modal
  useEffect(() => {
    if (!openModal) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openModal, onClose]);

  if (!openModal) return null;

  return (
    <div className="tdm-portal" aria-hidden={false}>
      <div className="tdm-overlay" onClick={onClose} />
      <section
        className={"tdm-dialog"}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tdm-title"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={dialogRef}
      >
        {/* Header */}
        <header className="tdm-header">
          <div className="tdm-header-left">
            <h2 id="tdm-title" className="tdm-title">
              {modalData?.customer || "AVF"} - {modalData?.code || "TS-6465"}
            </h2>
          </div>
          <div className="tdm-header-right">
            <button
              className="tdm-icon-btn"
              aria-label="Close"
              onClick={onClose}
              title="Close"
            >
              {/* close icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="tdm-content" ref={scrollAreaRef}>
          {/* Key fields */}
          <div className="tdm-row">
            <label className="tdm-label">Task name</label>
            <div className="tdm-value tdm-strong">
              {modalData?.title || "Test"}
            </div>
          </div>

          <div className="tdm-row tdm-row--wrap">
            <div className="tdm-kv">
              <span className="tdm-muted">Due date</span>
              <span className="tdm-dash">-</span>
            </div>
            <div className="tdm-kv">
              <span className="tdm-muted">Created date</span>
              <span className="tdm-value">
                {modalData?.created || "23 Jul 2025"}
              </span>
            </div>
            <div className="tdm-kv">
              <span className="tdm-muted">Status</span>
              <span className="tdm-badge tdm-badge--danger">
                <span className="tdm-dot" /> {modalData?.status || "cancelled"}
              </span>
            </div>
          </div>

          <div className="tdm-row tdm-row--wrap">
            <div className="tdm-kv">
              <span className="tdm-muted">Priority</span>
              <span className="tdm-badge tdm-badge--warn">
                {modalData?.priority || "Medium"}
              </span>
            </div>
            <div className="tdm-kv">
              <span className="tdm-muted">Owner</span>
              <div className="tdm-owner">
                <div className="tdm-owner-avatar">T</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <nav className="tdm-tabs" aria-label="Task sections">
            {["description", "notes", "events", "tickets"].map((key) => (
              <button
                key={key}
                className={`tdm-tab ${activeTab === key ? "is-active" : ""}`}
                onClick={() => setActiveTab(key)}
                aria-current={activeTab === key ? "page" : undefined}
              >
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            ))}
          </nav>

          <div className="tdm-tabpanel">
            {activeTab === "description" && (
              <p className="tdm-paragraph">
                {modalData?.description ||
                  "This is a test task by tariqrasheed"}
              </p>
            )}
            {activeTab === "notes" && (
              <div className="tdm-empty">No notes yet.</div>
            )}
            {activeTab === "events" && (
              <div className="tdm-empty">No recent events.</div>
            )}
            {activeTab === "tickets" && (
              <div className="tdm-empty">No linked tickets.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
