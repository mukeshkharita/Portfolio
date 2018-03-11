import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

import localStyles from './Contacts.css'

const Contact = ({type, icon, line1, line2}) =>
	<Col md={4} sm={6} xs={12}>
		<Row>
			<div className={localStyles.container}>
				<Col md={4}>
					<div className={localStyles.addIcon}>
						<i className={"fa fa-" + icon}></i>
					</div>
				</Col>
				<Col md={8} className={localStyles.addressContainer}>
					<div className={localStyles.address}>
						{type}
					</div>
					<div className={localStyles.line1}>
						{line1}
					</div>
					<div className={localStyles.line2}>
						{line2}
					</div>
				</Col>
			</div>
		</Row>	
	</Col>

Contact.propTypes = {
	type: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	line1: PropTypes.string.isRequired,
	line2: PropTypes.string.isRequired,
}

export default Contact