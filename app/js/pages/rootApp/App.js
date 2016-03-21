/* eslint-disable no-unused-vars */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../../utils/auth';
import globalStyles from '../../../css/main.sass';
import styles from './app.sass';

/**
 *
 * The whole app defination
 *
 */
@connect(
    (state) => {
        return {};
    },
    (dispatch) => {
        return {};
    }
)
export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        // Verify user whether login
    }

    render() {
        const { children } = this.props;

        return (
            <div className={styles.currentApp}>
                <div styleName={styles.container}>
                    { children }
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node
};
