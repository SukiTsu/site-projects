import "../../../assets/css/styleDanse.css"
import NavBar from "../../navbarre"
import BoxDanse from "./boxDanse"
import PresentationDanse from "./presentation"

const Danse = ({}) => {

  const data = [
    {
      urlImg: ["all_gris","ivi","mina","seol2","suki3","mina2","all1","suki","ivi2","seol","mina3","all3","seol3","sukiseol","suki2","ivi3"],
      txt: ["nous",   "Iva",    "Mina","Seol","Suki","Mina",  "Nous","Suki","Iva","Seol", "Mina"," Nous","Seol","Duo","Suki","Iva"]
    }
  ]

    return(
        <>
        <NavBar />
        <div className="wrap">
          <div className="girl"></div>
            <h1>La naissance d'un groupe passionné<span>.</span></h1>
              <div className="list">
              {data.map((danse) => (
                <BoxDanse urlImg={danse.urlImg} txt={danse.txt} key={danse.urlImg[0]}/>
              ))}
            </div>
          </div>
          <PresentationDanse />
        </>
    )
}

export default Danse