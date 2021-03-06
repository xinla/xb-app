import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseText, responseURL } } = errorInfo
  // let info = {
  //   type: 'ajax',
  //   code: status,
  //   mes: statusText,
  //   url: responseURL
  // }
  // if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
  process.env.NODE_ENV === 'development'
    ? Toast({
      message: `错误: 路径: ${responseURL}, 返回值 : ${responseText}`,
      duration: 3000
    })
    : Toast({
      message: `${JSON.parse(responseText).message}`,
      duration: 3000
    })
}

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      Indicator.close()
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        Indicator.open({
          spinnerType: 'fading-circle'
        }) // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      // console.log('request config: ' + JSON.stringify(config))
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      // debugger
      // console.log('res: ' + res)
      const { data, status } = res
      // code 0:成功，-1/其它:错误
      if (status === 200 && data.code === 0 || data.code === 1) {
        return JSON.stringify(data.result) ? data.result : data.data
      } else {
        addErrorLog(res)
        return Promise.reject(res)
      }
    }, error => {
      this.destroy(url)
      if (error.response) {
        addErrorLog(error.response)
      } else {
        Toast({
          message: `网络错误或服务器拒绝连接`,
          duration: 3000
        })
      }
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
