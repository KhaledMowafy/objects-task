import axios from 'axios';
const API = {

    readAll: async (path) => {
        try {
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                }
            })
            const response = await authAxios.get(`${path}`)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    

    read: async (path, id) => {
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
            }
        })

        try {
            const response = await authAxios.get(`${path}/${id}`)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    create: async (path, data) => {
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
            }
        })

        try {
            const response = await authAxios.post(`${path}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    update: async (path, data, id) => {
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
            }
        })

        try {
            const response = await authAxios.post(`${path}/${id}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    delete: async (path, data) => {
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
            }
        })

        try {
            const response = await authAxios.delete(`${path}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },

}



export default API;