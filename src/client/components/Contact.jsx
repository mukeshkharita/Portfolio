import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

import localStyles from './Contacts.css'

const Contact = ({ type, icon, line1, line2, link1, link2 }) =>
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
						{link1 && (
							<a target="_blank" href={"mailto:" + line1}>{line1}</a>
						)}
						{!link1 && line1}
					</div>
					<div className={localStyles.line2}>
						{link2 && (
							<a target="_blank" href={line2}>{line2}</a>
						)}
						{!link2 && line2}
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
	link1: PropTypes.bool,
	link2: PropTypes.bool,
}

export default Contact