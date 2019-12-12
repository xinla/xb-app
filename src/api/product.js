import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.baseUrl.domain2 + config.controllers.share
const controller2 = config.baseUrl.domain4 + config.controllers.share + '/product'

/**
 * 获取产品详情
 * @param {*} param0 
 */
export const getProductDetail = ({id, token}) => {
  return axios.request({
    url: controller2 + '/desc/h5',
    method: 'get',
    params: {
      productId: id
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
export const getProductRateParams = ({id, token}) => {
  return axios.request({
    url: controller + '/getParams',
    method: 'get',
    params: {
      productId: id
    },
    headers: {
      auth_token: token
    }
  })
}

/**
 * 获取产品详情费率表的年龄和费率
 * @param {*} param0 
 */
export const getProductRateDetail = (data, token) => {
  return axios.request({
    url: controller + `/getRates/${data.page}/${data.size}`,
    method: 'post',
    data,
    headers: {
      auth_token: token
    }
  })
}

