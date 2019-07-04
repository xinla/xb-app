import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.baseUrl.domain4 + config.controllers.company

/**
 * 查看权益
 * @param {*} data 
 */
export const getCompanyDetail = ({id, token}) => {
  return axios.request({
    url: controller + `/getOneCompany`,
    method: 'GET',
    params: {
      id
    },
    headers: {
      auth_token: token
    }
  })
}
