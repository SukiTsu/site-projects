import BoxEducation from "./boxEducation"

const Education = ({}) => {
    const taille = 4
    const data = [
        {
            date:"2019 - 2021",
            diplome:"Bac STI2D",
            etablissement:"Lycée Général Technologique Agora",
            ville:"Puteaux",
            details:`Etudiant`
        },
        
        {
            date:"2021 - 2024",
            diplome:"DUT Informatique | Bac + 2",
            etablissement:"IUT de Vélizy",
            ville:"Vélizy-Villacoublay",
            details:`
            Durant mes 3 années, j’ai suivi des cours couvrant les principaux domaines de l’informatique tels que la programmation en Java, Python, et C, la gestion de bases de données, et le développement web. J'ai également appris à travailler avec des outils comme Docker et à maîtriser les principes des réseaux et de la cybersécurité.<br/>

Les projets pratiques et stages ont joué un rôle clé dans ma formation, me permettant d'appliquer ces connaissances dans des contextes réels. Par exemple, j’ai travaillé sur des projets comme la création d’un site de calcul distribué sur un cluster de Raspberry Pi ou encore la conception de sites web dynamiques en PHP.<br/>

Le travail en équipe et les méthodes agiles m'ont permis de développer des compétences organisationnelles et une collaboration efficace dans divers projets, tout en me familiarisant avec les environnements professionnels.
`
        },
        
        {
            date:"2024 - 2025",
            diplome:"Etudiant parcours Développeur web",
            etablissement:"Coding Factory",
            ville:"Paris",
            details:`
            La Coding Factory by ESIEE-IT repose sur une organisation pédagogique originale qui la distingue des formations existantes sur le marché : l'EduScrum. Elle est basée sur l'approche agile, une méthode de gestion de projets qui est couramment utilisée dans le domaine du développement web et logiciel.<br/>

Elle se fonde sur la mise en place de projets visant à acquérir des connaissances très opérationnelles qui encouragent l'entraide et la créativité, en respectant les rythmes suivants : <br/>
1 semaine de cours = un sprint = un thème abordé <br/>
3 semaines de cours = une release = un projet mené <br/>

Chaque semaine est rythmée par les mêmes rituels : de la théorie, de l’e-learning, de la pratique sous forme d’ateliers et en fin de semaine des démonstrations, une rétrospective sur les projets menés et de la veille technologique.
            `
        },
    ]

    return(
        <>
        <section id="education" className="education">
			<div className="section-heading text-center">
				<h2>education</h2>
			</div>
			<div className="container">
				<div className="education-horizontal-timeline">
					<div className="row">
                        {data.map((education) => (
                            <BoxEducation date={education.date} details={education.details} diplome={education.diplome} etablissement={education.etablissement} ville={education.ville} nbCol={taille} key={education.diplome}/>
                        ))}
						
					</div>
				</div>
			</div>

		</section>
        </>
    )
}

export default Education