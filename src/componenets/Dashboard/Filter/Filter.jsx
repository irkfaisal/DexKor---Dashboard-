import React from "react";
import "../../../Styles/Common.css";

const Filter = () => {
  return (
    <div>
      {/* Row 1: Filter Chips */}
      <div className="button-group">
        <button className="chip active">
          All Tasks <span className="chip-count">87</span>
        </button>
        <button className="chip">
          Completed Tasks <span className="chip-count">23</span>
        </button>
        <button className="chip">
          Pending Tasks <span className="chip-count">56</span>
        </button>
        <button className="chip">
          Overdue Tasks <span className="chip-count">8</span>
        </button>
      </div>

      {/* Row 2: Outlined Buttons for filtering */}
      <div className="button-group filter-btns">
        <div className="button-group">
          <button className="btn-base btn-outlined">Owner : Me</button>
          <button className="btn-base btn-outlined">Status</button>
          <button className="btn-base btn-outlined">Priority</button>
          <button className="btn-base btn-outlined">Customer</button>
          <button className="btn-base btn-outlined">Reset</button>
        </div>
        <div className="button-group">
          <button className="btn-base btn-icon btn-filled">+</button>
          <button className="btn-base btn-outlined">Compact</button>
          <button className="btn-base btn-outlined">☰</button>
          <button className="btn-base btn-outlined">▦</button>
          <button className="btn-base btn-filled">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
