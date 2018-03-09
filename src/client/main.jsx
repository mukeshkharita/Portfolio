import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import configureStore from './store'
import MainContainer from '../client'
import PageNotFound from './components/PageNotFound'

// Include development tools if we are not building for production
let ReduxDevTools = undefined
if (process.env.NODE_ENV !== 'production') {
    ReduxDevTools = require('./dev/redux-devtools').default
}

// Set up the Redux store
const store = configureStore({ReduxDevTools})

const Container = MainContainer.container

// Render the UI to the screen
ReactDOM.render(
    <Provider store={store}>
    	<HashRouter>
    		<div className="main">
                {ReduxDevTools && <ReduxDevTools />}
				<Switch>
					<Route exact path="/" component={Container} />
					<Route path="/about" component={Container} />
					<Route path="/events" component={Container} />
					<Route path="/products" component={Container} />
					<Route path="/contact" component={Container} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
    	</HashRouter>
    </Provider>,
    document.getElementById('app')
)

/*
<div>
            <overview.components.Overview grabFocusOnMount={true} />
            {ReduxDevTools && <ReduxDevTools />}
        </div>
*/