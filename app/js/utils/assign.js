// Polyfill maybe needed for browser support
const assign = Object.assign || require('object.assign');
const assignToEmpty = (oldObject, newObject) => {
    return assign({}, oldObject, newObject);
};

export default assignToEmpty;
