/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-fetch';
import assignToEmpty from './assign';

function doRequest(options = {}) {
    const mergedOptions = assignToEmpty(options, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return fetch(mergedOptions.url, mergedOptions.options)
        .then((response) => {
            if (response.status !== 200) {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }

            return response.json();
        });
}

/*
 *  e.g.
 *  options = {
 *      method: 'post',
 *      headers: {
 *          'Accept': 'application/json',
 *          'Content-Type': 'application/json'
 *      },
 *      // Can be - var data = new FormData(form),
 *      // Also can add file - data.append('file', input.files[0])
 *      body: JSON.stringify{}
 *  }
 */
export function doGet(options = {}) {
    const mergedOptions = assignToEmpty(options, { method: 'get' });
    return doRequest(mergedOptions);
}

export function doPut(options = {}) {
    const mergedOptions = assignToEmpty(options, { method: 'put' });
    return doRequest(options);
}

export function doPost(options = {}) {
    const mergedOptions = assignToEmpty(options, { method: 'post' });
    return doRequest(options);
}

export function doDelete(options = {}) {
    const mergedOptions = assignToEmpty(options, { method: 'delete' });
    return doRequest(options);
}
