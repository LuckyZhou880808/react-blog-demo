// import { DO_CREATE_BLOG } from '../constants/BlogConstants';
import { doPost, doGet } from 'js/utils/fetchUtils';
import { blog, listBlog } from 'js/configs/endpoints';
import { GET_BLOG_LIST } from 'js/constants/BlogConstants';

export function doCreateBlog(blogData, router) {
    doPost({ url: blog(0), body: JSON.stringify(blogData) })
        .then((data) => {
            console.log(data);
            router.replace('/detail/:id'.replace(':id', data.id));
        })
        .catch((err) => {
            console.log(err);
            router.replace('/list');
        });
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
