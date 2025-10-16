import axios from "axios";
import { API_KEY, BASE_URL } from "./Constances/Constance";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        Authorization:`Bearer ${API_KEY}`

    }
});

export default api;