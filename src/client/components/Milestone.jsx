import React from 'react'
import { Row } from 'react-bootstrap'

import localStyles from './Milestone.css'
import Achievement from './Achievement'

const Milestone = () =>
	<div className={localStyles.mileStoneContainer} id="achievements">
		<div className={localStyles.milestone}>
			Milestone Achieved
		</div>
		<Row className={localStyles.achRow}>
			<Achievement
				icon="google"
				name="Google Summer of Code 2018"
			/>
			<Achievement
				icon="code"
				name="Code Swap Runner up"
			/>
			<Achievement
				icon="trophy"
				name="Hackathon Runner up"
			/>
			<Achievement
				icon="code"
				name="51 Rank in September Long Challenge"
			/>
			<Achievement
				icon="code"
				name="3rd Rank in hackerearth Challenge"
			/>
			<Achievement
				icon="code"
				name="125+ Question solved on Hackerearth"
			/>
			<Achievement
				icon="code"
				name="75+ Questions solved on Spoj"
			/>
		</Row>
	</div>

export default Milestone