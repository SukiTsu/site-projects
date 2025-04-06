/*import ContainerProjet from "../components/containerProjet";
import "../assets/style/styleProjet.css"

const Portfolio = () => {
    const data = [
        { title: 'Site React Patisserie', imgs: ["./atelier/home.PNG","./atelier/galerie.PNG","./atelier/galerie_cake_detail.PNG","./atelier/cake_design.PNG","./atelier/contact.PNG"], link: "https://atelier-dharma.fr", content: `
            <p><strong>Bienvenue sur le site officiel de atelier-dharma.fr</strong>, votre pâtisserie artisanale de confiance, où chaque création est un mélange de tradition, d'innovation et de saveurs authentiques. 
            Ce site vitrine a été spécialement conçu pour vous offrir un aperçu de notre savoir-faire et de nos dernières créations.</br>

            Grâce à une intégration en temps réel avec notre page Facebook via l'API Facebook Developer, vous pouvez découvrir en un coup d'œil nos publications les plus récentes, vous tenir informé des nouveautés, promotions, et événements spéciaux directement depuis notre atelier.</br>

            <strong>Caractéristiques du site :</strong></p>
            <ul>
                <li><p><strong>Catalogue de créations pâtissières :</strong> Explorez nos dernières créations, des pâtisseries traditionnelles aux créations modernes, mises à jour en temps réel grâce à notre intégration avec les réseaux sociaux.</p></li>
                <li><p><strong>Design réactif et ergonomique :</strong> Une interface claire et élégante, optimisée pour tous les appareils, que vous naviguiez sur mobile, tablette ou ordinateur.</p></li>
            </ul>
            <p>Chez atelier-dharma, nous nous engageons à vous offrir non seulement des produits délicieux, mais aussi une expérience en ligne agréable et pratique. Parcourez notre site pour découvrir l'univers gourmand que nous avons à vous offrir.</p>` },

        { title: 'Librairie de composants React personnalisables', imgs: ["./lib_component/lib-component.png","./lib_component/component_alert.PNG","./lib_component/component_input.PNG","./lib_component/component_radio.PNG"], link: 'https://library-react-xi-lovat.vercel.app/', content: `
            <p>Ce projet est une librairie de composants développée avec React. L'objectif est de fournir un ensemble de composants réutilisables qui permettent aux développeurs de gagner du temps dans la création d'interfaces utilisateurs. 
            Tous les composants sont personnalisables grâce à l'utilisation de props, permettant ainsi une grande flexibilité et une adaptation à différents besoins.<br>
            </p><h2>Fonctionnalités principales</h2>
            <ul>
            <li><p>Composants réutilisables : Chaque composant est conçu pour être utilisé dans plusieurs contextes différents, ce qui permet aux développeurs de se concentrer sur les fonctionnalités spécifiques de leurs projets tout en réutilisant une base solide.</p></li>
            <li><p>Personnalisation via props : Grâce aux props, chaque composant peut être configuré de manière dynamique selon les besoins du projet. Que ce soit pour modifier l'apparence, le comportement, ou le contenu, il suffit de passer les bonnes valeurs dans les props pour adapter le composant.</p></li>
            <li><p>Simplicité d'intégration : La librairie est conçue pour être facile à installer et à utiliser dans n'importe quel projet React. Une documentation détaillée accompagne chaque composant pour une prise en main rapide.</p></li>
            <li><p>Flexibilité des styles : Les composants supportent aussi la personnalisation du style en passant des classes CSS ou des objets de style directement via les props. Cela permet de s'adapter aux chartes graphiques des projets existants.</p></li>` },
        
        { title: 'Site Django Article', imgs: ["./django/home.PNG","./django/article_fr.PNG","./django/article_en.PNG","./django/search.PNG","./django/question.PNG"], link: 'https://django-multilang-site-deploy.vercel.app/', content: `
            <p>Une plateforme dynamique et moderne dédiée à la présentation d'articles informatifs et pertinents, conçue avec le framework Django. 
            Ce site offre une navigation intuitive et permet aux utilisateurs de parcourir facilement une vaste sélection d'articles classés par thématiques.</br>

            <strong>Caractéristiques principales :</strong></p>
            <ul>
                <li><p><strong>Gestion multilingue :</strong> Notre site est conçu pour une audience internationale. Vous pouvez changer de langue en un clic, grâce à un système de gestion multilingue performant. Chaque article est disponible dans plusieurs langues pour s’adapter à un large public.</p></li>
                <li><p><strong>Interface utilisateur fluide et réactive :</strong> Le design du site a été pensé pour offrir une expérience utilisateur optimale, avec un affichage clair et une mise en page adaptable à tout type d’appareil, que vous soyez sur mobile, tablette ou ordinateur.</p></li>
                <li><p><strong>Organisation des articles :</strong> Les articles sont classés par catégories et tags, permettant aux utilisateurs de naviguer facilement entre les sujets d’intérêt. Chaque article est accompagné d'une vue détaillée avec des suggestions pour approfondir la lecture.</p></li>
                <li><p><strong>Moteur de recherche intégré :</strong> Un moteur de recherche interne vous permet de trouver rapidement des articles pertinents en fonction de vos mots-clés.</p></li>
            <p>Grâce à Django, ce site offre une gestion performante et sécurisée du contenu. Que vous soyez un lecteur occasionnel ou un visiteur régulier, nous nous efforçons de vous fournir une expérience fluide et enrichissante. Découvrez des articles de qualité, mis à jour régulièrement, et explorez notre contenu dans la langue de votre choix.</p>
`       },
        {
            title: "Application de Quiz (Android, Jetpack Compose)", imgs: ["./android/android_home.png","./android/android_question_theme.png","./android/android_quizQuestion.png","./android/android_quizStart.png","./android/android_result.png"], link: null, content: `
            <p><strong>Description :</strong> Développement d’une application de quiz interactive et personnalisable, utilisant les dernières technologies Android. Le projet a été construit autour de l’architecture MVVM et de la Clean Architecture, en intégrant des composants modernes d’UI avec Jetpack Compose pour une expérience utilisateur fluide et responsive.</p>

            <h2>Fonctionnalités principales :</h2>
            <ul>
                <li><p><strong>Thèmes personnalisables :</strong> L’utilisateur peut basculer entre les thèmes clair, sombre, ou en fonction du système, et sélectionner des jeux de couleurs pour personnaliser l’apparence.</p></li>
                <li><p><strong>Gestion de la navigation :</strong> Utilisation de Navigation Compose pour une expérience multi-écrans fluide, avec des transitions contrôlées via un NavController.</p></li>
                <li><p><strong>Type de questions et de réponses variés :</strong> Quiz composé de questions à choix multiples, à choix unique, et d’images, permettant une diversité de réponses.</p></li>
                <li><p><strong>Fonctionnalité de résultats :</strong> Calcul et affichage des scores, avec une option de réinitialisation du quiz pour de nouvelles sessions.</p></li>
                <li><p><strong>Persistance des préférences :</strong> Utilisation de DataStore pour sauvegarder les paramètres de l’utilisateur, tels que le thème et les préférences de couleur.</p></li>
            </ul>
            
            <h2>Techniques et technologies utilisées :</h2>

            <ul>
                <li><p><strong>Jetpack Compose :</strong> Conception de l'interface utilisateur entièrement en code composable, en utilisant des composants tels que Scaffold, Column, LazyColumn, et des Modifiers pour la mise en page et le style.</p></li>
                <li><p><strong>Architecture MVVM :</strong> Implémentation de la séparation des couches avec un ViewModel pour la gestion de l’état, StateFlow pour observer les données, et mappers pour transformer les données de la couche Data en UiModel.</p></li>
                <li><p><strong>Coroutines et Flow :</strong> Gestion asynchrone des données et des états, permettant une manipulation fluide des données dans l'application.</p></li>
                <li><p><strong>Injection de dépendances avec Hilt :</strong> Facilitation des tests unitaires et modularisation du code.</p></li>
                <li><p><strong>Tests unitaires :</strong> Vérification de la logique métier et des flux d'interaction utilisateur sans émulateur, garantissant une application fiable.</p></li>
            </ul>
            
            <h2>Outils :</h2>

            <ul>
                <li><p><strong>Git :</strong> Gestion de version et collaboration en équipe sur GitHub.</p></li>
                <li><p><strong>Trello :</strong> Suivi des tâches en mode agile, avec rétrospectives régulières pour ajuster le projet.</p></li>
            </ul>
            `
        }
      ];

    return(
        <section id="portfolio" className="portfolio">
            <h1>Mes projets</h1>
            <div className="gallery" key={"portfolio"}>
                {data.map((site) => (
                    <ContainerProjet title={site.title} imgs={site.imgs} link={site.link} content={site.content} key={site.title}/>
                ))}
            </div>
        </section>
    )
}

export default Portfolio*/