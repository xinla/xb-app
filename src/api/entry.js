import axios from '@/libs/api.request'
import Qs from 'qs'

/**
 * 查询公司信息
 * @param {*} companyId-公司Id
 */
export const getCompanyInfo = (params) => {
  return axios.request({
    url: '/api/vit-human-tube/v1/hr/queryCompanyInfoById',
    method: 'get',
    params: params
  })
}

/**
 * 查询分公司、营业部
 * @param {*} companyId-公司Id orgId-传参表示查营业部
 */
export const getCompanyOrgan = (params) => {
  return axios.request({
    url: '/api/permission/organize/queryHrApplicationJoinOrg',
    method: 'get',
    params: params
  })
}

/**
 * 查询手机号是否存在
 * @param {*} companyId-公司Id mobile-手机号
 */
export const getUserIsExist = (params) => {
  return axios.request({
    url: '/api/vit-human-tube/v1/hr/queryUserIsExist',
    method: 'get',
    params: params
  })
}

/**
 * 上传文件
 * @param {*} file-上传文件
 */
export const uploadFileApi = (formData) => {
  return axios.request({
    url: '/api/third/v1/file/upload/common',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * 新增申请入职基本信息
 * @param {*} mobile-手机号 name-姓名 companyId-公司id recommendid-推荐人id state-3：入职申请 orgIds-组织id  当推荐人未填写时  必填
 */
export const saveUserBaseInfo = (params) => {
  return axios.request({
    url: '/api/vit-human-tube/v1/hr/user/baseInfo',
    method: 'post',
    data: Qs.stringify(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}


/**
 * 保存个人信息
 */
export const savePersonalInfo = (params) => {
  return axios.request({
    url: '/api/vit-human-tube/v1/hr/user/personalInfo',
    method: 'post',
    data: Qs.stringify(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 保存教育经历
 */
export const saveEducationalInfo = (params) => {
  return  axios.request({
    url: '/api/vit-human-tube/v1/hr/user/educationalExperience',
    method: 'post',
    data: params
  })
}

/**
 * 保存工作经历
 */
export const saveWorkInfo = (params) => {
  return axios.request({
    url: '/api/vit-human-tube/v1/hr/user/workExperience',
    method: 'post',
    data: params
  })
}

/**
 * 保存紧急联系人
 */
export const saveContactInfo = (params) => {
  return axios.request({
    url: '/api/vit-human-tube/v1/hr/user/emergencyContac',
    method: 'post',
    data: params
  })
}

/**
 * 保存个人资料
 */
export const savePersonalDescInfo = (params) => {
  return axios.request({
    url: '/api/vit-human-tube/v1/hr/user/certificateInfo',
    method: 'post',
    data: params
  })
}
