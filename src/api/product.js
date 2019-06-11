import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.controllers.product
const url = 'http://192.168.1.150:8888/api/base/v1/product/desc/h5'

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
