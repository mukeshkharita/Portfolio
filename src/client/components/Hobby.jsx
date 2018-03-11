import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

import localStyles from './About.css'

const Hobby = ({name, icon}) =>
	<Col sm={6} xs={12} md={3} className={localStyles.hobbyContainer}>
		<div className={localStyles.hobby}>
			<i className={"fa fa-" + icon}></i>
			<div className={localStyles.name}>{name}</div>
		</div>
	</Col>

Hobby.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

export default Hobby