import React from 'react'; //eslint-disable-line no-unused-vars
import { Route, IndexRoute } from 'react-router';
import { requireAuth } from '../utils/auth';
import { App, NotFoundPage, LoginPage, IndexPage } from '../pages';
import { HomePage, AuthPage } from '../pages/authPages';

/**
 * Specifies the routes of the application. Maps the URL paths with Views.
 */
const routes = (
    <Route component={App}>
        <IndexRoute component={IndexPage} />
        <Route path='/' component={IndexPage} />
        <Route path='/login' component={LoginPage} />

        <Route onEnter={requireAuth} component={AuthPage}>
            <IndexRoute component={HomePage} />
            <Route path='/home' component={HomePage} />
        </Route>

        <Route path='*' component={NotFoundPage} />
    </Route>
);

export default routes;
