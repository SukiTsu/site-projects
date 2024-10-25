import '../assets/style/styleAbout.css'

export default function About() {
    return (
        <section id="about" className="about">
            <div className='section'>
                <div className='content'>
                    <h2>À propos de moi</h2>
                    <p>Je m'appelle Brandon Bui, et en tant que développeur web, je suis profondément passionné par la création d'expériences digitales innovantes et accessibles. 
                        Mon parcours m'a permis de développer une expertise solide dans la conception et le développement d'applications web, en alliant performance, design et convivialité.
                        Je suis actuellement à recherche d'un contrat d'alternance de 12 mois.
                    </p>
                    <strong><a href='/Brandon_Bui_CV.pdf'>Accéder à mon CV</a></strong>
                </div>
                
            
                    <div className='content'>
                        <h2>Mon parcours à l'IUT de Vélizy</h2>
                        <p>Au cours des trois années passées au sein du BUT Informatique de l'IUT de Vélizy, j'ai eu l'opportunité de me plonger dans un large éventail de disciplines informatiques, allant de l'algorithmique à l'ingénierie logicielle. 
                        Cette formation m'a permis de maîtriser plusieurs langages de programmation tels que Python, Java, et JavaScript, ainsi que des technologies web comme HTML, CSS, et SQL.

                        Les projets en équipe ont été un élément central de mon apprentissage, m'offrant la possibilité d'appliquer les concepts théoriques à des cas concrets. 
                        Par exemple, j'ai participé à la création d'une application de gestion de tâches collaboratives en utilisant un environnement full-stack, de la conception de l'interface utilisateur jusqu'à l'implémentation d'une base de données relationnelle.

                        En plus des aspects techniques, j'ai également développé des compétences en gestion de projet, notamment dans l'organisation du travail en équipe avec des méthodes agiles, comme Scrum, et l'utilisation d'outils collaboratifs tels que Git et Trello.
                        </p>
                    </div>
                    <div className='content ambition'>
                        <h2>Mes ambitions</h2>
                        <p>Aujourd'hui, je me prépare à intégrer la Coding Factory, où je compte me spécialiser encore davantage dans le développement web et renforcer mes compétences dans les technologies de pointe comme React et Node.js. 
                        Mon objectif est de continuer à apprendre et à progresser dans le domaine du développement, tout en trouvant un contrat d'alternance pour mettre mes compétences au service d'une entreprise innovante.
                        </p>
                    </div>
                    <div className='content propose'>
                        <h2>Ce que je propose :</h2>
                        <ul>
                            <li><p><strong>Développement de sites web sur mesure :</strong> Création de sites modernes, ergonomiques et adaptés aux besoins de votre entreprise.</p></li>
                            <li><p><strong>Intégration d'API et services externes :</strong> Optimisation de vos données et fonctionnalités via l'intégration de solutions tierces.</p></li>
                            <li><p><strong>Applications web performantes :</strong> Développement d'outils interactifs et réactifs, adaptés aux utilisateurs et aux entreprises.</p></li>
                        </ul>
                    </div>
                </div>
        </section>
    );
  }