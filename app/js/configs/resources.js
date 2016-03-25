// Auth Base
let authSecBasePath = 'https://127.0.0.1:8443';

// Resource Base
// Blog resource
let blogResources = 'http://127.0.0.1:9000/api/v1/blog';

// Other resource......
// const otherBasePath = 'http://127.0.0.1:8080';

if (process.env.NODE_ENV === 'production') {
    // Auth Base
    authSecBasePath = 'https://dropwizard-user-service.herokuapp.com/';

    // Resource Base
    // Blog resource
    blogResources = 'http://dropwizard-myblog.herokuapp.com/api/v1/blog';

    // Other resource......
    // const otherBasePath = 'http://127.0.0.1:8080';
}

export {
    authSecBasePath,
    blogResources
};
