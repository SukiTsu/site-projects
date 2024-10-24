import { Link } from 'react-router-dom'
import '../assets/style/styleFooter.css'

const Footer =({}) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Me suivre</h3>
                    <ul className="social-list">
                        <li><a href="https://www.linkedin.com/in/buibrandon47/">LinkedIn</a></li>
                        <li><a href="https://github.com/SukiTsu">GitHub</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Mes pages</h3>
                    <ul className="page-list">
                        <li><Link to="/" className="link-navbar">Accueil</Link></li>
                        <li><Link to="/projets" className="link-navbar">Mes projets</Link></li>
                        <li><Link to="/contact" className="link-navbar">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Me contacter</h3>
                    <ul className="contact-list">
                        <li><strong>Me trouver :</strong>Route de Bezons, Carrières-sur-Seine (78)</li>
                        <li><strong>Mon numéro de téléphone :</strong>07 77 86 07 71</li>
                        <li><strong>Mon mail :</strong>buibrandon47@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer