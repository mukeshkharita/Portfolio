import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions'
import * as selectors from './selectors'
import About from './components/About'
import PageHeader from './components/PageHeader'
import Overview from './components/Overview'
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