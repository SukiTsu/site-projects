import BoxContainerProjet from "./boxContainer"

const MesProjets = ({}) => {
	
	const data = [
		{
			imageSrc:"./projets/site_banner.png",
			href:"/sites",
			overlay:"Mes sites internet"
		},
		
		{
			imageSrc:"./projets/dance_banner2.png",
			href:"/dance",
			overlay:"Mon projet dance"
		},{
			imageSrc:"./projets/dessin_banner.png",
			href:"",
			overlay:"Mes projets en dessin"
		}
	]

    return (
        <>
        <section id="portfolio" className="portfolio">
			<div className="portfolio-details">
				<div className="section-heading text-center">
					<h2>portfolio</h2>
				</div>
				<div className="container">
					<div className="portfolio-content">
						<div className="isotope">
							<div className="row">
								{data.map((projet) => (
									<BoxContainerProjet imageSrc={projet.imageSrc} href={projet.href} overlay={projet.overlay} key={projet.overlay}/>
				                ))}
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
        </>
    )
}
export default MesProjets