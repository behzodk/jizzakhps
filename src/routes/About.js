import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"

function About (){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg="https://i0.wp.com/wanderrsaurus.net/wp-content/uploads/2019/09/DSC00856_edited-scaled.jpg?fit=2560%2C1440&ssl=1"
            title="About Us"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}
export default About