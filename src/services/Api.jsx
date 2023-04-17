import axios from "axios";

export const http = {
    get(url) {
        return axios.get(url);
    },
    put(url, body) {
        return axios.put(url, body);
    }
};