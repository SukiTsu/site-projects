import '../assets/style/styleContact.css'

const Contact =({}) => {
    return(
        <section id="contact" className="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-info">
                <div className="contact-details">
                    <h2>Horaires et rendez-vous</h2>
                    <p>Pour prendre rendez-vous, contatez-moi ou envoyez moi un mail aux coordonnées si dessous</p>
                    <p><strong>Téléphone : </strong>06 17 54 10 60</p>
                    <p><strong>Email : </strong>valerie.dartout@gmail.com</p>
                    <p>Le Lundi et Mardi au cabinet : Le Vésinet Centre ou à votre domicile en semaine</p>
                </div>
            </div>

            <div className="contact-map">
                <h2>Localisation</h2>
                <div className="map-placeholder"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10492.755978093004!2d2.116558770535094!3d48.89273523582397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e662fa892a648f%3A0xac9a2d21968a7d43!2s26%20Rue%20du%20Mar%C3%A9chal%20Foch%2C%2078110%20Le%20V%C3%A9sinet!5e0!3m2!1sfr!2sfr!4v1736346960390!5m2!1sfr!2sfr" width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                
        </section>
    )
}

export default Contact