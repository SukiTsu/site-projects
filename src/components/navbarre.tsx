import { useState } from 'react';
import '../assets/css/styleNav.css'

const NavBarre= ({}) => {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
          <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="/#about">A propos de moi</a></li>
			      <li><a href="/#education">Education</a></li>
            <li><a href="/#experience">Expériences</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#portfolio">Portfolio</a></li>
          </ul>
        </nav>
    );
  }

  export default NavBarre;