import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import localStyles from './About.css'
import Hobby from './Hobby'

const About = () =>
	<div className={localStyles.aboutContainer} id="about">
		<div className={localStyles.me}>
			About Me
		</div>
		<div className={localStyles.seperator}/>
		<div className={localStyles.content}>
			<div className={localStyles.aboutContent}>
				My name is Mukesh Kumar Kharita. I am B.Tech + M.Tech Dual Degree in Computer Science & Engineering Student of
				National Institute of Technology, Hamirpur Himachal Pardesh. I love to write the code. I listen Music.
			</div>
			<Row className={localStyles.otherInfo}>
				<Col md={6} sm={12} lg={4} className={localStyles.personalInfo}>
					<ScrollAnimation animateIn="fadeIn">
						<Row>
							<Col xs={4}>
								<b>BirthDate:</b>
							</Col>
							<Col xs={8}>
								20-12-1997
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
								<b>Phone:</b>
							</Col>
							<Col xs={8}>
								+91 9805075215
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
								<b>Email:</b>
							</Col>
							<Col xs={8}>
								<a href="mailto:mukeshnithcse@gmail.com" target="_blank">
									mukeshnithcse@gmail.com
								</a>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
								<b>Website:</b>
							</Col>
							<Col xs={8}>
								<a href="http://mukeshkharita.github.io" target="_blank">
									mukeshkharita.github.io
								</a>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
								<b>Address:</b>
							</Col>
							<Col xs={8}>
								<a href="http://nith.ac.in" target="_blank">
									NIT Hamirpur
								</a>
							</Col>
						</Row>
						<Row className={localStyles.downloadRow}>
							<a className={localStyles.download} href="/pdf/resume.pdf" target="_blank"><i className="fa fa-download"> </i>
								<span className={localStyles.downloadText}>
									Download Resume
								</span>
							</a>
						</Row>
					</ScrollAnimation>
				</Col>
				<Col md={6} sm={12} lg={8} className={localStyles.hobbiesContainer}>
					<ScrollAnimation animateIn="fadeIn">
						<div className={localStyles.hobbies}>HOBBIES & INTERESTS</div>
						<Row>
							<Hobby 
								name="Code"
								icon="code"
							/>
							<Hobby 
								name="Linux"
								icon="linux"
							/>
							<Hobby 
								name="Music"
								icon="music"
							/>
							<Hobby 
								name="Game"
								icon="gamepad"
							/>
							<Hobby 
								name="Tea"
								icon="coffee"
							/>
							<Hobby 
								name="Movie"
								icon="film"
							/>
						</Row>
					</ScrollAnimation>
				</Col>
			</Row>
		</div>
	</div>

export default About