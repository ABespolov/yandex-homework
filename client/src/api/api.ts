import axios from "axios";

export const uniFetchApi = async (url: string, data: string = "") => {
    const response = await axios.get(url + data);
    return response.data;
};
