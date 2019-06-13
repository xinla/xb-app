import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.controllers.inform

/**
 * 保单id查询保单告知项
 * @param {*} 投保单id 
 */
export const getInformDetail = ({id, token}) => {
  return axios.request({
    url: controller + `/${id}`,
    method: 'get',
    headers: {
      auth_token: token
    }
  })
}

/**
 * 新增或者修改保单告知项
 * @param {*} data 
 */
export const saveInform = (data, token) => {
  return axios.request({
    url: controller + `/saveOrUpdateTellInfo`,
    method: 'post',
    data,
    headers: {
      auth_token: token
    }
  })
}
