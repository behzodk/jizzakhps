import Navbar from "../components/Navbar"
import school from "../assets/school.png"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import "../components/HeroStyles.css"
import { init } from 'ityped'
import { useEffect } from "react"

function Home (){
    useEffect(() => {
        document.title = "Jizzakh Presidential School"
    }
    )
    const myElement = document.querySelector('#mainer')
    init(myElement, { showCursor: false, strings: ['Future of Uzbekistan depends upon us!', 'Lets build future together!' ] })
    return(
        <>
            <Navbar/>

            <div className="hero">
                <img src={school} alt="VisitUzbekistan" />

                <div className="hero-text">
                    <h1><span className="wrap">Presidential school in Jizzakh</span></h1>
                    <p id="mainer"></p>
                    <Link to='/about' className="show">
                        More about us
                    </Link>
                </div>
            </div>

            <Destination />
            <Trip />
            <Footer />
        </>
    )
}
export default Home