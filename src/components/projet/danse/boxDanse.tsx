interface Props {
    urlImg:string[]
    txt:string[]
}

const BoxDanse:React.FC<Props> = ({urlImg,txt}) => {
    let html = []
    const way = "./projets/danse/"
    if (urlImg.length != txt.length){
        console.log("projet danse: taille des liste images et texte sont différente")
        return
    }
    for (let i=0;i<urlImg.length;i++){
        html.push(
            <>
            <div className="item-dance" key={urlImg[i]}>
                <div className="img" style={{ backgroundImage: `url('${way}${urlImg[i]}.jpg')`}}></div>     
            </div>
                <button key={urlImg[i]+"."}>{txt[i]}
            </button>
            </>
        )
    }
    return(
        <>
        {html}
        </>
    )
}

export default BoxDanse