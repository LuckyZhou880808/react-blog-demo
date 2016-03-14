const actionBlockMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    // Here check the action status, if this action is in progress, block the action.
    return next(action);
};

export default actionBlockMiddleware;
