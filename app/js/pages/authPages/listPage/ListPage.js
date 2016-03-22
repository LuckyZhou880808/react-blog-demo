import React from 'react';
import { connect } from 'react-redux';
import styles from './listPage.sass';

/**
 * Home Page.
 *
 * Rendered when the Route matches /home
 */
@connect()
export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.listPageContainer}>
                Blog list Page here! (Test)!
            </div>
        );
    }
}
