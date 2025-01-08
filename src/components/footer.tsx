import '../assets/style/styleFooter.css'

const Footer =({}) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Me suivre</h3>
                    <ul className="social-list">
                        <li><a href="https://www.linkedin.com/in/val%C3%A9rie-dartout-87803429a/">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/valeriedartout?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Mes pages</h3>
                    <ul className="page-list">
                        <li><a href="#about" className="link-navbar">A propos</a></li>
                        <li><a href="#services" className="link-navbar">Mes services</a></li>
                        <li><a href="#tarif" className="link-navbar">Tarifs</a></li>
                        <li><a href="#contact" className="link-navbar">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Me contacter</h3>
                    <ul className="contact-list">
                        <li><strong>Me trouver :</strong>Le Vésinet (78)</li>
                        <li><strong>Mon numéro de téléphone :</strong>06 17 54 10 60</li>
                        <li><strong>Mon mail :</strong>valerie.dartout@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer