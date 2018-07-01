import React from 'react'
import PropTypes from 'prop-types'
import { Col, Thumbnail } from 'react-bootstrap'

import localStyles from './Projects.css'

const Project = ({image, name, link}) =>
	<Col sm={4} xs={12}>
		<div className={localStyles.projectContainer}>
			<Thumbnail href={link? link: '#'} alt="171x180" src={"/img/"+ image} target="_blank">
				{name}
			</Thumbnail>
		</div>
	</Col>

Project.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	link: PropTypes.string,
}

export default Project