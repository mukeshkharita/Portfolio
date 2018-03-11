import React from 'react'
import { Row } from 'react-bootstrap'

import localStyles from './Responsibities.css'
import Responsibility from './Responsibility'

const Responsibities = () =>
	<div className={localStyles.responsibitiesContainer}>
		<div className={localStyles.responsibitityText}>
			Positions of Responsibility
		</div>
		<Row>
			<Responsibility
				heading={'WEB/APP TEAM SECRETARY'}
				desc={'Secretary of the Web/App/Registation team responsible for creating the websites/Mobile App for the fests(Cultural & Techincal) of NITH.'}
			/>
			<Responsibility
				heading={'CO-ORDINATOR AT PIXONOIDS'}
				desc={'Part of the Web team responsible for creating the websites of the fests of NITH.'}
			/>
			<Responsibility
				heading={'VOLUNTEER AT GLUG-NITH'}
				desc={'Organised various events promoting open source software and software freedom day celebration.'}
			/>
		</Row>
	</div>

export default Responsibities