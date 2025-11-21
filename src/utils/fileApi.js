import axios from 'axios'
import Cookies from 'js-cookie'

// const baseURL = 'http://84.54.116.154:8084'
const baseURL = 'http://192.168.1.96:8084'

const fileApi = axios.create({
  baseURL: baseURL,
})

fileApi.interceptors.request.use(config => {
  const token = Cookies.get('jwtToken')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export default fileApi

