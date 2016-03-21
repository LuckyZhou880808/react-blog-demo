// import { DO_CREATE_BLOG } from '../constants/BlogConstants';
import { doPost } from '../utils/fetchUtils';
import { blog } from '../configs/endpoints';

export function doCreateBlog(blogData, router) {
    doPost({ url: blog(0), body: JSON.stringify(blogData) })
    .then((data) => {
        console.log(data);
        router.replace('/detail/:id'.replace(':id', data.id));
    })
    .catch((err) => {
        console.log(err);
    });
}
