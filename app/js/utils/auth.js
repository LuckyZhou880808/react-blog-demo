
export function requireAuth(nextState, replace) {
    const token = localStorage.token;
    if (!token) {
        replace('/login');
    }
}

export function loggedInAuth(nextState, replace) {
    const token = localStorage.token;
    if (!token) {
        replace('/login');
    } else {
        replace('/home');
    }
}

export function loggedIn() {
    const token = localStorage.token;
    return !!token;
}
