import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { doLogout } from 'js/actions/AppAction';
import styles from './nav.sass';

/**
 * Nav.
 */
@connect(
    (state) => {
        return {
            appReducer: state.appReducer
        };
    }
)
export default class Nav extends React.Component {
    constructor() {
        super();
        this._logout = this._logout.bind(this);
    }

    static propTypes = {
        appReducer: PropTypes.object,
        appName: PropTypes.string,
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
        const { appReducer } = this.props;

        return (
            <nav className={styles.navContainer}>
                <h1>{ appReducer.appName }</h1>
                <ul className={styles.middleNav}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/list'>List</Link></li>
                    <li><Link to='/create'>Create</Link></li>
                    <li><Link to='/settings'>Settings</Link></li>
                </ul>
                <ul>
                    <li><a href="http://webscan.360.cn/index/checkwebsite/url/react-blog-demo.herokuapp.com"><img border="0" src="http://img.webscan.360.cn/status/pai/hash/ce19bee93eea1a853a8f0f4023b13de0"/></a></li>
                    <li><a href='#' onClick={this._logout}>Logout</a></li>
                </ul>
            </nav>
        );
    }
}
