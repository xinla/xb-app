import axios from '@/libs/api.request'
import config from '@/config'

const controller1 = config.controllers.policy
const controller = controller1 + '/' +config.controllers.beneficiary

/**
 * 查看权益
 * @param {*} data 
 */
export const getBeneficiaryDetail = (data) => {
  return axios.request({
    url: controller1 + `/getPolicyRight/${data.id}/${data.insuredCurrentAge}/${data.insuredMaxAge}/${data.insuredCountAge}`,
    method: 'GET',
    headers: {
      auth_token: data.token
    }
  })
}

/**
 * 获取被保人年龄区间
 * @param {*} param0 
 */
export const getInsuredAgeRange = ({id, token}) => {
  return axios.request({
    url: controller1 + `/insuredAgeRange/${id}`,
    method: 'get',
    headers: {
      auth_token: token
    }
  })
}

/**
 * 保单id查询受益人信息
 * @param {*} 投保单id 
 */
export const getBeneficiaryMemmberDetail = (data) => {
  return axios.request({
    url: controller + `/${id}`,
    method: 'get',
    headers: {
      auth_token: data.token
    }
  })
}

/**
 * 新增或者修改受益人信息
 * @param {*} data 
 */
export const saveBeneficiary = (data) => {
  return axios.request({
    url: controller1 + `/saveOrUpdatePolicyBeneficiary`,
    method: 'post',
    data,
    headers: {
      auth_token: data.token
    }
  })
}
