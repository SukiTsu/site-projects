import "../../../assets/css/styleDansePresentation.css"

const PresentationDanse = ({}) => {

    return(
        <>

        <div className="slick-slider">
            <li>
                <div className="full-card">

                    <div className="font-card robotoslab-card">
                    </div>

                    <div className="font-card roboto-card">
                        {/*<h3 className="font--roboto">Roboto</h3>
                        <p className="font--roboto">Roboto is a sans-serif typeface family developed for the mobile operating system, Android.</p>*/}
                        <a target="_blank" href="https://www.instagram.com/ujuicy.real/" className="explore-button">Nous suivre</a>
                    </div>

                    <div className="font-description">
                        <h2 className="font--robotoslab">Ujuicy<span className="font--roboto"> Crew</span></h2>
                        <p className="font--roboto">Nous, c’est Ujuicy, une équipe soudée par la passion de la K-pop ! On n’est peut-être pas des pros, mais on donne tout pour des prestations carrées, fun et pleines d’énergie. Ensemble, on danse, on progresse et surtout, on s’éclate ! On se retrouve très vite pour de nouvelles performances !</p>
                    </div>

                </div>
            </li>
        
            <li>
                <div className="full-card">

                    <div className="font-card lobster-card">
                        <h3 className="font--lobster">Mina</h3>
                        {/*<a target="_blank" href="https://fonts.google.com/specimen/Lobster" className="explore-button">Explore</a>*/}
                    </div>

                    <div className="font-card cabin-card">
                        <h3 className="font--cabin">Iva</h3>
                    </div>

                    <div className="font-description">
                        <h2 className="font--lobster">Mina<span className="font--cabin">+Iva</span></h2>
                        <p className="font--cabin">Un duo de filles exceptionnel! Le mélange de timidité et de déjantation promet d'être explosif!</p>
                    </div>
                </div>
                </li>
                
                
                
                <li>
                    <div className="full-card">

                        <div className="font-card eczar-card">
                            <h3 className="font--eczar">Seol</h3>
                        </div>

                        <div className="font-card gentium-card">
                            <h3 className="font--gentium">Suki</h3>
                        </div>

                        <div className="font-description">
                            <h2 className="font--eczar">Seol<span className="font--gentium">+Suki</span></h2>
                            <p className="font--gentium">Le boy groupe est prêt à tout casser donc attention à vous !</p>
                        </div>
                    </div>
                </li>
            </div>
            <script src="../../../assets/js/scriptDanse.js"></script>
        </>
    )
}

export default PresentationDanse