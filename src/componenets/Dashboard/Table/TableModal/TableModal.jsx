import { useRef, useState } from "react";
import "./TableModal.css";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../../../Aceternity/AnimatedModal";

export default function TableModal({ modalData }) {
  const [activeTab, setActiveTab] = useState("description");
  const scrollAreaRef = useRef(null);

  return (
    <ModalBody>
      <ModalContent>
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
      </ModalContent>
      <ModalFooter className="gap-4">
        <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
          Cancel
        </button>
        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
          Save
        </button>
      </ModalFooter>
    </ModalBody>
  );
}
