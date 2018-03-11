import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions'
import * as selectors from './selectors'
import About from './components/About'
import Copyright from './components/Copyright'
import Contacts from './components/Contacts'
import Milestone from './components/Milestone'
import Overview from './components/Overview'
import PageHeader from './components/PageHeader'
import Projects from './components/Projects'
import Responsibities from './components/Responsibities'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Wrapper from './components/Wrapper'

class MainContainer extends Component {
	static propTypes = {

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<Wrapper>
				<PageHeader />
				<Overview />
				<About />
				<Resume />
				<Milestone />
				<Skills />
				<Projects />
				<Responsibities />
				<Contacts />
				<Copyright />
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
        {},
        dispatch,
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)