import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../../actions/AppAction';
import styles from './loginPage.sass';

/**
 * LoginPage.
 *
 * Rendered when the Route matches /home
 */
@connect(
    (state) => {
        return {
            appReducer: state.appReducer
        };
    }
)
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    handleSubmit(e) {
        e.preventDefault();
        const { loginName, loginPassword } = this.refs;
        const { dispatch } = this.props;
        dispatch(doLogin(loginName.value, loginPassword.value, this.context.router));
    }

    render() {
        return (
            <div className={styles.loginContainer}>
                <div className={styles.loginDv}>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Login Page</h2>
                        <p>UserName: <input ref='loginName' type='text' /></p>
                        <p>Password: <input ref='loginPassword' type='password' /></p>
                        <input type='submit' value='submit' />
                    </form>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    appReducer: PropTypes.object,
    dispatch: PropTypes.func
};
