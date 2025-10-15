import { Link } from "react-router-dom";
import Logo from "./components/logo";
import "./header.css";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute("data-theme") || "light";
            setTheme(newTheme);
          }
        });
      },
      { threshold: 0.8 } // triggers when 60% of section is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header ${theme === "dark" ? "header-dark" : "header-light"}`}>
      <nav className="nav-left">
        <ul>
          <li><Link to="/">OUR STORY</Link></li>
          <li><Link to="/">SOMETHING</Link></li>
        </ul>
      </nav>

      <Link to="/" className="logo-link">
        <Logo className="logo" />
      </Link>

      <nav className="nav-right">
        <ul>
          <li><Link to="/contact">ITINERARY</Link></li>
          <li><Link to="/location">LOCATION</Link></li>
        </ul>
      </nav>
    </header>
  );
}
