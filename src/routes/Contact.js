import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import vu from "../assets/river.jpg"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import { useEffect } from "react"

function Contact (){
    useEffect(() => {
        document.title = "Contact"
    }
    )
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg={vu}
            title="Contact"
            hc="black"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}
export default Contact