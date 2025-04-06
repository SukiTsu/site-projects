import BoxSkills from "./boxSkills"

const Skills = ({}) => {

    const data = ["react","php","java","python","html","sql","docker","krita"]

    return(
        <>
        <section id="skills" className="profiles">
			<div className="profiles-details">
				<div className="section-heading text-center">
					<h2>Skills</h2>
				</div>
				<div className="container">
					<div className="profiles-content">
						<div className="row">
                        {data.map((skill) => (
							<BoxSkills title={skill} key={skill}/>
				        ))}
						</div>
					</div>
				</div>
			</div>

		</section>
        </>
    )
}

export default Skills