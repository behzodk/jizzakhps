import React from 'react'
import con1 from '../assets/images/con1.svg'
import con2 from '../assets/images/con2.svg'
import con3 from '../assets/images/con3.svg'
import con4 from '../assets/images/con4.svg'
import './StatsStyles.css'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
    <div>
        <section class="container-ul">
		<div class="container-box">
			<div class="container-img">
				<img src={con1} alt='con1'/>
			</div>
			<div class="container-text">
				<h4>166</h4>
				<p>Students</p>
			</div>
		</div>

		<Link to="/staff" class="staff container-box">
			<div class="container-img">
				<img src={con3} alt='con3'/>
			</div>
			<div class="container-text">
				<h4>102</h4>
				<p>Staff</p>
			</div>
		</Link>

		<div class="container-box">
			<div class="container-img">
				<img src={con2} alt='con2'/>
			</div>
			<div class="container-text">
				<h4>35+</h4>
				<p>Certificates in olympiads</p>
			</div>
		</div>

		<div class="container-box">
			<div class="container-img">
				<img src={con4} alt='con4'/>
			</div>
			<div class="container-text">
				<h4>20+</h4>
				<p>Subjects</p>
			</div>
		</div>
	</section>
</div>
  )
}

export default Stats