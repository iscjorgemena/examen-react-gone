import API from './baseApi';
const url_module = '/characters'

const CharactersServices = {
    /**
     * 
     * @param {*} params 
     * @returns 
     */
    get: async (params) => {
        const response = await API.get(url_module, { params: params });
        return response;
    },

    save: async (data) => {
        const response = await API.post(url_module, data);
        return response;
    },
};
export default CharactersServices;
