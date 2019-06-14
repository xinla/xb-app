import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.controllers.product
const controller1 = config.controllers.product
const url = 'http://192.168.1.150:8888/api/base/v1/product/desc/h5'

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
    url: controller + '/getParams',
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
export const getProductRateDetail = ({page, size}) => {
  return axios.request({
    url: controller + `/getRates/${page}${size}`,
    method: 'get',
  })
}

