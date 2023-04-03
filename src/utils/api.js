import axios from 'axios';
const API = {

    readAll: async (path) => {
        try {
            const token = localStorage.getItem("accessToken");
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const response = await authAxios.get(`${process.env.REACT_APP_BASE_URL}${path}`)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    

    read: async (path, id) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.get(`${process.env.REACT_APP_BASE_URL}${path}/${id}`)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    create: async (path, data) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.post(`${process.env.REACT_APP_BASE_URL}${path}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    update: async (path, data, id) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.post(`${process.env.REACT_APP_BASE_URL}${path}/${id}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    delete: async (path, data) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.delete(`${process.env.REACT_APP_BASE_URL}${path}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },

}



export default API;