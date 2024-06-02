import { api } from "./Config";

const getProfile = () => {
    const fetchUserInformation = async () => {
        try {
            const request = await api.get("/users/get-me");
            console.log(request);
        } catch (error) {
            console.log({ "Error for catch getProfile": error });
        }
    };
    fetchUserInformation();
};

export { getProfile };
