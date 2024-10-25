import About from "../components/containerAbout"
import Footer from "../components/footer"
import Header from "../components/header"
import Contact from "./contact"
import Portfolio from "./portfolio"

const Home = () => {
    return(
        <div className="page">
            <Header />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home