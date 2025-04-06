interface Props {
    date:string
    diplome:string
    etablissement:string
    ville:string
    details:string
    nbCol:number
}

const BoxEducation:React.FC<Props> = ({date,diplome,etablissement,ville,details,nbCol}) => {

    return(
        <>
        <div className={`col-sm-${nbCol}`} key={diplome}>
            <div className="single-horizontal-timeline">
                <div className="experience-time">
                    <h2>{date}</h2>
                    <h3>{diplome}</h3>
                </div>
                <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                    <div className="timeline-content">
                        <h4 className="title">
                            {etablissement}
                        </h4>
                        <h5>{ville}</h5>
                        <div className="description">
                        {<div dangerouslySetInnerHTML={{ __html: details }} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BoxEducation