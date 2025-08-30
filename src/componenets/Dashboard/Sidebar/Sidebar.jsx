import { useState } from "react";
import "../../../Styles/Common.css";
import { sidebar } from "../../../Data/Data";

export default function Sidebar({ open, onClose }) {
  const [viewsOpen, setViewsOpen] = useState(true); // views btn open state
  const [activeItem, setActiveItem] = useState("My Task"); // active item state
  return (
    <aside
      className={`sidebar ${open ? "open" : "closed"}`}
      aria-label="Primary"
    >
      <div className="sidebar-header">
        <button
          className="icon-btn md-hide"
          aria-label="Close menu"
          onClick={onClose}
        >
          ×
        </button>
        <div className="brand">
          <div className="logo">DEX</div>
          <span>DexKor</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sidebar.map((item) => (
          <a
            key={item.id}
            onClick={() => setActiveItem(item.label)}
            className={`nav-link ${item.label === activeItem ? "active" : ""}`}
            href="#"
          >
            <span />
            {item.icon} {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-views">
        <button
          className="views-toggle"
          onClick={() => setViewsOpen(!viewsOpen)}
        >
          Views{" "}
          <span className="chev">
            <b>{viewsOpen ? "▾" : "▸"}</b>
          </span>
        </button>
        {viewsOpen && (
          <ul className="views-list">
            {["Test", "Today’s Work", "Digi", "Help"].map((v) => (
              <li key={v}>
                <a href="#" className="view-link">
                  {v}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
