import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3333'
// 请求拦截器
axios.interceptors.request.use(config => {
    return config
})

// 响应拦截器
axios.interceptors.response.use(res => {
    return res
}, error => {
    return Promise.reject(error)
})

export default axios
