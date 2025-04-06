
import "../assets/css/style.css"
import "../assets/css/animate.css"
import "../assets/css/bootsnav.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/flaticon.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/responsive.css"
import "../assets/css/owl.theme.default.min.css"
import MesProjets from "../components/projet/projet"
import Experience from "../components/experience/experience"
import Education from "../components/education/education"
import APropos from "./apropos"
import NavBar from "../components/navbarre"
import Header from "../components/header"
import Skills from "../components/skills/skills"

const Home = () => {
    return(
        <>
        <div className="page">
            <NavBar />
            <Header />
            <APropos />
            <Education />
            <Experience />
            <Skills />
            <MesProjets />
        </div>
        <script src="../assets/js/jquery.js"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
		
        <script src="../assets/js/bootstrap.min.js"></script>
		
		<script src="../assets/js/bootsnav.js"></script>
		
		<script src="../assets/js/jquery.sticky.js"></script>
		
		<script src="../assets/js/progressbar.js"></script>

		<script src="../assets/js/jquery.appear.js"></script>


        <script src="../assets/js/owl.carousel.min.js"></script>


		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
		
        
        <script src="../assets/js/custom.js"></script>
        </>
        
    )
}

export default Home