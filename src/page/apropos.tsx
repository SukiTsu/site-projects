const APropos = ({}) => {

    return(
        <>
        <section id="about" className="about">
			<div className="section-heading text-center">
				<h2>A propos de moi</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
                                Je m'appelle Brandon Bui, et en tant que développeur web, je suis profondément passionné par la création d'expériences digitales innovantes et accessibles. 
                        Mon parcours m'a permis de développer une expertise solide dans la conception et le développement d'applications web, en alliant performance, design et convivialité.
								</h3>
								<p>
                                Passionné par le sport et toujours animé par l’envie de progresser, je suis curieux de nature et constamment en quête de nouvelles compétences, notamment dans le domaine du web.

En parallèle, je cultive une grande admiration pour la pop culture, en particulier l’univers manga/animé, qui m’inspire aussi dans mes dessins.

Cette passion m’a également conduit à co-créer un groupe de danse avec des amis, avec lequel nous réalisons des performances lors de conventions, mêlant créativité, rigueur et plaisir du partage.

Aujourd’hui, je cherche à faire évoluer mes projets personnels et professionnels en associant ces univers qui me font vibrer.
								</p>
								<div className="row">
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>phone</h3>
											<p>07 77 86 07 71</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>buibrandon47@gmail.com</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>Domicile</h3>
											<p>Carrières-sur-Seine</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src="./photo_profil.png" alt="profile_image" />
								<div className="about-list-icon">
									<ul>
										<li>
											<a href="https://github.com/SukiTsu">
												<i  className="fa fa-github" aria-hidden="true"></i>
											</a>
											
										</li>
										<li>
											<a href="https://www.linkedin.com/in/buibrandon47/">
												<i  className="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/suukitsuu/">
												<i  className="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
										
										
									</ul>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default APropos