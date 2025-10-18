import { Link } from "react-router-dom";
import Logo from '../logo/logo'
import "./header.css";
import React from "react";
import { useTheme } from "../themes/ThemeContext"; 


export default function Header() {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme === "dark" ? "header-dark" : "header-light"}`}>
      <nav className="nav-left">
        <ul>
          <li><Link to="/rvsp">RVSP</Link></li>
          <li><Link to="/ourstory">OUR STORY</Link></li>
        </ul>
      </nav>

      <Link to="/" className="logo-link">
        <Logo className="logo" />
      </Link>

      <nav className="nav-right">
        <ul>
          <li><Link to="/itinerary">ITINERARY</Link></li>
          <li><Link to="/location">LOCATION</Link></li>
        </ul>
      </nav>
    </header>
  );
}
