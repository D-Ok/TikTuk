import axios from "axios";
import {GLOBAL_CONSTANTS} from "../constants";

const { API: {HEADERS, URLS}} = GLOBAL_CONSTANTS;
export const options = (url, method = 'GET', headers = {}) => {
    return {
        method,
        url,
        headers: { ... HEADERS, ...headers}
    }
}

export const getTrendingFeed = () => {
    getUserInfo();
    getUserFeed();

    axios.request(options(URLS.TRENDING_FEED)).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export const getUserInfo= (user = 'dave.xp') => {
    axios.request(options(URLS.USER_INFO + user)).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
export const getUserFeed = (user = 'dave.xp') => {
    axios.request(options(URLS.USER_FEED + user)).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
