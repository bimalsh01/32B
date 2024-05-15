import axios from "axios";

// creating an instance of axios
const Api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json"
    }
});

// Creating test api
export const testApi = () => Api.get('/test')

// Creating register api
export const registerUserApi = (data) => Api.post('/api/user/create', data)




// http://localhost:5000/test