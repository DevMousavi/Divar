import axios from "axios";
import { getCookies } from "../Utils/getCookies";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    async (config) => {
        let accessToken = getCookies("accessToken");

        if (!accessToken) {
            const refreshToken = getCookies("refreshToken");

            if (refreshToken) {
                const response = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/auth/refresh-token`,
                    {
                        refreshToken: refreshToken,
                    }
                );
                if (response.status === 200 || response.status === 201) {
                    document.cookie = `accessToken=${response.data.newAccessToken}; max-age=45; path=/`;
                    config.headers.Authorization = `Bearer ${response.data.newAccessToken}`;
                }
            }
        } else if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export { api };
