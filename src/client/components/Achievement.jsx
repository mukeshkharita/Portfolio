import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

import localStyles from './Milestone.css'

const Achievement =({icon, name}) =>
	<Col sm={6} xs={12} md={2} className={localStyles.achievementContainer}>
		<div className={localStyles.achievement}>
			<i className={"fa fa-" + icon}></i>
		</div>
		<div className={localStyles.name}>
			{name}
		</div>
	</Col>

Achievement.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

export default Achievement