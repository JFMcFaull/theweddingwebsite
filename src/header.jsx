import { Link } from "react-router-dom";
import Logo from "./components/logo";
import "./header.css";

export default function Header() {


return (   
    <header className="header">
  <nav className="nav-left">
    <ul>
      <li><Link to="/">OUR STORY</Link></li>
    </ul>
  </nav>

    <Link to="/">
        <Logo className="logo" />
    </Link>

  <nav className="nav-right">
    <ul>
      <li><Link to="/contact">ITENINARY</Link></li>
    </ul>
  </nav>
</header>

    )
}