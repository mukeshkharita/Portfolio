import React from 'react'

import localStyles from './About.css'

const About = () =>
	<div className={localStyles.aboutContainer} id="about">
		<div className={localStyles.me}>
			About Me
		</div>
		<div className={localStyles.seperator}/>
		<div className={localStyles.content}>
			<div className={localStyles.aboutContent}>
				My name is Mukesh Kumar Kharita. I am B.Tech + M.Tech Dual Degree in Computer Science & Engineering Student of
				National Institute of Technology, Hamirpur Himachal Pardesh. I love to write the code. I listen Music.
			</div>
		</div>
	</div>

export default About