const config = {
  baseUrl: {
    // dev: 'http://192.168.1.55', // 虚拟机
    dev: 'http://192.168.1.11:8888/api/policy-service/v1', // wangdong
    dev2: 'http://192.168.1.21:8115/v1',
    dev3: 'http://192.168.1.11:8888',
    pro: 'https://produce.com'
  },
}

config.controllers = {

  beneficiary: '/beneficiary',
  policy: '/policy',
  product: '/product',
  role: '/role',


  mCompany: config.baseUrl.dev2 + '/company',
  sign: config.baseUrl.dev3
}

export default config
