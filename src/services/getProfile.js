import { api } from "./Config.js";

const getProfile = async () => {
    try {
        const request = await api.get("/users/get-me");
        return request.data;
    } catch (error) {
        throw error;
    }
};

export { getProfile };
