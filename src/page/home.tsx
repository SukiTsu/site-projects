import Footer from "../components/footer"
import Navbar from "../components/navBar"

const Home = () => {
    return(
        <div className="page">
            <Navbar />
            <div className="content">
                <h1>Bienvenue sur mon site !</h1>
                <p>Je m'appelle Brandon Bui, et je suis actuellement en troisième année de BUT Informatique à l'IUT de Vélizy. 
                Depuis le début de mes études, je me passionne pour le développement web et les nouvelles technologies. 
                Grâce à une formation complète et pratique, j'ai pu acquérir des compétences solides en programmation, gestion de bases de données, et développement d'applications.</p>
                
                <h1>Mon parcours à l'IUT de Vélizy</h1>
                <p>Au cours des trois années passées au sein du BUT Informatique de l'IUT de Vélizy, j'ai eu l'opportunité de me plonger dans un large éventail de disciplines informatiques, allant de l'algorithmique à l'ingénierie logicielle. 
                Cette formation m'a permis de maîtriser plusieurs langages de programmation tels que Python, Java, et JavaScript, ainsi que des technologies web comme HTML, CSS, et SQL.

                Les projets en équipe ont été un élément central de mon apprentissage, m'offrant la possibilité d'appliquer les concepts théoriques à des cas concrets. 
                Par exemple, j'ai participé à la création d'une application de gestion de tâches collaboratives en utilisant un environnement full-stack, de la conception de l'interface utilisateur jusqu'à l'implémentation d'une base de données relationnelle.

                En plus des aspects techniques, j'ai également développé des compétences en gestion de projet, notamment dans l'organisation du travail en équipe avec des méthodes agiles, comme Scrum, et l'utilisation d'outils collaboratifs tels que Git et Trello.
                </p>
                <h1>Mes ambitions</h1>
                <p>Aujourd'hui, je me prépare à intégrer la Coding Factory, où je compte me spécialiser encore davantage dans le développement web et renforcer mes compétences dans les technologies de pointe comme React et Node.js. 
                Mon objectif est de continuer à apprendre et à progresser dans le domaine du développement, tout en trouvant un contrat d'alternance pour mettre mes compétences au service d'une entreprise innovante.
                </p>
                <h1>Ce que je vous propose :</h1>
                <ul>
                    <li><p><strong>Développement de sites web sur mesure :</strong> Création de sites modernes, ergonomiques et adaptés aux besoins de votre entreprise.</p></li>
                    <li><p><strong>Intégration d'API et services externes :</strong> Optimisation de vos données et fonctionnalités via l'intégration de solutions tierces.</p></li>
                    <li><p><strong>Applications web performantes :</strong> Développement d'outils interactifs et réactifs, adaptés aux utilisateurs et aux entreprises.</p></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home