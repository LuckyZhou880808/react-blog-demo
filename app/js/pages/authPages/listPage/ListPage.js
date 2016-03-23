import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getBlogList } from 'js/actions/BlogAction';
import { map } from 'lodash';
import styles from './listPage.sass';


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
export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getBlogList());
    }

    renderList() {
        const { blogReducer } = this.props;
        const blogList = blogReducer.blogList || [];

        return map(blogList, (blog) => {
            return (
                <li key={blog.id}>
                    <Link to={`/detail/${blog.id}`}>{blog.id}.{blog.title}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div className={styles.listPageContainer}>
                Blog list Page here!
                <ul>
                    { this.renderList() }
                </ul>
            </div>
        );
    }
    
}

ListPage.propTypes = {
    dispatch: PropTypes.func
};