import React from "react"

interface Props{
    title:string
}

const BoxSkills:React.FC<Props> = ({title}) => {

    return(
        <>
        <div className="col-sm-3">
            <div className="single-profile">
                <div className="profile-txt">
                    <a href=""><img src={`./favicon/${title}-logo.png`} width={70}/></a>
                    <div className="profile-icon-name">{title}</div>
                </div>
                <div className="single-profile-overlay">
                    <div className="profile-txt">
                        <a href=""><img src={`./favicon/${title}-logo2.png`} width={70}/></a>
                        <div className="profile-icon-name">{title}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BoxSkills