/**
 * Do not edit state directly, use follow method.
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * Add reducer to rootReducer
*/

import assignToEmpty from '../utils/assign';
import { DO_LOGIN, DO_LOGOUT } from '../constants/AppConstants';

const initialState = {
    appName: 'appName',
    loggedIn: false
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case `${DO_LOGIN}_SUCCESS`:
            return assignToEmpty(state, {
                loggedIn: true
            });
        case `${DO_LOGOUT}_SUCCESS`:
            return assignToEmpty(state, {
                loggedIn: false
            });
        default:
            return state;
    }
}

export default appReducer;
