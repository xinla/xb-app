# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### app工作台跳转配置
#### 公共参数
 * companyName:公司名称
 * companyId:公司id
 * userName:用户名称
 * userId:用户id
 * userPhoneNumber:用户手机号
 * uerPosition:用户职位
 * userEmail:用户邮件
 * departmentName:部门名称
 * departmentid:部门id
 根据 `|` 标识符匹配参数，例：
```
{
  type: 1, // 0-跳转网址，1-分享地址
  url: "http://192.168.1.26:8091/join?|companyId|userName", // 跳转地址或分享地址 http://192.168.1.26:8091/join?companyId=XXX&userName=XXX
  title: "|companyName|userName|邀您入职", // 分享标题type为1时必传 公司全称姓名邀您入职 例：安徽现保科技有限公司夏睿邀您入职
  desc: "请尽快按真实内容填写后提交" // 分享摘要type为1时必传
  imgUrl: "" // 分享图片，为空时默认使用租户logo
}
```