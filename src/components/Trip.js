import TripData from "./TripData"
import "./TripsStyles.css"
import uniform from '../assets/uniform.jpg'
import canteen from '../assets/canteen.jpg'
import dormitory from '../assets/dormitory.jpg'

function Trip(){
    return(
        <div className="trip">
            <h1>Facilities</h1>
            <div className="extra">
                <p className="">The Jizzakh Presidential School is a well-maintained institution with modern infrastructure and facilities that provide a conducive environment for learning.</p>
            </div>
            <div className="tripcard">
                <TripData
                image={canteen}
                heading="Consuming food five times daily, free"
                text="At the Presidential School, the routine of consuming food is structured to ensure that students have adequate nutrition to fuel their academic pursuits. The school provides a well-balanced diet consisting of breakfast, lunch, dinner, and two snacks. Students are encouraged to consume these meals at designated times throughout the day, typically in the morning, at mid-day, and in the evening, with snacks available in between."
                />
                <TripData
                image={uniform}
                heading="School uniform, free"
                text="One of the key features of the Presidential School is that it provides a free uniform to all students. The school believes that having a uniform is essential in creating a sense of unity and equality among the student body. The uniform is made of high-quality materials and designed to be comfortable, durable, and suitable for the school environment. The school provides a complete set of uniform items, including shirts, pants/skirts, blazers, and ties, etc."
                />
                <TripData
                image={dormitory}
                heading="Dormitory, free"
                text="At the Presidential School, all students are required to live on campus in the free dormitory accommodation provided by the school. The school believes that living on campus helps to create a conducive and focused learning environment for students, and it also fosters a sense of community and camaraderie among the student body. The dormitories are well-furnished and designed to provide a safe and comfortable living environment for students."
                />
            </div>
        </div>
    )
}
export default Trip