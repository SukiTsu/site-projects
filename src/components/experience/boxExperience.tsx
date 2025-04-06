interface Props {
    date:string
    poste:string
    entreprise:string
    city:string
    content:string
}

const BoxExperience:React.FC<Props> = ({poste,date,entreprise,city,content}) => {
    
    return(
        <>
        <li key={date}>
            <div className="single-timeline-box fix">
                <div className="row">
                    <div className="col-md-5">
                        <div className="experience-time text-right">
                            <h2>{date}</h2>
                            <h3>{poste}</h3>
                        </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                            <div className="timeline-content">
                                <h4 className="title">
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                    {entreprise}
                                </h4>
                                <h5>{city}</h5>
                                <div className="description">
                                    {<div dangerouslySetInnerHTML={{ __html: content }} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}

export default BoxExperience