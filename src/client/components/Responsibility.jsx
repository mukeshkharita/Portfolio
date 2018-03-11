import React from 'react'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

import localStyles from './Responsibities.css'

const Responsibility = ({heading, desc}) =>
	<Col>
		<div className={localStyles.heading}>
			{heading + ": "}
			<span>
				{desc}
			</span>
		</div>
	</Col>

Responsibility.propTypes = {
	heading: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired
}

export default Responsibility