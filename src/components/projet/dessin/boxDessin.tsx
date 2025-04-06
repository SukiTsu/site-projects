interface Props{
    title:string
    src:string
    nb:number
}

const BoxDessin:React.FC<Props> = ({title,src,nb}) => {


    return(
        <>
        <div>
            <img className={`grid-item grid-item-${nb}`} src={src} alt={title}/>
            <p>{title}</p>
        </div>
        </>
    )
}

export default BoxDessin