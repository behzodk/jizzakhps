import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import school from "../assets/school.png"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"

function Home (){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero"
            heroImg={school}
            title="Presidential school in Jizzakh"
            text="Future of Uzbekistan depends upon us"
            buttonText="More about us"
            url='/'
            btnClass='show'
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}
export default Home