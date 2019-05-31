const config = {
  baseUrl: {
    // dev: 'http://192.168.1.55', // 虚拟机
    dev: 'http://192.168.1.11:8888/api/policy-service/v1/policy', // 本地
    dev2: 'http://192.168.1.21:8115/v1',
    pro: 'https://produce.com'
  },
}

config.controllers = {
  company: '/xbcompany',
  menuSet: '/xbBasePermissionMenu',
  systemHelp: '/xbSystemHelp',
  system: '/system',
  user: '/user',
  systemMessage: '/imNoticeMsg',
  businessInformation: '/xbCompanyBusinessInformation',
  product: '/product',
  supplier: '/xbsupplier',
  supplierUser: '/xbSupplierUser',
  supplierOrganization: '/xbSupplierOrganization',
  supplierNews: '/xbSupplierNews',
  typeRule: '/typeRule',
  profession: '/xbProfession',
  roleGroup: '/roleGroup',
  role: '/role',
  nationality: '/vitNationality',
  policyDictCategory: '/policyDictCategory',

  beneficiary: '/beneficiary',
  role: '/role',
  role: '/role',
  role: '/role',


  mCompany: config.baseUrl.dev2 + '/company',
}

export default config
