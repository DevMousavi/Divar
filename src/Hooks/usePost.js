import { api } from "../services/Config";

// A function to send requests with the "GET" method
const usePostData = async (url, data) => {
    try {
        const request = api.post(url, data);
        return request;
    } catch (error) {
        return error;
    }
};

export { usePostData };
