import { api } from "../services/Config";

// A function to send requests with the "GET" method
const usePostData = async (url) => {
    try {
        const request = api.get(url);
        return request;
    } catch (error) {
        return error;
    }
};

export { usePostData };
