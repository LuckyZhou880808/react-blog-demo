// Auth Base
const authSecBasePath = 'https://127.0.0.1:8443';

// Resource Base
// Blog resource
const blogResources = 'http://127.0.0.1:9000/api/v1/blog';

// Other resource......
// const otherBasePath = 'http://127.0.0.1:8080';

if (process.env.NODE_ENV === 'production') {
    // Auth Base
    const authSecBasePath = 'https://dropwizard-user-service.herokuapp.com/';

    // Resource Base
    // Blog resource
    const blogResources = 'http://dropwizard-myblog.herokuapp.com/api/v1/blog';

    // Other resource......
    // const otherBasePath = 'http://127.0.0.1:8080';
}

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
