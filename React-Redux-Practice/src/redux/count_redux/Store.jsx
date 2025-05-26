import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger'

// import thunkMiddleware from 'redux-thunk';

import reducer from './CountReducer.jsx'

// import reducer from '../user_redux/UserReducer';


// export const store = createStore(reducer,applyMiddleware(logger))

export const store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)))

// export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)))


