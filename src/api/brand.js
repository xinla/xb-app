import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.baseUrl.domain4 + config.controllers.share

/**
 * 品牌详情
 * @param {*} data 
 */
export const getBrandInfo = (id) => {
  return axios.request({
    url: controller + `/getOneSup`,
    method: 'GET',
    params: {
      id
    }
  })
}

/**
 * 品牌产品列表
 * @param {*} supplierId 
 */
export const getBrandProductList = (supplierId) => {
  return axios.request({
    url: controller + `/getProduct`,
    method: 'GET',
    params: {
      supplierId
    }
  })
}
