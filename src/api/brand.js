import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.baseUrl.domain4 + config.controllers.share

/**
 * 查看权益
 * @param {*} data 
 */
export const getBrandDetail = (id) => {
  return axios.request({
    url: controller + `/getOneSup`,
    method: 'GET',
    params: {
      id
    }
  })
}