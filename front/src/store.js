import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import search from './reducers/SearchReducers'
import history from './history'

export default createStore(
    combineReducers({
        search,
        router: routerReducer,
    }),

    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)
