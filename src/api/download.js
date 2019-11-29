import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.baseUrl.domain5 + config.controllers.version

/**
 * 获取安卓最新版本
 * @param {*} param0 
 */
export const getVersionPage = () => {
  return axios.request({
    url: controller + `/findAll/${1}/${1}`,
    method: 'get',
    params: {
      type: 0
    }
  })
}
