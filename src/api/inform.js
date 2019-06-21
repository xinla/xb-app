import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.controllers.policy

/**
 * 保单id查询保单告知项
 * @param {*} 投保单id 
 */
export const getInformDetail = ({id, token}) => {
  return axios.request({
    url: controller + `/tellInfo/${id}`,
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

/**
 * 判断投保人和被保人是否本人关系
 * @param {*} id policyId
 * @param {*} token 
 */
export const getIsSelf = ({id, token}) => {
  return axios.request({
    url: controller + `/applicantInsured/same/${id}`,
    method: 'get',
    headers: {
      auth_token: token
    }
  })
}

/**
 * 告知项判断是否涉及投保人保险费豁免
 * @param {*} id policyId
 * @param {*} token 
 */
export const getIsImmunity = ({id, token}) => {
  return axios.request({
    url: controller + `/risk/applicant/immunity/${id}`,
    method: 'get',
    headers: {
      auth_token: token
    }
  })
}

/**
 * 保单id查询保险投保单
 * @param {*} 投保单id 
 */
export const getApplicationDetail = ({id, token}) => {
  return axios.request({
    url: controller + `/book/${id}`,
    method: 'get',
    headers: {
      auth_token: token
    }
  })
}

/**
 * 获取投保单签名状态
 * @param {*} 投保单id 
 */
export const getSignStatus = (data, token) => {
  return axios.request({
    url: config.controllers.sign + '/api/base/v1/sign/getSignStatus',
    method: 'get',
    params: data,
    headers: {
      auth_token: token
    }
  })
}
