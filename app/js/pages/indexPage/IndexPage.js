import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loggedIn } from 'js/utils/auth';
import { doLogout } from 'js/actions/AppAction';
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
                    <h2>Blog Demo</h2>
                    {
                        !loggedIn() ?
                        <Link to='/login'>Login</Link> :
                        <a href='#' onClick={this._logout}>Logout</a>
                    }
                </div>
                <div className={styles.body}>
                    This is the index page! everythings can be started here!
                </div>
                <footer className={styles.footer}>
                    <a href="http://webscan.360.cn/index/checkwebsite/url/react-blog-demo.herokuapp.com"><img border="0" src="http://img.webscan.360.cn/status/pai/hash/ce19bee93eea1a853a8f0f4023b13de0"/></a>
                </footer>
            </div>
        );
    }
}
