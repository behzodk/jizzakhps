import { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";


function Navbar(){
    let state = {clicked: false};
    let handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Jizzakh PS</h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                <li key='1'>
                    <Link className="nav-links" to="/">
                        <i className="fa-solid fa-house-user"></i>Home
                    </Link>
                </li>
                <li key='2'>
                    <Link className="nav-links" to="/about">
                        <i className="fa-solid fa-circle-info"></i>About
                    </Link>
                </li>
                <li key='3'>
                    <Link className="nav-links" to="/projects">
                        <i className="fa-solid fa-briefcase"></i>Projects
                    </Link>
                </li>
                <li key='4'>
                    <Link className="nav-links" to="/library">
                        <i className="fa-solid fa-book"></i>Library
                    </Link>
                </li>
                <li key='5'>
                    <Link className="nav-links" to="/contact">
                        <i className="fa-solid fa-address-book"></i>Contact
                    </Link>
                </li>
                    
            </ul>
        </nav>
    )
}
export default Navbar;