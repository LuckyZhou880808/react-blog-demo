import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { routes } from './configs';

const middlewares = [thunk];
const store = applyMiddleware(...middlewares)(createStore)(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

// Using analytics
// history.listen(location => analyticsService.track(location.pathname))

if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
        const nextRootReducer = require('./reducers/rootReducer').default;
        store.replaceReducer(nextRootReducer);
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('rootApp')
);
