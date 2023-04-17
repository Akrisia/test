import { http } from "./Api";

const BASE_URL = 'https://643a731890cd4ba563f9a53b.mockapi.io/api/v1/';

export default function getUsers (page = 1, limit = 8) {
    return http.get(`${BASE_URL}users?p=${page}&l=${limit}`);
};