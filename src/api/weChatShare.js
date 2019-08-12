import axios from '@/libs/api.request'
import config from '@/config'

const controller = config.baseUrl.domain4 + config.controllers.share + '/getSign'

export const getWeChatSign = (url) => {
  return axios.request({
    url: controller,
    method: 'post',
    data: {
      url
    },
    // headers: {
    //   auth_token: token
    // }
  })
}
