import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import localStyles from './Resume.css'

const Resume = () =>
	<div className={localStyles.resumeContainer} id="resume">
		<div className={localStyles.resume}>
			Resume
		</div>
		<div className={localStyles.seperator}/>
		<div className={localStyles.experienceText}>
			Experiences
		</div>
		<Row>
			<Col sm={5} className={localStyles.expLeft} xs={12}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.openSource}>
						<div className={localStyles.heading}>
							Open Source Contributor
						</div>
						<div className={localStyles.duration}>
							WorldBrain - August 2017 - Present
						</div>
						<div className={localStyles.content}>
							Working as a Full Stack JS Developer for the WorldBrain. Added multiple features bookmark/ unbookmark, 
							Tagging the web pages, Filter by domains and tags. Updated the UI for the extension. Worked on 
							adding the filters and bug fixes to release the WorldBrain beta.
						</div>
					</Row>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.internBackend}>
						<div className={localStyles.heading}>
							Software Developer Intern
						</div>
						<div className={localStyles.duration}>
							Health Drive - January 2017 - April 2017
						</div>
						<div className={localStyles.content}>
							Worked on the backend for an android app to provide server-side authentication, profile etc.
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
			<Col sm={2} xsHidden>
				<ul className={localStyles.lineUl}>
					<ScrollAnimation animateIn="fadeIn">
						<li>
							<i className="fa fa-folder-open"></i>
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
				</ul>
			</Col>
			<Col sm={5} xs={12} className={localStyles.expRight}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.intern}>
						<div className={localStyles.heading}>
							Software Developer Intern
						</div>
						<div className={localStyles.duration}>
							Cogoport - May 2017 - July 2017
						</div>
						<div className={localStyles.content}>
							Worked as a full stack developer, added multiple new features such as notifications, 
							profiles, tracking, user preferences settings etc., solved many concurrency issues.
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
		</Row>
		<div className={localStyles.experienceText}>
			Education
		</div>
		<Row>
			<Col md={5} xs={12} className={localStyles.expLeft}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.senior}>
						<div className={localStyles.heading}>
							Class XII
						</div>
						<div className={localStyles.duration}>
							K.D.S.P. Sr. Sec. Sechool - July 2012 - May 2014
						</div>
						<div className={localStyles.content}>
							Percentage: 80.6
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
			<Col md={2} xsHidden>
				<ul className={localStyles.lineUl}>
					<ScrollAnimation animateIn="fadeIn">
						<li>
							<i className="fa fa-book"></i>
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.noIcon}>
							<div />
						</li>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<li className={localStyles.lastChild}>
							<i className="fa fa-bookmark"></i>
						</li>
					</ScrollAnimation>
				</ul>
			</Col>
			<Col md={5} xs={12} className={localStyles.expRight}>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.college}>
						<div className={localStyles.heading}>
							B.Tech + M.Tech Dual Degree in Computer Science & Engneering
						</div>
						<div className={localStyles.duration}>
							National Institute of Technology Hamirpur - July 2014 - May 2019
						</div>
						<div className={localStyles.content}>
							Currently in the 8th Semester
							CGPI: 8.78/10
						</div>
					</Row>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Row className={localStyles.metric}>
						<div className={localStyles.heading}>
							Class X
						</div>
						<div className={localStyles.duration}>
							K.D.S.P. Sr. Sec. Sechool - July 2010 - May 2012
						</div>
						<div className={localStyles.content}>
							Percentage: 86
						</div>
					</Row>
				</ScrollAnimation>
			</Col>
		</Row>
	</div>

export default Resume