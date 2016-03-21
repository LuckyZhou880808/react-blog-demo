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
import { DO_CREATE_BLOG } from '../constants/BlogConstants';

const initialState = {
    blogList: [],
    currentBlog: {}
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case `${DO_CREATE_BLOG}_SUCCESS`:
            return assignToEmpty(state, {
                loggedIn: true
            });
        default:
            return state;
    }
}

export default appReducer;
