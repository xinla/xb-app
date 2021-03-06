import axios from '@/libs/api.request'
import config from '@/config'

const controller1 = config.controllers.policy
const controller = controller1 + '/' +config.controllers.beneficiary
const controller2 = config.baseUrl.domain2 + config.controllers.proposalNoSign

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
 * 建议书中查看权益
 * @param {*} data 
 */
export const getBeneficiaryDetailByProposalId = (data) => {
  return axios.request({
    url: controller2 + `/getPolicyRight/${data.id}/${data.insuredCurrentAge}/${data.insuredMaxAge}/${data.insuredCountAge}`,
    method: 'GET',
    headers: {
      auth_token: data.token
    }
  })
}

/**
 * 查看权益建议书封面
 * @param {*} param0 
 */
export const getBeneficiaryCover = ({id, token}) => {
  return axios.request({
    url: controller2 + `/findRelationByProposalId/${id}`,
    method: 'get',
    headers: {
      auth_token: token
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
 * 获取被保人年龄区间
 * @param {*} param0 
 */
export const getInsuredAgeRangeByProposalId = ({id, token}) => {
  return axios.request({
    url: controller2 + `/insuredAgeRange/${id}`,
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
    url: controller + `/${data.id}`,
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
// export const saveBeneficiary = (data) => {
//   return axios.request({
//     url: controller1 + `/saveOrUpdatePolicyBeneficiary`,
//     method: 'post',
//     data,
//     headers: {
//       auth_token: data.token
//     }
//   })
// }

// 获取保险单详情
export const getPolicyDetail = (data) => {
  return axios.request({
    url: controller2 + `/getPolicyWording/${data.id}`,
    method: 'get',
    headers: {
      auth_token: data.token
    }
  })
}

/**
 * 发送给客户/客户阅读
 * @param {string} id 建议书id
 * @param {} status 3已发送,4已阅读
 * @param {*} token 
 */
export const read = ({id, status, token}) => {
  return axios.request({
    url: controller2 + `/SendById/${id}/${status}`,
    method: 'get',
    headers: {
      auth_token: token
    }
  })
}
