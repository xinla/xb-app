const config = {
  baseUrl: {
    // dev: 'http://192.168.1.32:8888', // 虚拟机
    dev: 'https://gateway.visualinsur.cn:8888', // wangdong
    pro: 'https://gateway.visualinsur.cn:8888', // wangdong
    domain2: process.env.NODE_ENV === 'development' ? 'https://gateway.visualinsur.cn:8888' : 'https://gateway.visualinsur.cn:8888', // liusiyuan
    dev3:  process.env.NODE_ENV === 'development' ? 'http://192.168.1.11:8888' : 'https://gateway.visualinsur.cn:8888',
    domain4: process.env.NODE_ENV === 'development' ? 'https://gateway.visualinsur.cn:8888' : 'https://gateway.visualinsur.cn:8888', // liushaung~
  },
}

config.controllers = {

  beneficiary: '/beneficiary',
  policy: '/api/policy-service/v1/policy',
  proposal: '/api/policy-service/v1/proposal',

  product: '/api/base/v1/product',
  productShare: '/api/base/v1/share/product',
  company: '/api/base/v1/share/company',
  role: '/role',

  sign: '/api/policy-service/v1/sign', // 查看权益无鉴权
  rate: '/api/base/v1/share', // 费率无鉴权


  sign: config.baseUrl.dev3
}

export default config
