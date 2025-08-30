import { useEffect, useState } from "react";
import Dashboard from "../componenets/Dashboard/Dashboard";
import Navbar from "../componenets/Dashboard/Navbar/Navbar";
import Sidebar from "../componenets/Dashboard/Sidebar/Sidebar";
import "../Styles/Common.css";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // sidebar open state
  const [theme, setTheme] = useState("light"); // theme state

  // toogle theme start
  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const t = saved || "light";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
  };
  // toogle theme end

  return (
    <div className="dash-shell">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="dash-main">
        <Navbar
          onClose={() => setSidebarOpen(false)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <main className="dash-content">
        <Dashboard />
        </main>
      </div>
    </div>
  );
}
