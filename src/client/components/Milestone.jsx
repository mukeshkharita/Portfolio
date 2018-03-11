import React from 'react'
import { Row } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import localStyles from './Milestone.css'
import Achievement from './Achievement'

const Milestone = () =>
	<div className={localStyles.mileStoneContainer}>
		<div className={localStyles.milestone}>
			Milestone Achieved
		</div>
		<Row className={localStyles.achRow}>
			<ScrollAnimation animateIn="bounceInLeft">
				<Achievement
					icon="trophy"
					name="Achievement"
				/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="bounceInLeft">
				<Achievement
					icon="trophy"
					name="Achievement"
				/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="bounceInLeft">
				<Achievement
					icon="trophy"
					name="Achievement"
				/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="bounceInRight">
				<Achievement
					icon="trophy"
					name="Achievement"
				/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="bounceInRight">
				<Achievement
					icon="trophy"
					name="Achievement"
				/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="bounceInRight">
				<Achievement
					icon="trophy"
					name="Achievement"
				/>
			</ScrollAnimation>
		</Row>
	</div>

export default Milestone