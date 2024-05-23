import axios from "axios";

// creating an instance of axios
const Api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers : {
        "Content-Type" : "multipart/form-data"
    }
});

// Creating test api
export const testApi = () => Api.get('/test')

// Creating register api
export const registerUserApi = (data) => Api.post('/api/user/create', data)

// Creating login api
export const loginUserApi = (data) => Api.post('/api/user/login', data)

// create product create api
export const createProductApi = (data) => Api.post('/api/product/create', data)


// http://localhost:5000/test