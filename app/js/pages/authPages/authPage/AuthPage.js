import React, { PropTypes } from 'react';
import { Nav } from '../../components';
import { connect } from 'react-redux';
import styles from './authPage.sass';

/**
 * Home Page.
 *
 * Rendered when the Route matches /home
 */
@connect()
export default class AuthPage extends React.Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        const { children } = this.props;

        return (
            <div className={styles.authContainer}>
                <Nav />
                <div className={styles.content}>
                    <div>{ children }</div>
                </div>
            </div>
        );
    }
}
