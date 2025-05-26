
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import reducer from './UserReducer';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunkMiddleware))
);
