import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

import localStyles from './Skill.css'

class Skill extends PureComponent {
	constructor(props) {
		super()

		this.state = {
			percentage: 0,
		};

		this.start = this.start.bind(this);
		this.clear = this.clear.bind(this);
		this.next = this.next.bind(this);
	}

	componentDidMount() {
		this.start();
	}

	componentWillUnmount() {
		this.clear();
	}

	start() {
		this.clear()
		this.interval = setInterval(this.next, 1);
	}

	clear() {
		clearInterval(this.interval)
	}

	next() {
		if(this.props.percentage > this.state.percentage) {
			this.setState({
				percentage: Math.ceil(this.state.percentage + this.props.percentage/100),
			})
		} else {
			console.log('Hello out of the lopp')
			this.clear()
		}
	}

	render() {
		const { percentage } = this.state
		const sqSize = 150
		const strokeWidth = 5
		const radius = (sqSize - strokeWidth) / 2
		const viewBox = `0 0 ${sqSize} ${sqSize}`
		const dashArray = radius * Math.PI * 2
		const dashOffset = dashArray - dashArray * percentage / 100;

		return (
			<Col sm={3}>
				<div className={localStyles.svgContainer}>
					<svg
						width={sqSize}
						height={sqSize}
						viewBox={viewBox}
					>
						<circle
							className={localStyles.circleBackground}
							cx={sqSize/2}
							cy={sqSize/2}
							r={radius}
							strokeWidth={`${strokeWidth}px`}
						/>
						<circle
							className={localStyles.circleProgress}
							cx={sqSize/2}
							cy={sqSize/2}
							r={radius}
							strokeWidth={`${strokeWidth}px`}
							transform={`rotate(-90 ${sqSize/2} ${sqSize/2})`}
							style={{
								strokeDasharray: dashArray,
								strokeDashoffset: dashOffset,
							}}
						/>
						<text
							className={localStyles.circleText}
							x="50%"
							y="50%"
							dy=".3em"
							textAnchor="middle"
						>
							{percentage}
						</text>
					</svg>
					<div className={localStyles.name}>
						{this.props.name}
					</div>
				</div>
			</Col>
		)
	}
}

Skill.propTypes = {
	percentage: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
}

export default Skill