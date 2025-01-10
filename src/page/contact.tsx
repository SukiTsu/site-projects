import '../assets/style/styleContact.css'
import Footer from '../components/footer'
import Navbar from '../components/header'

const Contact =({}) => {
    return(
        <section id="contact" className="contact">
            <h1 className="contact-title">Contactez-moi</h1>
            <div className="contact-info">
                <div className="contact-details">
                    <h2>Mes coordonnées</h2>
                    <p><strong>Téléphone : </strong>07 77 86 07 71 </p>
                    <p><strong>Email : </strong>buibrandon47gmail.com</p>
                    <p><strong>Linkedin : </strong><a href='https://www.linkedin.com/in/buibrandon47/'>Accès à mon profil Linkedin</a></p>
                    <p><strong>GitHub : </strong><a href='https://github.com/SukiTsu'>Accès à mon profil GitHub</a></p>
                </div>
            </div>

            <div className="contact-map">
                <h2>Localisation</h2>
                <p>Carrières-sur-Seine (78)</p>
                <div className="map-placeholder"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20977.09409611507!2d2.1606415750200716!3d48.91278656570858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6638e37533e9f%3A0x40b82c3688c42e0!2sCarri%C3%A8res-sur-Seine!5e0!3m2!1sfr!2sfr!4v1729872719914!5m2!1sfr!2sfr" width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                
        </section>
    )
}

export default Contact