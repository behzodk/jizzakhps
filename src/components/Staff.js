import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png"

const Staff = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are my skills that I learnt till 09/2022. Now it might be changed. <br></br> I have another knowledges too. But these are most usefull things. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>English</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}

export default Staff