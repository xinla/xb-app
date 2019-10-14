import axios from 'axios'
import config from '@/config'

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})
/**
 * 获取行政区划
 * @param {*} subdistrict 省市区街道，层级
 * @param {*} keywords 关键词
 * 5f70e232462daa68522e88bc11193c93
 */
export const getLocation = (address) => {
  return axios.request({
    url: 'https://restapi.amap.com/v3/geocode/geo',
    params: {
      key: '500a3ef03541f06fac2f747c4ad81ecf',
      address,
    },
    method: 'get',
    transformResponse: [function (data) {
      data = JSON.parse(data)
      // console.log(data)
      return data.geocodes[0]
      // if (subdistrict === 0) {
      //   return data.districts[0]
      // } else {
      //   return data.districts[0].districts;
      // }
    }]
  })
}