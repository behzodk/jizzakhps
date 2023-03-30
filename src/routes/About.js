import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
import jizzax from '../assets/jizzax.jpg'
// import Staff from '../components/Staff'

function About (){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg={jizzax}
            title="About Us"
            />
            <AboutUs/>
            {/* <Staff/> */}
            <Footer/>
        </>
    )
}
export default About