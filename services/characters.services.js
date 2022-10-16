import API from './baseApi';
const url_module = '/characters'

const CharactersServices = {
    /**
     * 
     * @param {*} params 
     * @returns 
     */
    get: async (params) => {
        const response = await API.get(url_module, params);
        return response;
    },
};
export default CharactersServices;
