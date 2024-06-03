import axios from "axios";
import { getCookies } from "../Utils/getCookies";
import { setCookies } from "../Utils/setCookies";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        // Set the "accessToken" in the "Header" if it exists in the cookies
        const accessToken = getCookies("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// If the "accessToken" is not available, the request will fail.
// Here we catch the error and proceed to get a new access token.
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 409 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            // Check if the "refreshToken" exists
            const refreshToken = getCookies("refreshToken");
            // Retrieve a new access token if the "refreshToken" exists
            if (refreshToken) {
                try {
                    const response = await axios.post(
                        `${import.meta.env.VITE_BASE_URL}/auth/refresh-token`,
                        { refreshToken: String(refreshToken) }
                    );
                    // Set the "accessToken" in the cookies for subsequent requests
                    if (response.status === 200 || response.status === 201) {
                        const newAccessToken = response.data.newAccessToken;
                        setCookies("accessToken", newAccessToken);
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            // Resend the user's request
            return api(originalRequest);
        }

        return Promise.reject(error);
    }
);

export { api };
