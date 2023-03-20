import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Trip from "../components/Trip"

function Service (){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg="https://i.pinimg.com/originals/ca/58/e6/ca58e670684d0cd9bb7711be2e00fe60.jpg"
            title="Service"
            />
            <Trip/>
            <Footer/>
        </>
    )
}
export default Service