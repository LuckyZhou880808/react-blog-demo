import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './createPage.sass';
import { doCreateBlog } from '../../../actions/BlogAction';

/**
 * Home Page.
 *
 * Rendered when the Route matches /home
 */
@connect()
export default class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, content } = this.refs;
        doCreateBlog({ title: title.value, content: content.value }, this.context.router);
    }

    render() {
        return (
            <div className={styles.createPageContainer}>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        Title:
                        <input type='text' ref='title' />
                    </p>
                    <p>Content:</p>
                    <textarea ref='content'></textarea>
                    <br />
                    <input type='submit' value='Save' />
                </form>
            </div>
        );
    }
}

CreatePage.propTypes = {
    dispatch: PropTypes.func
};
