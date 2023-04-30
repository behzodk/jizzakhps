import StaffView from "../components/StaffView";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React from 'react'
import { HeroSec } from "../components/HeroSec";


const Staff = () => {
  return (
    <div>
        <Navbar/>
        <HeroSec className='HeroSec'/>
        <StaffView />
        <Footer/>
    </div>
  )
}

export default Staff