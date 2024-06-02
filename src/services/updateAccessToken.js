import { api } from "./Config";

const updateAccessToken = async (refreshToken) => {
    try {
        const request = await api.post("/auth/refresh-token", {
            refreshToken: refreshToken,
        });
        if (request.status === 200 || request.status === 201) {
            return request.data.newAccessToken;
        }
    } catch (error) {
        console.log({ "Error for catch updateAccessToken": error });
        return error;
    }
    return null;
};

export { updateAccessToken };
