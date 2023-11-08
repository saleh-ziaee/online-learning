import axios from "axios";
// import {instance} from "eslint-plugin-react/lib/util/lifecycleMethods.js";


const createRequest = (baseURL)=> {
    const instance = axios.create({
        baseURL: baseURL,
        timeout: 15000,
        // headers: {
        //     Authorization:`Bearer ${accessToken}`
        // }
    })

    instance.interceptors.request.use(function (config) {
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`
            // config.headers = {
            //     Authorization:`Bearer ${accessToken}`
            // }
        }
        return config;
    })
    instance.interceptors.response.use(function (response) {
        return response.data
    })
    return instance


}
// const searchApiClient = createRequest("http://demo2578450.mockable.io/")

const apiClient = createRequest(import.meta.env.VITE_API_BASE_URL);

export  {apiClient};