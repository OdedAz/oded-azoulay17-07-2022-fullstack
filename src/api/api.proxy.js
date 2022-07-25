import axios from 'axios';

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/`,
    headers: { Accept: 'application/json' },
});
export const extractData = response => response?.data;
export const extractErrorData = error => error?.response?.data;

export const getData = (url, params = {}, headers = {}) =>
    api
        .get(url, { ...headers, params: params })
        .then(extractData, res => extractData(res?.response))
        .catch(extractErrorData);

export const onDelete = api.delete;
console.log({api})
export const postBody = (...args) => api.post.apply(api, args).then(extractData);