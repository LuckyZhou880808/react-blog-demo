import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getBlog } from 'js/actions/BlogAction';
import styles from './blogDetailPage.sass';

/**
 * Home Page.
 *
 * Rendered when the Route matches /home
 */
@connect(
    (state) => {
        return {
            blogReducer: state.blogReducer
        };
    }
)
export default class BlogDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { routeParams, dispatch } = this.props;
        dispatch(getBlog(routeParams.id));
    }

    render() {
        const { blogReducer } = this.props;
        const currentBlog = blogReducer.currentBlog || {};

        return (
            <div className={styles.blogDetailContainer}>
                <h3>{ currentBlog.title }</h3>
                <p>{ currentBlog.content }</p>
            </div>
        );
    }
}

BlogDetailPage.propTypes = {
    dispatch: PropTypes.func,
    blogReducer: PropTypes.object,
    routeParams: PropTypes.object
};
