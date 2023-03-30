import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import { Link } from 'react-router-dom';
import './Signup.css'

function SignUp (){
    return(
        <div className='myDiv'>
            <Navbar/>
            <div className="justff">
            <div class="container_1">
                <header>Registration</header>

                <form action="#" id='registrator'>
                    <div class="form first">
                        <div class="details personal">
                            <span class="title">Personal Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>First Name</label>
                                    <input className='first_input' type="text" placeholder="Enter your first name" required/>
                                </div>

                                <div class="input-field">
                                    <label>Last Name</label>
                                    <input className='first_input' type="text" placeholder="Enter your last name" required/>
                                </div>

                                <div class="input-field">
                                    <label>Date of Birth</label>
                                    <input type="date" className='first_input' placeholder="Enter birth date" required/>
                                </div>

                                <div class="input-field">
                                    <label>Email</label>
                                    <input className='first_input' type="text" placeholder="Enter your email" required/>
                                </div>

                                <div class="input-field">
                                    <label>Mobile Number</label>
                                    <input className='first_input' type="number" placeholder="Enter mobile number" required/>
                                </div>

                                <div class="input-field">
                                    <label>Gender</label>
                                    <select required>
                                        <option disabled selected>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                    <label>Nationality</label>
                                    <input type="text" placeholder="Enter nationality" required/>
                                </div>

                                <div class="input-field">
                                    <label>District</label>
                                    <select required>
                                        <option disabled selected>Select district</option>
                                        <option>Arnasoy</option>
                                        <option>Baxmal</option>
                                        <option>Do'stlik</option>
                                        <option>Forish</option>
                                        <option>G'allaorol</option>
                                        <option>Jizzah</option>
                                        <option>Sharof Rashidov</option>
                                        <option>Mirzacho'l</option>
                                        <option>Paxtakor</option>
                                        <option>Yangiobod</option>
                                        <option>Zarbdor</option>
                                        <option>Zomin</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="details ID">
                            <span class="title">Academic Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>Grade</label>
                                    <input className='first_input' type="number" placeholder="Enter Grade" required/>
                                </div>

                                <div class="input-field">
                                    <label>Class</label>
                                    <select required>
                                        <option disabled selected>Select class</option>
                                        <option>Blue</option>
                                        <option>Green</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                    <label>Speciality</label>
                                    <select required>
                                        <option disabled selected>Select speciality</option>
                                        <option>No speciality yet</option>
                                        <option>CS, Pysics</option>
                                        <option>Physics, Chemistry</option>
                                        <option>Chemistry, Biology</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                    <label>Entered Date</label>
                                    <input className='first_input' type="date" placeholder="Enter entered date" required/>
                                </div>

                                <div class="input-field">
                                    <label>Graduation Date</label>
                                    <input className='first_input' type="date" placeholder="Enter graduation date" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>
                        <span class="btnText">Next</span>
                        {/* <i class="uil uil-navigator"></i> */}
                    </button>
                </form>
            </div>
            </div>

            <Footer/>
        </div>
    )
}
export default SignUp