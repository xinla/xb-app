import axios from '@/libs/api.request'
import config from '@/config'

const service = config.services.beneficiary

/**
 * 保单id查询受益人信息
 * @param {*} 投保单id 
 */
export const getBeneficiaryDetail = (id) => {
  return axios.request({
    url: service + `/${id}`,
    method: 'get'
  })
}

/**
 * 新增或者修改受益人信息
 * @param {*} data 
 */
export const saveBeneficiary = (data) => {
  return axios.request({
    url: service + `/saveOrUpdatePolicyBeneficiary`,
    method: 'post',
    data,
  })
}
