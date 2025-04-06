import React from "react"

interface Props{
    imageSrc:string
    href:string
    overlay:string
}

const BoxContainerProjet:React.FC<Props> = ({imageSrc,href,overlay}) => {
    return (
        <>
        <div className="col-sm-4" key={href}>
            <a href={href}><div className="item">
                <img src={imageSrc} alt="portfolio image"/>
                <div className="isotope-overlay">
                        {overlay}
                </div>
            </div>
            </a>
        </div>
        </>
    )
}

export default BoxContainerProjet