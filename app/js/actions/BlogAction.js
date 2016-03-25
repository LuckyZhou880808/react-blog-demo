// import { DO_CREATE_BLOG } from '../constants/BlogConstants';
import { doPost, doGet } from 'js/utils/fetchUtils';
import { blog, listBlog } from 'js/configs/endpoints';
import { GET_BLOG_LIST, GET_BLOG } from 'js/constants/BlogConstants';

export function doCreateBlog(blogData, router) {
    doPost({ url: blog(0), body: JSON.stringify(blogData) })
        .then((data) => {
            router.replace('/detail/:id'.replace(':id', data.id));
        })
        .catch((err) => {
            console.log(err);
            router.replace('/list');
        });
}

export function getBlog(blogId) {
    return (dispatch) => {
        doGet({ url: blog(blogId) })
        .then((data) => {
            console.log(data);
            dispatch({ type: `${GET_BLOG}_SUCCESS`, data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: `${GET_BLOG}_FAILURE`, data: err });
        });
    };
}

export function getBlogList() {
    return (dispatch) => {
        doGet({ url: listBlog })
            .then((data) => {
                dispatch({ type: `${GET_BLOG_LIST}_SUCCESS`, data });
            })
            .catch((err) => {
                dispatch({ type: `${GET_BLOG_LIST}_FAILURE`, data: err });
            });
    };
}
