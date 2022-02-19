import type { AxiosRequestConfig, AxiosResponse } from "axios";

// 请求拦截器
export interface RequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any

  // responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptor: (res: any) => any
  responseInterceptorCatch: (error: any) => any
}

// 扩展得配置
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
  showLoading?: boolean
}