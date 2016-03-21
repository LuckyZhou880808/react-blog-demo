/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import appReducer from './appReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({ appReducer, blogReducer, routing: routerReducer });
export default rootReducer;
