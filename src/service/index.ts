import MyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

console.log(BASE_URL)

const request = new MyRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('成功得请求')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('失败得请求')
      return err
    },
    responseInterceptor: (config) => {
      console.log('成功得响应')
      return config
    },
    responseInterceptorCatch: (err) => {
      console.log('失败得响应')
      return err
    }
  }
})

export default request
