import "../../../assets/css/styleDessin.css"
import NavBarre from "../../navbarre"
import BoxDessin from "./boxDessin"

const Dessin = ({}) => {

    const way = "./projets/dessin/"
    const data = [
        {
            title: "Link click",
            src: way+"link_click.jpg",
            nb:1
        },
        {
            title: "Link click",
            src: way+"pub_glace.webp",
            nb:2
        },
        {
            title: "Link click",
            src: way+"dada_pokemon.webp",
            nb:3
        }
        ,
        {
            title: "Link click",
            src: way+"dada_nuit.webp",
            nb:4
        },
        {
            title: "Link click",
            src: way+"mon_voeux.webp",
            nb:5
        },
        {
            title: "Link click",
            src: way+"moi_crayon.webp",
            nb:6
        },
        {
            title: "Link click",
            src: way+"dada_suki.webp",
            nb:7
        },
        {
            title: "Link click",
            src: way+"dada_youtube.webp",
            nb:8
        }
        ,
        {
            title: "Link click",
            src: way+"masque.webp",
            nb:9
        },
        {
            title: "Link click",
            src: way+"anime.webp",
            nb:10
        }
    ]

    return(
        <>
        <NavBarre />
        <h1>Mes créations artistiques</h1>
        <div className="grid-container-dessin">
        {data.map((dessin) => (
            <BoxDessin src={dessin.src} title={dessin.title} nb={dessin.nb} key={dessin.nb}/>
        ))}
        </div>
        </>
    )
}

export default Dessin