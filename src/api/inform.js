import axios from '@/libs/api.request'
import config from '@/config'

const service = config.services.tellInfo

/**
 * 保单id查询保单告知项
 * @param {*} 投保单id 
 */
export const getInformDetail = (id) => {
  return axios.request({
    url: service + `/${id}`,
    method: 'get'
  })
}

/**
 * 新增或者修改保单告知项
 * @param {*} data 
 */
export const saveInform = (data) => {
  return axios.request({
    url: service + `/saveOrUpdateTellInfo`,
    method: 'post',
    data,
  })
}
