import axios from "axios";

export const instance = axios.create({
    baseURL : "http://localhost:8080/api/v1",
    withCredentials : true // 이거 해야 세션 사용 가능
});