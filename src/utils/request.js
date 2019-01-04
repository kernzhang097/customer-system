import axios from 'axios'

const instance = axios.create({
  baseURL: ''
})

instance.defaults.timeout = 1000

instance.interceptors.request.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})

export default instance
