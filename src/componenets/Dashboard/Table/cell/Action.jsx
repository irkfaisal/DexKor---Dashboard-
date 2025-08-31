import { useState, useRef, useEffect } from "react";
import '../../../../Styles/Common.css';

export default function Action() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className="actions-menu" ref={ref}>
      <button
        className="icon-btn"
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        ⋮
      </button>
      {open && (
        <div className="menu">
          <button className="menu-item">View</button>
          <button className="menu-item">Edit</button>
          <button className="menu-item danger">Delete</button>
        </div>
      )}
    </div>
  );
}
