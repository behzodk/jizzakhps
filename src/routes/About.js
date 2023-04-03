import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
import jizzax from '../assets/jizzax.jpg'
import { useEffect } from "react"
import Trip from "../components/Trip"
// import Staff from '../components/Staff'

function About (){
    useEffect(() => {
        document.title = "About"
    }
    )
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg={jizzax}
            title="About Us"
            />
            <AboutUs/>
            <Trip/>
            {/* <Staff/> */}
            <Footer/>
        </>
    )
}
export default About