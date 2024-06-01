const { default: axios } = require("axios");

const api = axios.create({ baseURL: import.meta.VITE_BASE_URL });

export { api };
