import '../assets/style/styleHeader.css'

export default function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#portfolio">Mes Projets</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Developpeur Web</p>
      </header>
    );
  }