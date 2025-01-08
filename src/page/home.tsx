import About from "../components/containerAbout"
import Footer from "../components/footer"
import Header from "../components/header"
import Contact from "./contact"
import Portfolio from "./portfolio"
import Tarif from "./tarif"

const Home = () => {
    return(
        <div className="page">
            <Header />
            <Portfolio />
            <About />
            <Tarif/>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home