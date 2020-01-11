export default {
  /**
   * 正则列表
   * @param mobile-手机号 email-邮箱 number-大于0的正整数
   */
  // 正则列表
  mobile: /^1[3456789]\d{9}$/,
  email: /^[a-z0-9A-Z]+[-|a-z0-9A-Z._]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z]{2,}$/,
  number: /^[1-9]\d*$/
}