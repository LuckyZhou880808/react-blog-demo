import { DO_LOGIN, DO_LOGOUT } from '../constants/AppConstants';
import endpoints from '../configs/endpoints';
import { doPost } from '../utils/fetchUtils';

export function doLogin(loginName, loginPassword, router) {
    return (dispatch) => {
        doPost({
            url: endpoints.login
        })
        .then((data) => {
            // Request success, dispatch the response data
            localStorage.token = 'test_admin';
            dispatch({ type: `${DO_LOGIN}_SUCCESS` });
            router.replace('/home');
        })
        .catch((err) => {
            // Request failure, dispatch the error
            dispatch({ type: `${DO_LOGIN}_FAILURE` });
        });
    };
}

export function doLogout(router) {
    return (dispatch) => {
        doPost({
            url: endpoints.logout
        })
        .then((data) => {
            // Request success, dispatch the response data
            delete localStorage.token;
            dispatch({ type: `${DO_LOGOUT}_SUCCESS` });
            router.replace('/');
        })
        .catch((err) => {
            // Request failure, dispatch the error
            dispatch({ type: `${DO_LOGOUT}_FAILURE` });
        });
    };
}
