import '../assets/style/styleAbout.css'

export default function About() {
    return (
        <section id="about" className="about">
            <div className='section'>
                <div className='content'>
                <div className="text-overlay">
                    <h2>À propos de moi</h2>
                    <p>Je suis Valérie, naturopathe certifiée ISUPNAT et FENA, dédiée à vous aider à retrouver l'équilibre naturel de leur corps et à renforcer votre vitalité. 
                        Mon approche repose sur le principe que la nature offre tout ce dont nous avons besoin pour être en santé, et c'est en comprenant et en respectant ces lois naturelles que nous pouvons atteindre.<br></br><br></br>
                    De plus, J'ai suivi diverses formations en massage à l'école l'EIS (Ecole Internationale du SPA) pour développer de nouvelles compétences et apprendre de nouveaux protocoles. 
                    Ces formations m'ont permis d'enrichir ma pratique et d'approfondir mes connaissances. 
                    Elles ont été une véritable opportunité d'élargir mon expertise. 
                    Grâce à cela, je peux proposer des massages diversifiés et adaptés aux besoins spécifiques de chacun. <br></br><br></br>
                    Ma philosophie repose sur le principe que la santé est un état d'équilibre dynamique entre le corps, l'esprit et l'environnement. 
                    En travaillant ensemble, nous explorerons les causes sous-jacentes de vos déséquilibres et créerons un plan personnalisé pour soutenir <strong>votre voyage vers la santé optimale.</strong>

                    </p>
                    </div>
                    <img src="/photo_profil.png" alt="Valérie" className="floating-image"></img>
                </div>
                </div>
                <div className="image-gallery">
                    <img src="/photo_cabinet_1.jpg" alt="Cabinet" className="gallery-image" />
                    <img src="/photo_cabinet_2.jpg" alt="Cabinet" className="gallery-image" />
                    <img src="/photo_cabinet_3.jpg" alt="Cabinet" className="gallery-image" />
            </div>
        </section>
    );
  }