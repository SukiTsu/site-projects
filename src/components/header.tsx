import '../assets/style/styleHeader.css'

export default function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Mes services</a></li>
              <li><a href="#tarif">Tarifs</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>VOTRE CORPS EN DE BONNES MAINS</h1>
        <p>Valérie Dartout</p>
      </header>
    );
  }