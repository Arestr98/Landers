import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'http://localhost:5000/api/'

const responseBody = (response: AxiosResponse) => response.data

axios.interceptors.response.use(response => {
    return response
}, (error: AxiosError) => {
    const { data, status } = error.response as any;
    switch (status) {
        case 400:
            if (data.errors){
                console.log(data.errors)
                const modelStateErrors: string[] = []
                for (const key in data.errors){
                    if (data.errors[key]){
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat()
            }
            toast.error(data.title);
            break
        case 404:
            toast.error(data.title);
            break
        case 500:
            toast.error(data.title);
            break
        default:
            break
    }
    return Promise.reject(error.response);
})

const request = {
    get: (url: string,params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Catalog = {
    list: (params: URLSearchParams) => request.get('products', params),
    details: (id: number) => request.get(`products/${id}`)
}

const TestErrors = {
    get400Error: () => request.get('buggy/bad-request'),
    get404Error: () => request.get('buggy/not-found'),
    get500Error: () => request.get('buggy/server-error'),
    getValidationError: () => request.get('buggy/validation-error'),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;