import { DO_LOGIN, DO_LOGOUT } from 'js/constants/AppConstants';

export function doLogin(loginName, loginPassword, router) {
    if (loginName === 'admin' && loginPassword === 'admin') {
        localStorage.token = 'test_admin';
        router.replace('/home');
        return { type: `${DO_LOGIN}_SUCCESS` };
    }

    return { type: `${DO_LOGIN}_FAILURE` };

    // return (dispatch) => {
    //     doPost({
    //         url: endpoints.login
    //     })
    //     .then((data) => {
    //         // Request success, dispatch the response data
    //         localStorage.token = 'test_admin';
    //         dispatch({ type: `${DO_LOGIN}_SUCCESS` });
    //         router.replace('/home');
    //     })
    //     .catch((err) => {
    //         // Request failure, dispatch the error
    //         dispatch({ type: `${DO_LOGIN}_FAILURE` });
    //     });
    // };
}

export function doLogout(router) {
    delete localStorage.token;
    router.replace('/');
    return { type: `${DO_LOGOUT}_SUCCESS` };

    // return (dispatch) => {
    //     doPost({
    //         url: endpoints.logout
    //     })
    //     .then((data) => {
    //         // Request success, dispatch the response data
    //         delete localStorage.token;
    //         dispatch({ type: `${DO_LOGOUT}_SUCCESS` });
    //         router.replace('/');
    //     })
    //     .catch((err) => {
    //         // Request failure, dispatch the error
    //         dispatch({ type: `${DO_LOGOUT}_FAILURE` });
    //     });
    // };
}
