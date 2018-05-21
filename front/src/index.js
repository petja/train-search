// Define regenerator-runtime globally
require('regenerator-runtime/runtime')

import React from 'react'
import { render } from 'react-dom'

// Own utils
import store from './store'

// Redux & Routing
import history from './history'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'

// Action creators
import { GET_SEARCH_RESULTS } from './actions/SearchActions'

// Own components
//import MainLayout from './containers/MainLayout.jsx'

//import { ThemeProvider } from './themes/DefaultTheme'

//store.dispatch(GET_SEARCH_RESULTS())

import SearchForm from './components/SearchForm'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={SearchForm} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,

    document.getElementById('root')
)
