const config = {
  // 测试服
  baseUrl: {
    // dev: 'http://192.168.1.32:8888', // 虚拟机
    dev: 'https://gateway.visualinsur.cn:8888', // wangdong
    pro: 'http://192.168.1.26:8888', // wangdong
    domain2: process.env.NODE_ENV === 'development' ? 'http://192.168.1.26:8888' : 'http://192.168.1.26:8888', // liusiyuan
    dev3:  process.env.NODE_ENV === 'development' ? 'http://192.168.1.26:8888' : 'http://192.168.1.26:8888',
    domain4: process.env.NODE_ENV === 'development' ? 'http://192.168.1.26:8888' : 'http://192.168.1.26:8888', // liushaung~
    domain5: process.env.NODE_ENV === 'development' ? 'http://47.98.153.101:8118' : 'http://47.98.153.101:8118', // liushaung~
  },
  
  // 正式服
  // baseUrl: {
  //   // dev: 'http://192.168.1.32:8888', // 虚拟机
  //   dev: 'https://gateway.visualinsur.cn:8888', // wangdong
  //   pro: 'https://gateway.visualinsur.cn:8888', // wangdong
  //   domain2: process.env.NODE_ENV === 'development' ? 'https://gateway.visualinsur.cn:8888' : 'https://gateway.visualinsur.cn:8888', // liusiyuan
  //   dev3:  process.env.NODE_ENV === 'development' ? 'https://gateway.visualinsur.cn:8888' : 'https://gateway.visualinsur.cn:8888',
  //   domain4: process.env.NODE_ENV === 'development' ? 'http://192.168.1.150:8888' : 'https://gateway.visualinsur.cn:8888', // liushaung~
  //   domain5: process.env.NODE_ENV === 'development' ? 'http://47.98.153.101:8118' : 'http://47.98.153.101:8118', // liushaung~
  // },
  
}

config.controllers = {

  beneficiary: '/beneficiary',
  policy: '/api/policy-service/v1/policy',
  proposal: '/api/policy-service/v1/proposal',

  product: '/api/base/v1/product',
  role: '/role',
  
  share: '/api/base/v1/share', // 分享无鉴权
  proposalNoSign: '/api/policy-service/v1/sign', // 查看权益无鉴权

  version: '/version',


  sign: config.baseUrl.dev3
}

export default config
