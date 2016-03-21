import React from 'react';
import { connect } from 'react-redux';
import styles from './blogDetailPage.sass';

/**
 * Home Page.
 *
 * Rendered when the Route matches /home
 */
@connect()
export default class BlogDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.blogDetailContainer}>
                Blog Detail Page here!
            </div>
        );
    }
}
