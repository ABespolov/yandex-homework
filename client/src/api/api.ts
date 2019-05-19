import axios from "axios";

export const uniFetchApi = async (url: string, data: string = "", payload?: {}) => {
    if (payload) {
        const response = await axios.post(url + data, payload);
        return response.data;
    }
    const response = await axios.get(url + data);
    return response.data;
};
