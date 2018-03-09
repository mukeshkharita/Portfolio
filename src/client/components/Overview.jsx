import React from 'react'
import localStyles from './Overview.css'

const Overview = () => 
	<div className={localStyles.container}>
		<div className={localStyles.imageContainer}>
			<img src="/img/bg.jpg" />
		</div>
		<div className={localStyles.nameContainer}>
			<span className={localStyles.name}>Mukesh Kumar Kharita</span>
		</div>
		<div className={localStyles.positionContainer}>
			<span className={localStyles.position}>Computer Science & Engineering Student</span>
		</div>
		<div className={localStyles.linkContainer}>
			<a href="https://github.com/mukeshkharita" target="_blank">
				<i className="fa fa-github"></i>
			</a>
			<a href="https://www.facebook.com/mukeshnithcse" target="_blank">
				<i className="fa fa-facebook"></i>
			</a>
			<a href="https://www.linkedin.com/in/kharita" target="_blank">
				<i className="fa fa-linkedin"></i>
			</a>
			<a href="https://twitter.com/kharita_kumar" target="_blank">
				<i className="fa fa-twitter"></i>
			</a>
			<a href="https://plus.google.com/u/0/102856982894232515740" target="_blank">
				<i className="fa fa-google-plus"></i>
			</a>
		</div>
	</div>

export default Overview