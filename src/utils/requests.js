import axios from 'axios'
const request = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
    timeout: 5000
})
request.interceptors.response.use(response => {
    return response.data
})
export default request
