interface Props{
    imgSrc:string[]
    link:string | null
    title:string
    content:string
}

const BoxSite:React.FC<Props> = ({imgSrc,link,title,content}) => {

    return(
        <>
        <div className="project">
      <img className="project__image" src={imgSrc[0]} />
      <p><title></title></p>
      <h3 className="grid__title"> full-stack</h3>
      <div className="grid__overlay">
        <button className="viewbutton">Voir plus</button>
      </div>
    </div>
        </>
    )
}

export default BoxSite