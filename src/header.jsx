import { Link } from "react-router-dom";
import Logo from "./components/logo";
import "./header.css";
import React from "react";
import { useTheme } from "./components/ThemeContext"; // adjust path as needed

export default function Header() {
  const { theme } = useTheme();

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
