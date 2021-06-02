import axios from "axios";
// import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

// export const base = process.env.VUE_APP_API_BASE_URL;
//
// class Api {
//     constructor(config?: AxiosRequestConfig) {
//         const that = this;
//         if (!config) {
//             config = {
//                 headers: {
//                     'Cache-Control': 'no-cache'
//                 }
//             };
//         }
//         const instance = axios.create(config);
//         instance.defaults.baseURL = base;
//
//
//         return instance;
//     }
// }
//
// const api = (new Api() as AxiosInstance);
// export default api;

export default class Api {
    static getBaseUrl(): string {
        // return process.env.VUE_APP_API_BASE_URL;
        return 'http://freeday.local/api/';
    }

    public static get(endpoint: string, params?: object) {

        const axiosNew = axios.create({
            baseURL: this.getBaseUrl()
        })

        return axiosNew.post(endpoint, params)
    }
}