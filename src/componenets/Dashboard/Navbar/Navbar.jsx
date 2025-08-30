// import React from 'react'
import "../../../Styles/Common.css";

export default function Navbar({ onClose, theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="left">
        <button
          className="icon-btn md-show"
          aria-label="Open menu"
          onClick={onClose}
        >
          ☰
        </button>
        <h1 className="title">AccountCare</h1>
      </div>

      <div className="search">
        <input placeholder="Search" aria-label="Global search" />
      </div>

      <div className="actions">
        {/* hint icons using text; swap with real icons as needed */}
        <button className="icon-btn" aria-label="Apps">
          ▦
        </button>
        <button className="icon-btn" aria-label="Notifications">
          🔔
        </button>
        <button className="icon-btn" aria-label="Messages">
          ✉️
        </button>
        <button className="icon-btn" aria-label="Phone">
          📞
        </button>
        <button className="icon-btn" aria-label="Settings">
          ⚙️
        </button>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="toggle-btn"
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <div className="avatar" aria-label="User menu">
          S
        </div>
      </div>
    </header>
  );
}
