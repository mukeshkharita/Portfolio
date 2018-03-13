import React from 'react'
import { Row } from 'react-bootstrap'

import localStyles from './Projects.css'
import Project from './Project'

const Projects = () =>
	<div className={localStyles.projectsContainer} id="projects">
		<div className={localStyles.projectsText}>
			Projects
		</div>
		<div className={localStyles.sepeartor}/>
		<Row>
			<Project
				image={'Movie.png'}
				name={'Movie Recommender Engine'}
				link={'https://github.com/mukeshkharita/Movie-Recommender-Engine'}
			/>
			<Project
				image={'NIMBUS.png'}
				name={'NIMBUS 2017 Website'}
			/>
			<Project
				image={'Agr.png'}
				name={'Agricultural Andoird App'}
				link={'https://github.com/mukeshkharita/AgriculturalApp'}
			/>
			<Project
				image={'Agr.png'}
				name={'NITH Result Android App'}
				link={'https://github.com/mukeshkharita/NithResultApp'}
			/>
			<Project
				image={'me.png'}
				name={'Portpolio'}
				link={'https://github.com/mukeshkharita/Portpolio'}
			/>
		</Row>
	</div>

export default Projects