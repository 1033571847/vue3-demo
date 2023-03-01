/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from "axios";
import router from "../router";
import store from "../store/index";

// 创建axios实例
const instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post["Content-Type"] = "application/json";
/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  (config: { headers: any }) => {
    config.headers.Authorization = "Bearer xxxxxx";
    return config;
  },
  (error: any) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  // (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  (res) => {
    if (res.status === 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
  // 请求失败
  (error: { response: any }) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      return Promise.reject(response);
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
