import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { RequestConfig, RequestInterceptors } from './index.d'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

const DEFAULT_LOADING = true

class MyRequest {
  instance: AxiosInstance
  interceptor?: RequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)

    this.interceptor = config.interceptors

    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 单例得拦截器
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )

    // 全局实例得拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '请求中',
            background: 'rgba(0,0,0,0.1)'
          })
        }

        return config
      },
      (err) => {
        console.log('全局请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截')

        this.loading?.close()

        return res.data
      },
      (err) => {
        console.log('全局响应失败拦截')
        return err
      }
    )
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果有某个实例得个别请求有拦截器，执行完拦截器得内容，得到改请求对应得config
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.showLoading = config.showLoading ?? DEFAULT_LOADING

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          console.log(res)
          resolve(res)

          this.showLoading = DEFAULT_LOADING
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: RequestConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T>(config: RequestConfig) {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T>(config: RequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default MyRequest
