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
