
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import countReducer from './CountReducer';
import userReducer from '../user_redux/UserReducer';


// export const store = createStore(reducer,applyMiddleware(logger))

// export const store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)))

// export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)))


const rootReducer = combineReducers({
  count: countReducer,
  users: userReducer,
});

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
