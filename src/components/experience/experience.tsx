import BoxExperience from "./boxExperience"

const Experience = ({}) =>{

    const data = [
        {
            date:"Présent",
            poste:"Opérateur",
            entreprise:"Tuyaux Flexibles Rudolph",
            lieu:"Sartrouville, France",
            content:`
            - collecter les composants auprès du magasin<br/>
- Sur une machine réglée, réaliser les produits en respectant les instructions de l&#39;Ordre
de Fabrication et d&#39;autocontrôle
- saisir les temps et les quantités produits<br/>
- effectuer la maintenance 1er niveau<br/>
- nettoyer son poste et environnement de travail<br/>
- prévenir le chef d&#39;équipe ou la maintenance en cas de problème machine<br/>
- prévenir le chef d&#39;équipe ou le contrôle en cas de problème sur le produit<br/>
- respecter les règles sociales, hygiène sécurité et environnement<br/>
- transmettre au chef d&#39;équipe ou service suivant de la fin de fabrication de son opération<br/>
- participer aux inventaires<br/>
- aider les contrôleurs de réaliser les tests<br/>`
        },
        {
            date:"Présent",
            poste:"Développeur Web",
            entreprise:"Atelier Dharma",
            lieu:"Viarmes, France",
            content:`
            <strong>Réalisation d'un site vitrine</strong>
            <ul>
            <li>Développement d'une interface utilisateur responsive en React.</li>
            <li>Mise en place de fonctionnalités dynamiques pour la présentation des produits.</li>
<li>Gestion des animations et styles thématiques par saison.</li>
<li>Intégration de formulaires de commande interactifs.</li>
<li>Optimisation des performances et SEO pour un meilleur référencement.</li>
<li>Déploiement et gestion de l'hébergement sur Vercel.</li>
</ul>
            `
        }
        
    ]

    return (
        <>
        <section id="experience" className="experience">
			<div className="section-heading text-center">
				<h2>expériences</h2>
			</div>
			<div className="container">
				<div className="experience-content">
						<div className="main-timeline">
							<ul>
								{data.map((experience) => (
									<BoxExperience date={experience.date} content={experience.content} poste={experience.poste} city={experience.lieu} entreprise={experience.entreprise} key={experience.poste}/>
				                ))}


							</ul>
						</div>
					</div>
			</div>

		</section>
        </>
    )
}

export default Experience