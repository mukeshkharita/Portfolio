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
				percentage={85}
				name={"JavaScript (React)"}
			/>
			<Skill
				percentage={85}
				name={"HTML5/CSS3"}
			/>
			<Skill
				percentage={80}
				name={"TypeScript"}
			/>
			<Skill
				percentage={75}
				name={"Node.js (Express)"}
			/>
			<Skill
				percentage={50}
				name={"C"}
			/>
			<Skill
				percentage={50}
				name={"C++"}
			/>
			<Skill
				percentage={50}
				name={"Pyton (Flask)"}
			/>
			<Skill
				percentage={50}
				name={"PHP (CodeIgniter)"}
			/>
		</Row>
	</div>

export default Skills