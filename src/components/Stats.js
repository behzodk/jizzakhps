import React from 'react'
import con1 from '../assets/images/con1.svg'
import con2 from '../assets/images/con2.svg'
import con3 from '../assets/images/con3.svg'
import con4 from '../assets/images/con4.svg'
import './StatsStyles.css'

const Stats = () => {
  return (
    <div>
        <section class="container-ul">
		<div class="container-box">
			<div class="container-img">
				<img src={con1} alt='con1'/>
			</div>
			<div class="container-text">
				<h4>5K</h4>
				<p>Online Courses</p>
			</div>
		</div>

		<div class="container-box">
			<div class="container-img">
				<img src={con2} alt='con2'/>
			</div>
			<div class="container-text">
				<h4>5K</h4>
				<p>Online Courses</p>
			</div>
		</div>

		<div class="container-box">
			<div class="container-img">
				<img src={con3} alt='con3'/>
			</div>
			<div class="container-text">
				<h4>5K</h4>
				<p>Online Courses</p>
			</div>
		</div>

		<div class="container-box">
			<div class="container-img">
				<img src={con4} alt='con4'/>
			</div>
			<div class="container-text">
				<h4>5K</h4>
				<p>Online Courses</p>
			</div>
		</div>
	</section>
</div>
  )
}

export default Stats