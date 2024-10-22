import { Link } from "react-router-dom";
import '../assets/style/styleNavBar.css'

export default function Navbar() {
    return (
      <nav className="navbar">
        
        <div className="navbar-logo"/>


        <ul className="navbar-menu">
          <li>
            <Link to="/" className="link-navbar">
              <strong>Accueil</strong>
            </Link>
          </li>
          <li>
            <Link to="/projets" className="link-navbar">
              <strong>Mes projets</strong>
            </Link>
          </li>
        </ul>

        <div className="navbar-contact">
          <Link to="/contact" className="link-navbar">
            <strong>Contact</strong>
          </Link>
        </div>

      </nav>
    );
  }