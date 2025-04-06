const Header = ({}) => {

    return (
        <>
        <section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>Bienvenue<span>, </span>je me présente<span>.</span>  </h2>
							<p>développeur web (mais aussi...</p>
							<a href="/CV.pdf" download>Mon CV</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		
        </>
    )
}

export default Header