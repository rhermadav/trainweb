import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import Cookie from 'js-cookie';
import App from './App'
import reducers from './reducers'
const userInfo = Cookie.getJSON('userInfo') || null;
const initialState = {
    userSignin: { userInfo }
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    initialState,
    composeEnhancers( applyMiddleware(reduxThunk) )
)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.querySelector('#root')
)