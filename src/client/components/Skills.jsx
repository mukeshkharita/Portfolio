import React from 'react'
import { Row } from 'react-bootstrap'

import localStyles from './Skills.css'
import Skill from './Skill'

const Skills = () =>
	<div className={localStyles.skillsContainer} id="skills">
		<div className={localStyles.skillsText}>
			Skills
		</div>
		<div className={localStyles.seperator}/>
		<Row>
			<Skill
				percentage={80}
				name={"HTML5/CSS3"}
			/>
			<Skill
				percentage={70}
				name={"JavaScript"}
			/>
			<Skill
				percentage={60}
				name={"C"}
			/>
			<Skill
				percentage={50}
				name={"C"}
			/>
			<Skill
				percentage={40}
				name={"C"}
			/>
			<Skill
				percentage={30}
				name={"C"}
			/>
			<Skill
				percentage={20}
				name={"C"}
			/>
			<Skill
				percentage={10}
				name={"C"}
			/>
		</Row>
	</div>

export default Skills