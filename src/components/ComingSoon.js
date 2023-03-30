import React from 'react'
import './ComingSoonStyles.css'
import Run from '../assets/images/triangle.png'
import Rocket from '../assets/images/rocket.png'

const ComingSoon = () => {
    var countDownDate = new Date("April 10, 2023 00:00:00").getTime()
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = countDownDate-now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds

        if(distance<0){
            clearInterval(x);
            document.getElementById('days').innerHTML = "00"
            document.getElementById('hours').innerHTML = "00"
            document.getElementById('minutes').innerHTML = "00"
            document.getElementById('seconds').innerHTML = "00"
        }

    }, 1000)
    return (
        <div className='container'>
            <div className="content">
                <p>This page is under maintenance</p>
                <h1>We're <span>Launching</span> Soon</h1>
                <div className="launch-time">
                    <div>
                        <p id='days'>00</p>
                        <span>Days</span>
                    </div>
                    <div>
                        <p id='hours'>00</p>
                        <span>Hours</span>
                    </div>
                    <div>
                        <p id='minutes'>00</p>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <p id='seconds'>00</p>
                        <span>Seconds</span>
                    </div>
                </div>
                <button type="button">Learn More <img src={Run} alt="Run" /></button>
            </div>
            <img src={Rocket} alt="Rocket" className='rocket'/>
        </div>
    )
}

export default ComingSoon