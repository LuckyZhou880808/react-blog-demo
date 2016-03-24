import { authSecBasePath, blogResources } from './resources';

const endpoints = {
    // Auth
    login: `${authSecBasePath}/login`,
    logout: `${authSecBasePath}/logout`,

    // Resource
    // Blog resources
    blog: (id) => { return `${blogResources}/${id}`; }, // 0 is create.
    listBlog: `${blogResources}`

    // Other resource......
};

export default endpoints;
