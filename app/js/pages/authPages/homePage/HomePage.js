import React from 'react';
import { connect } from 'react-redux';
import styles from './homePage.sass';

/**
 * Home Page.
 *
 * Rendered when the Route matches /home
 */
@connect()
export default class HomePage extends React.Component {

    render() {
        return (
            <div className={styles.homeContainer}>
                Home Page! (Updated 2)!
            </div>
        );
    }
}
