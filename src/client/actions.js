import { createAction } from 'redux-act'

import { ourState } from './selectors'


// == Simple commands to change the state in reducers ==

export const setQuery = createAction('overview/setQuery')
export const setResults = createAction('overview/setResults')


// Initialisation
export const init = () => (dispatch, getState) => {
    
}