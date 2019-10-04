import axios from "axios";
import AlertsToasts from 'views/components/custom/Messages/AlertsToasts/AlertsToasts';

const API_SSL = process.env.REACT_APP_API_PROTOCOL;
const API_HOST = process.env.REACT_APP_API_HOST;

/**
 * Create the URL
 * @param {*} allowTenantCheck 
 */
const mountApiUrl = () => {   
    return API_SSL + "://" + API_HOST;
}

/**
 * Default api type
 */
const api = axios.create({
    baseURL: mountApiUrl()
});

/**
 * Interceptor REQUESTS
 */
api.interceptors.request.use(async config => {
    //do something: tokens ctrl or set other headers parameters
}, error => {
    AlertsToasts.showError('Ops!');
});

/**
 * Interceptor RESPONSES
 * This interceptor dont try to refresh token before send
 */
api.interceptors.response.use((response) => {
    return response;
}, error => {
    AlertsToasts.showError('Ops!');
    throw error;
});

export default api;