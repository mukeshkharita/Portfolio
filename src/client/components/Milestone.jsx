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
				icon="trophy"
				name="Achievement"
			/>
			<Achievement
				icon="trophy"
				name="Achievement"
			/>
			<Achievement
				icon="trophy"
				name="Achievement"
			/>
			<Achievement
				icon="trophy"
				name="Achievement"
			/>
			<Achievement
				icon="trophy"
				name="Achievement"
			/>
			<Achievement
				icon="trophy"
				name="Achievement"
			/>
		</Row>
	</div>

export default Milestone