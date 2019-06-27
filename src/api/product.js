import axios from '@/libs/api.request'
import config from '@/config'

const controller1 = config.baseUrl.domain2 + '/product'
const url = config.baseUrl.domain4 + '/api/base/v1/product/desc/h5'

/**
 * 获取产品详情
 * @param {*} param0 
 */
export const getProductDetail = ({id, token}) => {
  return axios.request({
    url,
    method: 'get',
    params: {
      id
    },
    headers: {
      auth_token: token
    }
  })
}

/**
 * 获取产品费率参数
 * @param {*} id 产品id 
 */
export const getProductRateParams = (id) => {
  return axios.request({
    url: controller1 + '/getParams',
    method: 'get',
    params: {
      productId: id
    }
  })
}

/**
 * 获取产品详情费率表的年龄和费率
 * @param {*} param0 
 */
export const getProductRateDetail = (data) => {
  return axios.request({
    url: controller1 + `/getRates/${data.page}/${data.size}`,
    method: 'post',
    data
  })
}

