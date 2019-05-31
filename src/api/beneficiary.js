import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.controllers.beneficiary

/**
 * 查看权益
 * @param {*} data 
 */
export const getBeneficiaryDetail = (data) => {
  return axios.request({
    url: `/getPolicyRight/${data.policyId}/${data.insuredCurrentAge}/${data.insuredMaxAge}/${data.insuredCountAge}`,
    method: 'GET',
    headers: {
      auth_token: data.token
    }
  })
}

/**
 * 保单id查询受益人信息
 * @param {*} 投保单id 
 */
export const getBeneficiaryMemmberDetail = (id) => {
  return axios.request({
    url: controller + `/${id}`,
    method: 'get'
  })
}

/**
 * 新增或者修改受益人信息
 * @param {*} data 
 */
export const saveBeneficiary = (data) => {
  return axios.request({
    url: controller + `/saveOrUpdatePolicyBeneficiary`,
    method: 'post',
    data,
  })
}
