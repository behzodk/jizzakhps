import DestinationData from "./DestinationData"
import './DestinationStyles.css'
import r from "../assets/exam.jpg"
import j from "../assets/exam_2.jpg"
import baa from "../assets/baa.jpg"
import baa_1 from "../assets/baa_1.jpg"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Recent News</h1>
            <p>Get informed the recent news of our school</p>

            <DestinationData
            cName="first-des"
            imgc="image"
            heading="AS level mock tests"
            text="Practical laboratory training is an essential aspect of the A-level chemistry curriculum, and it is critical for students to gain hands-on experience to improve their understanding of the subject. The President's School in Jizzakh recognizes the importance of practical training and has organized a rigorous laboratory training program to help their students excel in their A-level chemistry mock exams."
            img1={r}
            img2={j}
            />

            <DestinationData
            cName="first-des-reverse"
            imgc="image-reverse"
            heading='"TESOL Arabia 2023" on March 10-12 at the Hyatt Regency, Dubai, UAE'
            text='The International Conference "Navigating the Classrooms of Tomorrow" was held.

            ♻️ Khaidarova Dilorom Akramovna, deputy director of spiritual and educational affairs of the Presidential School in Jizzakh, also participated in this international conference.
            
            ⚡️During the conference, issues such as the educational system of international schools, exchange programs for teachers and students, innovative approaches, evaluation system, introduction of international experiences were discussed. D. A. Khaydarova also participated with a lecture on the topic of the education system of Uzbekistan and foreign countries.'
            img1={baa}
            img2={baa_1}
            />
        </div>
    )
}
export default Destination