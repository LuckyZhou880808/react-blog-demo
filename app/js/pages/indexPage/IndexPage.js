import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loggedIn } from '../../utils/auth';
import { doLogout } from '../../actions/AppAction';
import styles from './indexPage.sass';

@connect()
export default class IndexPage extends React.Component {
    constructor() {
        super();
        this._logout = this._logout.bind(this);
    }

    static propTypes = {
        dispatch: PropTypes.func
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    _logout(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { router } = this.context;
        dispatch(doLogout(router));
    }

    render() {
        return (
            <div className={styles.indexContainer}>
                <div className={styles.nav}>
                    {
                        !loggedIn() ?
                        <Link to='/login'>Login</Link> :
                        <a href='#' onClick={this._logout}>Logout</a>
                    }
                </div>
                <div className={styles.body}>
                    IndexPage!
                </div>
            </div>
        );
    }
}
