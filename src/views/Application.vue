
<style lang="less" scoped>
.icon {
  font-size: 0.4rem;
}
.title {
  padding: 0.26rem 0;
  color: #101010;
  text-align: left;
  font-size: .32rem;
  line-height: .4rem;
  font-weight: bold;
  span {
    vertical-align: top;
  }
}
.small {
  font-size: .28rem;
}
.icon-title {
  margin: 0 0.2rem;
}
.container {
  border-bottom: 0.1rem solid #f1f3f5;
  padding: 0 0.32rem;
  .icon-title {
    margin-left: 0;
  }
  .title-boder {
    border-bottom: 1px solid #f1f3f5;
  }
  .text {
    // display: none;
    padding: .1rem 0 .3rem;
    font-size: .28rem;
    color: #101010;
    line-height: .46rem;
    .title {
      padding: .22rem 0 .16rem;
    }
    .format {
      padding: .12rem 0;
      color:#444;
    }
  }
  .info-list {
    // display: none;
    font-size: .28rem;
    &:last-child li:last-child {
      border-bottom: none;
    }
    li {
      display: flex;
      line-height: .44rem;
      padding: .24rem 0;
      border-bottom:#f1f3f5 solid .01rem;
      span {
        display: block;
        padding-right: .28rem;
      }
      .label {
        box-sizing: border-box;
        min-width: 1.8rem;
        color:#a6abb7;
      }
      .desc {
        flex: 1;
        color: #444;
      }
    }
  }
  .content {
    // display: none;
    padding: 0 0.3rem;
    margin-bottom: 0.2rem;
    text-align: center;
    line-height: 0.44rem;
    box-shadow: 0px 0px 10px 0px #f1f3f5;
    border-radius: 0.1rem;
    color: #a6abb7;
    font-size: .26rem;
    .item-wrap {
      .title-boder;
      &:last-child {
        border-bottom: none;
        line-height: 1rem;
      }
    }
    .item {
      display: inline-block;
      padding: .14rem 0;
      &:first-child {
        width: 40%;
      }
      &:last-child {
        width: 60%;
      }
      .value {
        padding: .06rem 0;
        color:#444;
        font-size: .28rem;
      }
      .blue {
        vertical-align: top;
        padding-right: .2rem;
      }
    }
    .item-wrap2 {
      padding: 0.2rem 0;
      line-height: 0.4rem;
    }
  }
  .total {
    display: flex;
    padding: .24rem 0 .3rem;
    justify-content: space-between;
    line-height: .4rem;
    font-size: .28rem;
    color:#444;
    i {
      font-style: normal;
      padding-right: .1rem;
      font-size: .32rem;
    }
  }
  .sign {
    padding: .4rem 0;
    .sign-box {
      display: flex;
      width: 3.12rem;
      height: 2rem;
      margin:0 0 .3rem auto;
      color:#6582ff;
      background: #fff;
      border-radius: .1rem;
      border:#f5f7f8 solid .08rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      img {
        width: .45rem;
        height: .44rem;
        margin-bottom: .3rem;
      }
      .black {
        color:#444;
        padding-right: .2rem;
      }
    }
    p {
      text-align: right;
    }
  }
  .font-small {
    font-size: .24rem;
  }
  .red {
    color:#ff4d3c;
  }
  .blue {
    color: #6582ff;
  }
}
</style>
<template>
  <div v-if="result">
    <!-- 投保须知 -->
    <div class="container">
      <div class="title title-boder">
        <span>投保须知</span>
      </div>
      <div class="text">
        <div class="title small">1、投保提示</div>
        <p>为了使您详知所投保的保险内容并维护您的合法权益，投保之前请认真阅读并签署《投保提示书》；认真阅读《保险条款》，并确认已了解保险条款的各项内容（注意“保险责任”、 “免责条款”、 “犹豫期”、 “退保”等关键信息）。本投保单信息用途包括但不限于计算保费、核保、寄送保单和客户回访等。本公司承诺未经您同意，不会将您的信息用于人身保险公司和第三方机构的销售活动。</p>
        <div class="title small">2、如实告知义务</div>
        <p>根据《保险法》，您有如实告知的义务。如故意隐瞒或不实告知，本公司有权依据法律规定及本保险合同约定解除保险合同。所有告知事项均以书面告知为准，口头告知无效。</p>
        <div class="title small">3、投保人对被保险人应有保险利益</div>
        <p>如为未成年人投保以身故为保险金给付责任的保险，投保人须为未成年人的父母，且累计身故保险金不能超过保险监督管理机构的规定额度。</p>
        <div class="title small">4、请选择合乎自己财务状况的保险计划</div>
        <p>如果您选择分期交费，请您知晓若不能按保险合同约定交纳保险费会导致保单失效，给您带来损失和不便。</p>
        <div class="title small">5、临时保障</div>
        <p>在收到您的投保书和首期保险费之后，您享有本公司提供的临时保障，至本公司同意承保或拒保并退还保险费为止。临时保障仅限于条款规定的意外身故责任，且保障额度取投保保额和20万元人民币之中的较小者。</p>
        <div class="title small">6、保险合同生效</div>
        <p>本公司同意承保且您已经支付了足额首期保险费后，保险合同才能生效，合同成立日及生效日以保险合同所载日期为准。</p>
        <div class="title small">7、选择低碳，绿色相伴</div>
        <p>本公司将通过官网www.greatlife.cn向您提供各类电子信函，您可随时查询下载，我司将默认您同意使用电子信函，感谢您对绿色节能的支持。您可使用任意手机号向95576发送短信申请纸质信函，例：NBY9025000012341288。</p>
      </div>
    </div>

    <!-- 投保人资料 -->
    <div class="container" v-if="result.applicant">
      <div class="title title-boder">
        <span>投保人资料</span>
      </div>
      <ul class="info-list">
        <li>
          <span class="label">姓名</span>
          <span class="desc">{{ result.applicant.fullName | isNull }}</span>
        </li>
        <li>
          <span class="label">证件类型</span>
          <span class="desc">{{ result.applicant.idName | isNull }}</span>
        </li>
        <li>
          <span class="label">证件号码</span>
          <span class="desc">{{ result.applicant.idNo | isNull }}</span>
        </li>
        <li>
          <span class="label">证件有效期</span>
          <span class="desc">{{ result.applicant.idValidityDateType | idValidityDateType(result.applicant) }}</span>
        </li>
        <li>
          <span class="label">性别</span>
          <span class="desc">{{ result.applicant.sex | sex}}</span>
        </li>
        <li>
          <span class="label">生日</span>
          <span class="desc">{{ result.applicant.birthday | isNull }}</span>
        </li>
        <li>
          <span class="label">婚姻状况</span>
          <span class="desc">{{ result.applicant.marriageName | isNull }}</span>
        </li> 
        <li>
          <span class="label">教育程度</span>
          <span class="desc">{{ result.applicant.educationName | isNull }}</span>
        </li>
        <li>
          <span class="label">国籍</span>
          <span class="desc">{{ result.applicant.nationalityName | isNull }}</span>
        </li>
        <li>
          <span class="label">所在地区</span>
          <span class="desc">{{ result.applicant.homeProvice }}{{ result.applicant.homeCity }}{{ result.applicant.homeCounty }}{{ result.applicant.homeTownship }}</span>
        </li>
        <li>
          <span class="label">详细住址</span>
          <span class="desc">{{ result.applicant.homeAddress | isNull }}</span>
        </li>
        <li>
          <span class="label">邮编</span>
          <span class="desc">{{ result.applicant.homeZipCode | isNull }}</span>
        </li>
        <li>
          <span class="label">家庭电话</span>
          <span class="desc">{{ result.applicant.phone | isNull }}</span>
        </li>
        <li>
          <span class="label">手机号</span>
          <span class="desc">{{ result.applicant.mobile | isNull }}</span>
        </li>
        <li>
          <span class="label">电子邮箱</span>
          <span class="desc">{{ result.applicant.email | isNull }}</span>
        </li>
        <li>
          <span class="label">单位/学校</span>
          <span class="desc">{{ result.applicant.organization | isNull }}</span>
        </li>
        <li>
          <span class="label">所在地区</span>
          <span class="desc">{{ result.applicant.organizationProvice }}{{ result.applicant.organizationCity }}{{ result.applicant.organizationCountry }}{{ result.applicant.organizationTownship }}</span>
        </li>
        <li>
          <span class="label">详细地址</span>
          <span class="desc">{{ result.applicant.organizationAddress | isNull }}</span>
        </li>
        <li>
          <span class="label">职业名称</span>
          <span class="desc">{{ result.applicant.jobName | isNull }}</span>
        </li>
        <li>
          <span class="label">职务内容</span>
          <span class="desc">{{ result.applicant.position | isNull }}</span>
        </li>
        <li>
          <span class="label">是否兼职</span>
          <span class="desc">{{ result.applicant.parttimeJob | parttimeJob }}</span>
        </li>
        <li>
          <span class="label">年收入</span>
          <span class="desc">{{ result.applicant.annualIncome | addUnits('万元') }}</span>
        </li>
        <li>
          <span class="label">收入来源</span>
          <span class="desc">{{ result.applicant.sourceIncomeName | isNull }}</span>
        </li>
        <li>
          <span class="label">有无社保</span>
          <span class="desc">{{ result.applicant.socialInsuranceFlag | socialInsuranceFlag }}</span>
        </li>
        <li>
          <span class="label">身高</span>
          <span class="desc">{{ result.applicant.stature | addUnits('厘米') }}</span>
        </li>
        <li>
          <span class="label">体重</span>
          <span class="desc">{{ result.applicant.avoirDupois | addUnits('公斤') }}</span>
        </li>
        <li>
          <span class="label">纳税身份声明</span>
          <span class="desc">{{ result.applicant.taxResidencyName | isNull }}</span>
        </li>
      </ul>
    </div>

    <!-- 被保人资料 -->
    <div class="container" v-if="result.insured">
      <div class="title title-boder">
        <span>被保人资料</span>
      </div>
      <ul class="info-list">
        <li>
          <span class="label">与投保人关系</span>
          <span class="desc">{{ result.insured.relationName | isNull }}</span>
        </li>
        <li>
          <span class="label">姓名</span>
          <span class="desc">{{ result.insured.fullName | isNull }}</span>
        </li>
        <li>
          <span class="label">证件类型</span>
          <span class="desc">{{ result.insured.idName | isNull }}</span>
        </li>
        <li>
          <span class="label">证件号码</span>
          <span class="desc">{{ result.insured.idNo | isNull }}</span>
        </li>
        <li>
          <span class="label">证件有效期</span>
          <span class="desc">{{ result.insured.idValidityDateType | idValidityDateType(result.insured) }}</span>
        </li>
        <li>
          <span class="label">性别</span>
          <span class="desc">{{ result.insured.sex | sex}}</span>
        </li>
        <li>
          <span class="label">生日</span>
          <span class="desc">{{ result.insured.birthday | isNull }}</span>
        </li>
        <li>
          <span class="label">婚姻状况</span>
          <span class="desc">{{ result.insured.marriageName | isNull }}</span>
        </li> 
        <li>
          <span class="label">教育程度</span>
          <span class="desc">{{ result.insured.educationName | isNull }}</span>
        </li>
        <li>
          <span class="label">国籍</span>
          <span class="desc">{{ result.insured.nationalityName | isNull }}</span>
        </li>
        <li>
          <span class="label">所在地区</span>
          <span class="desc">{{ result.insured.homeProvice }}{{ result.insured.homeCity }}{{ result.insured.homeCounty }}{{ result.insured.homeTownship }}</span>
        </li>
        <li>
          <span class="label">详细住址</span>
          <span class="desc">{{ result.insured.homeAddress | isNull }}</span>
        </li>
        <li>
          <span class="label">邮编</span>
          <span class="desc">{{ result.insured.homeZipCode | isNull }}</span>
        </li>
        <li>
          <span class="label">家庭电话</span>
          <span class="desc">{{ result.insured.phone | isNull }}</span>
        </li>
        <li>
          <span class="label">手机号</span>
          <span class="desc">{{ result.insured.mobile | isNull }}</span>
        </li>
        <li>
          <span class="label">电子邮箱</span>
          <span class="desc">{{ result.insured.email | isNull }}</span>
        </li>
        <li>
          <span class="label">单位/学校</span>
          <span class="desc">{{ result.insured.organization | isNull }}</span>
        </li>
        <li>
          <span class="label">所在地区</span>
          <span class="desc">{{ result.insured.organizationProvice }}{{ result.insured.organizationCity }}{{ result.insured.organizationCountry }}{{ result.insured.organizationTownship }}</span>
        </li>
        <li>
          <span class="label">详细地址</span>
          <span class="desc">{{ result.insured.organizationAddress | isNull }}</span>
        </li>
        <li>
          <span class="label">职业名称</span>
          <span class="desc">{{ result.insured.jobName | isNull }}</span>
        </li>
        <li>
          <span class="label">职务内容</span>
          <span class="desc">{{ result.insured.position | isNull }}</span>
        </li>
        <li>
          <span class="label">是否兼职</span>
          <span class="desc">{{ result.insured.parttimeJob | parttimeJob }}</span>
        </li>
        <li>
          <span class="label">年收入</span>
          <span class="desc">{{ result.insured.annualIncome | addUnits('万元') }}</span>
        </li>
        <li>
          <span class="label">收入来源</span>
          <span class="desc">{{ result.insured.sourceIncomeName | isNull }}</span>
        </li>
        <li>
          <span class="label">有无社保</span>
          <span class="desc">{{ result.insured.socialInsuranceFlag | socialInsuranceFlag }}</span>
        </li>
        <li>
          <span class="label">身高</span>
          <span class="desc">{{ result.insured.stature | addUnits('厘米') }}</span>
        </li>
        <li>
          <span class="label">体重</span>
          <span class="desc">{{ result.insured.avoirDupois | addUnits('公斤') }}</span>
        </li>
        <li>
          <span class="label">纳税身份声明</span>
          <span class="desc">{{ result.insured.taxResidencyName | isNull }}</span>
        </li>
      </ul>
    </div>

    <!-- 身故保险金受益人资料 -->
    <div class="container" v-if="result.dead && result.dead.length">
      <div class="title title-boder">
        <span>身故保险金受益人资料</span>
      </div>
      <div class="info-list" v-for="(item, index) in result.dead" :key="item.id">
        <!-- 若为指定受益人显示此标题 //beneficiaryQuickfillFlag 0  投保人  1  被保险人  2  法定受益人   4 指定受益人-->
        <div v-if="item.beneficiaryQuickfillFlag === 4" class="title small title-boder">{{ item.beneficiaryQuickfillFlag | beneficiaryQuickfillFlag(index) }}</div>
        <ul v-if="item.beneficiaryQuickfillFlag !== 2">
          <li>
            <span class="label">与被保人关系</span>
            <span class="desc">{{ item.relationToMainInsuredName | isNull }}</span>
          </li>
          <li>
            <span class="label">姓名</span>
            <span class="desc">{{ item.name | isNull }}</span>
          </li>
          <li>
            <span class="label">国籍</span>
            <span class="desc">{{ item.nationalityName | isNull }}</span>
          </li>
          <li>
            <span class="label">证件类型</span>
            <span class="desc">{{ item.idName | isNull }}</span>
          </li>
          <li>
            <span class="label">证件号码</span>
            <span class="desc">{{ item.idNo | isNull }}</span>
          </li>
          <li>
            <span class="label">证件有效期</span>
            <span class="desc">{{ item.idValidityDateType | idValidityType(item) }}</span>
          </li>
          <li>
            <span class="label">性别</span>
            <span class="desc">{{ item.sex | sex }}</span>
          </li>
          <li>
            <span class="label">生日</span>
            <span class="desc">{{ item.birthday | isNull }}</span>
          </li>
          <li>
            <span class="label">住址</span>
            <span class="desc">{{ item.addressRepeatFlag | addressRepeatFlag(item) }}</span>
          </li>
          <li>
            <span class="label">手机号</span>
            <span class="desc">{{ item.phone | isNull }}</span>
          </li>
          <li>
            <span class="label">职业名称</span>
            <span class="desc">{{ item.jobName | isNull }}</span>
          </li>
          <li>
            <span class="label">职业代码</span>
            <span class="desc">{{ item.jobCode | isNull }}</span>
          </li>
          <li>
            <span class="label">受益比例</span>
            <span class="desc">{{ item.percentage | percentage }}</span>
          </li>
        </ul>
        <ul v-else>
          <li>
            <span class="label">姓名</span>
            <span class="desc">法定</span>
          </li>
          <li>
            <span class="label">受益比例</span>
            <span class="desc">100%</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 生存保险金受益人资料 -->
    <div class="container" v-if="result.survival && result.survival.length">
      <div class="title title-boder">
        <span>生存保险金受益人资料</span>
      </div>
      <div class="info-list" v-for="(item, index) in result.survival" :key="item.id">
        <!-- 若为指定受益人显示此标题 //beneficiaryQuickfillFlag 0  投保人  1  被保险人  2  法定受益人   4 指定受益人-->
        <div v-if="item.beneficiaryQuickfillFlag === 4" class="title small title-boder">{{ item.beneficiaryQuickfillFlag | beneficiaryQuickfillFlag(index) }}</div>
        <ul v-if="item.beneficiaryQuickfillFlag !== 2">
          <li>
            <span class="label">与被保人关系</span>
            <span class="desc">{{ item.relationToMainInsuredName | isNull }}</span>
          </li>
          <li>
            <span class="label">姓名</span>
            <span class="desc">{{ item.name | isNull }}</span>
          </li>
          <li>
            <span class="label">国籍</span>
            <span class="desc">{{ item.nationalityName | isNull }}</span>
          </li>
          <li>
            <span class="label">证件类型</span>
            <span class="desc">{{ item.idName | isNull }}</span>
          </li>
          <li>
            <span class="label">证件号码</span>
            <span class="desc">{{ item.idNo | isNull }}</span>
          </li>
          <li>
            <span class="label">证件有效期</span>
            <span class="desc">{{ item.idValidityDateType | idValidityType(item) }}</span>
          </li>
          <li>
            <span class="label">性别</span>
            <span class="desc">{{ item.sex | sex }}</span>
          </li>
          <li>
            <span class="label">生日</span>
            <span class="desc">{{ item.birthday | isNull }}</span>
          </li>
          <li>
            <span class="label">住址</span>
            <span class="desc">{{ item.addressRepeatFlag | addressRepeatFlag(item) }}</span>
          </li>
          <li>
            <span class="label">手机号</span>
            <span class="desc">{{ item.phone | isNull }}</span>
          </li>
          <li>
            <span class="label">职业名称</span>
            <span class="desc">{{ item.jobName | isNull }}</span>
          </li>
          <li>
            <span class="label">职业代码</span>
            <span class="desc">{{ item.jobCode | isNull }}</span>
          </li>
          <li>
            <span class="label">受益比例</span>
            <span class="desc">{{ item.percentage | percentage }}</span>
          </li>
        </ul>
        <ul v-else>
          <li>
            <span class="label">姓名</span>
            <span class="desc">法定</span>
          </li>
          <li>
            <span class="label">受益比例</span>
            <span class="desc">100%</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 投保计划 -->
    <div class="container" v-if="result.vitPolicyRiskInfoVoListNew && result.vitPolicyRiskInfoVoListNew.length">
      <div class="title title-boder">
        <svg class="icon icon-title icon_toubaoplane" aria-hidden="true">
          <use xlink:href="#icon_toubaoplane"></use>
        </svg>
        <span>投保计划</span>
      </div>
      <div v-for="(item, index) in result.vitPolicyRiskInfoVoListNew" :key="item.id">
        <div class="title small">
          <svg v-if="item.productForm === 0" class="icon icon-title icon_zhuxian" aria-hidden="true">
            <use xlink:href="#icon_zhuxian"></use>
          </svg>
          <svg v-if="item.productForm === 1" class="icon icon-title icon_fuxian" aria-hidden="true">
            <use xlink:href="#icon_fuxian"></use>
          </svg>
          <span>{{ item.productName | isNull }}</span>
        </div>
        <div class="content">
          <div class="item-wrap">
            <div class="item">
              <p class="key">份数/档次/计划/保额</p>
              <p class="value">{{item.tag == 4 ? item.result + '元' : item.coverageShow || '-'}}</p>
            </div>
            <div class="item">
              <p class="key">保障期间</p>
              <p class="value">{{ item.policyPeriodName | policyPeriodName }}</p>
            </div>
          </div>
          <div class="item-wrap">
            <div class="item">
              <p class="key">交费期间</p>
              <p class="value">{{ item.paymentPeriodName | isNull }}</p>
            </div>
            <div class="item">
              <p class="key">交费方式</p>
              <p class="value">{{ item.paymentMethodName | isNull }}</p>
            </div>
          </div>
          <div class="item-wrap">
            <div class="item">保费</div>
            <div class="item">
              <span class="blue small">¥{{item.tag == 4 ? item.coverageShow + '/年' : item.result + '元/年'}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="total">
        <span>首次交费合计</span>
        <span class="num"><i>{{ result.totalPremium | isNull }}</i>元</span>
      </div>
    </div>

    <!-- 保险费及生存金自动转账授权书 -->
    <div class="container">
      <div class="title title-boder">
        <span>保险费及生存金自动转账授权书</span>
      </div>
      <div class="text">
        <p class="format">1、投保人同意本公司从本投保书授权的银行账号中转账支付保险费。</p>
        <p class="format">2、投保人保证此账号中余额充足。若因余额不足造成转账不成功，导致合同不能生效或合同失效的，后果由投保人承担。</p>
        <p class="format">3、投保人同意本公司通过此账号进行退费操作。</p>
        <p class="format">4、投保人因故结清账户或希望改变付费账户，应及时通知本公司进行变更。</p>
        <p class="format">5、本公司将自保险合同约定的生存保险金给付日通过转账形式给付生存保险金，直至生存受益人（被保险人）取消生存金转账授权。</p>
        <p class="format">6、如果本保单停效、自垫停效、终止后，生存金自动转账领取授权功能自动取消，不再支付生存保险金；保单复效、自垫复效后，保单根据自动转账授权情况恢复处理。</p>
        <p class="format">7、如果保单发生生存受益人变更、生存受益人资料变更，生存受益人（被保险人）须取消生存金转账授权，待生存受益人重新确定。</p>
        <p class="format">8、生存金转账授权期间，生存保险金不计息。如果生存受益人（被保险人）已经成功取消生存金转账授权，生存保险金账户从取消授权后第一次分配生存保险金的时点开始恢复计息。</p>
        <p class="format">9、如果被保险人身故，投保人或受益人应及时通知本公司停止支付生存保险金，且本公司有权追回已给付的被保险人身故后各期的生存保险金。</p>
      </div>
    </div>

    <!-- 账户信息 -->
    <div class="container" v-if="result.vitPolicyBookAccountVoList && result.vitPolicyBookAccountVoList.length">
      <div class="title title-boder">
        <span>账户信息</span>
      </div>
      <div v-for="(item, index) in result.vitPolicyBookAccountVoList" :key="item.id">
        <ul class="info-list" v-if="item.applicantInsuredFlag === 0">
          <li>
            <span class="label">账户名</span>
            <span class="desc">{{ item.accountName | isNull }}</span>
          </li>
          <li>
            <span class="label">账户号</span>
            <span class="desc">{{ item.bankAccount | bankAccount }}</span>
          </li>
          <li>
            <span class="label">开户银行</span>
            <span class="desc">{{ item.bankName | isNull }}</span>
          </li>
          <li>
            <span class="label">首期保险付费方式</span>
            <span class="desc">{{ item.payModeName | isNull }}</span>
          </li>
          <li>
            <span class="label">续期保险付费方式</span>
            <span class="desc">{{ item.subsequentPayModeName | isNull }}</span>
          </li>
          <li>
            <span class="label">一年期附加险是否自动续保</span>
            <span class="desc">{{ item.renewal | isNull }}</span>
          </li>
          <li>
            <span class="label">保单形式</span>
            <span class="desc">{{ item.electronicSignatureFlag | isNull }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 健康告知、财务告知 -->
    <tell-info v-if="result.vitPolicyTellInfo" :data="result.vitPolicyTellInfo" :isSelf="isSelf" :isImmunity="isImmunity"/>
    
    <!-- 投保人、被保险人或法定监护人授权和声明 -->
    <div class="container">
      <div class="title title-boder">
        <span>投保人、被保险人或法定监护人授权和声明</span>
      </div>
      <div class="text">
        <p class="format">1、本人确认：本投保书和相关问卷以及对长城人寿保险股份有限公司（以下简称“贵公司”）体检医生的各项声明与陈述准确无误。若不属实，且该不如实告知足以影响贵公司决定是否同意承保或提高保险费率的，贵公司有权依法解除保险合同，并且对合同解除前已经发生的保险事故不承担保险责任。</p>
        <p class="format">2、本人已阅读并同意本投保书、人身保险投保提示书、特别提示、投保须知及责任免除告知书中列明的各类事项。</p>
        <p class="format">3、贵公司已向本人提供了投保险种的保险条款，本人已经阅读并理解，知晓所有保险责任以正式合同所载为准，除贵公司经正式程序修改或批注的内容外，其他任何人的口头及书面陈述、报告或附约，贵公司无需负责。保险条款已随投保书由本人同时受领。</p>
        <p class="format">4、本人已知晓附加险的保险期间，并知晓所购产品是否提供保证续保及续保有效时间。</p>
        <p class="format">5、本人已知晓保障功能相同或类似的费用补偿型医疗保险产品不能重复赔付。</p>
        <p class="format">6、本人已知晓在犹豫期后解除保险合同会遭受一定损失。</p>
        <p class="format">7、本人授权贵公司就有关保险事宜，可以向任何医生、医院、诊所、保险公司或任何组织机构查询有关投保人及被保险人的资料或索取其他证明，本人同意贵公司持有、使用该资料处理与本人保险合同相关的审核、服务、理赔事宜。</p>
        <p class="format">8、本人已知晓在审核本人的投保申请过程中，贵公司可能会要求被保险人、投保人进行体检或补充其他材料；贵公司可能会在此合同成立前面见投保人及被保险人。贵公司可能会对投保申请做出提高费率、附加条件、拒保、延期承保、降低保额等处理；在附加险续保时，贵公司有权进行重新核保。</p>
        <p class="format">9、本人已知晓对于非本人签名的保单，合同效力不受法律保护。本人保证本投保书各项内容均为本人亲自填写，本人及被保险人/法定监护人亲笔签名确认。</p>
        <p class="format">10、本人同意贵公司向中国保险信息技术管理有限责任公司（简称“中国保信”）报送本人的全部保单信息和理赔信息，并通过医疗机构、中国保信及知悉本人信息的其他机构查询与本人有关的承保、理赔、医疗等信息。中国保信基于为本人或保险公司提供服务的需要可对上述信息进行必要的使用及与相关机构进行信息共享，但均应严格履行保密义务。</p>
        <p class="format">11、分红保险的分红收益，万能保险保障利率之上的收益与投资连结保险投资账户收益并不确定，请您详阅投保提示书第六条，如投保险种中含上述三类新型产品，按法规要求请投保人阅读并亲笔抄录以下内容: </p>
        <p class="font-small red">本人已阅读保险条款 、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。</p>
      </div>
    </div>
    
    <!-- 投保人确认签名 -->
    <div class="container" id="applicantSign">
      <div class="title title-boder">
        <span>投保人确认签名</span>
      </div>
      <div class="sign">
        <div class="sign-box" @click="gotoSign(0)">
          <img :src="signImg" />
          <p>
            <span :class="{black: signStatus(applicantSignStatus)}">{{ applicantSignStatus | signStatusTxt('投保人') }}</span>
            <span v-show="signStatus(applicantSignStatus)">重新签名</span>
          </p>
        </div>
        <p class="font-small">签署日期：{{ formatDate }}</p>
      </div>
    </div>
    
    <!-- 被保险人/法定监护人签名 -->
    <div v-if="!isSelf" class="container" id="insuredSign">
      <div class="title title-boder">
        <span>被保险人/法定监护人签名</span>
      </div>
      <div class="sign">
        <div class="sign-box" @click="gotoSign(1)">
          <img :src="signImg" />
          <p>
            <span :class="{black: signStatus(insuredSignStatus)}">{{ insuredSignStatus | signStatusTxt('被保人') }}</span>
            <span v-show="signStatus(insuredSignStatus)">重新签名</span>
          </p>
        </div>
        <p class="font-small">签署日期：{{ formatDate }}</p>
      </div>
    </div>
    
    <!-- 保险代理人签名 -->
    <!-- <div class="container" id="agentSign">
      <div class="title title-boder">
        <span>保险代理人签名</span>
      </div>
      <div class="text">
        <div class="title small">代理人声明：</div>
        <p class="format">1、本人已亲自面见投保人及被保险人，核对其身份并证实其健康状况，并就所投保险种的条款内容特别是保险责任、责任免除、犹豫期和退保等条款对投保人和被保险人进行了详细解释和说明。</p>
        <p class="format">2、对于投保单各栏及询问事项据实向投保人、被保险人进行了明确说明和询问，亲视投保人和被保险人/法定监护人在投保书、人身保险投保提示书上亲笔签名。</p>
        <p class="format">3、上述各项均为本人真实的、最终的声明，本人保证不在任何时候任何场合做出与本声明相悖的证明，否则愿意承担一切法律责任。</p>
      </div>
      <div class="sign" style="padding-top:0;">
        <div class="sign-box" @click="gotoSign(2)">
          <img :src="signImg" />
          <p>
            <span :class="{black: signStatus(agentSignStatus)}">{{ agentSignStatus | signStatusTxt('代理人') }}</span>
            <span v-show="signStatus(agentSignStatus)">重新签名</span>
          </p>
        </div>
        <p class="font-small">签署日期：{{ formatDate }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getApplicationDetail, getIsSelf, getIsImmunity, getSignStatus } from "@/api/inform";
import TellInfo from "@/views/TellInfo";
import { runInThisContext } from 'vm';
export default {
  components: {
    TellInfo
  },
  props: {},
  data() {
    return {
      signImg: require('@/assets/sign.png'),
      query: {
        // id: '2286739249334059016',
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJXRUIiLCJpc3MiOiJhdXRoLXNlcnZlciIsImNvbXBhbnkiOiJ7XCJhY3R1YWxBbm5pdmVyc2FyeVwiOjE1NTc3NjMyMDAwMDAsXCJidXNpbmVzc1R5cGVcIjowLFwiY2l0eUlkXCI6XCIzNDAxMDBcIixcImNvbWFwbnlUeXBlXCI6dHJ1ZSxcImNvbXBhbnlDb250ZW50XCI6XCI8cD7lronlv4Pkv53pmanlj6_pnaDvvIzlronlhajvvIzmlL7lv4Mu44CC44CC44CC44CCPC9wPlwiLFwiY29tcGFueUZvclNob3J0XCI6XCLlronlv4NcIixcImNvbXBhbnlTbG9nYW5cIjpcIuihjOS4muesrOS4gFwiLFwiY29tcGF5QWNjb3VudFR5cGVcIjowLFwiZW5nbGlzaE5hbWVcIjpcIlwiLFwiZW5nbGlzaE5hbWVGb3JTaG9ydFwiOlwiXCIsXCJoZWFkcXVhcnRlcnNBZGRyZXNzXCI6XCLmtYvor5VcIixcImhpZGRlbkNoYWlybWFuSW5mb1wiOjAsXCJoaWRkZW5NYW5hZ2VySW5mb1wiOjAsXCJpZFwiOjIyNTIxMTQxMjYxMzY0MTAxMTUsXCJpc0FjdGl2ZVwiOjEsXCJpc0RlbFwiOjAsXCJpc0dlbmVyYXRlR3JvdXBcIjoxLFwibG9nb1wiOlwiaHR0cDovL3d3dy5jb21tb24udmlzdWFsaW5zdXIuY29tL2NvbW1vbl8yMjc4MjMwODMxMDU3MDc2MjI4XzE1NjA0MjEyNTM0NjAuanBnXCIsXCJuYW1lXCI6XCLlronlvr3lronlv4Pkv53pmanku6PnkIbmnInpmZDlhazlj7hcIixcIm91dHNpZGVBbGxBdXRob3JpdHlcIjowLFwicHJvdmluY2VJZFwiOlwiMzQwMDAwXCIsXCJyZWdpc3RyYXRpb25EYXRlXCI6MTU2MDk2MDAwMDAwMCxcInRlbGVwaG9uZU51bWJlclwiOlwiMTIzNDQzNTQ0MVwiLFwidXBkYXRlVGltZVwiOjE1NTg5MjAzNzUwMDB9Iiwic3RhdGUiOiIwIiwiZXhwIjoxNTYxNDYyNTIzLCJpYXQiOjE1NjE0NTg5MjMsInVzZXJJZCI6MjI1MjExNDEyNjI3MDYyNzg0NX0.BjmZUob5PkCRCVYFU2CtkhulzjuyigEm6iv5xDNgOJ4'
        id: this.$route.query.id || '',
        token: this.$route.query.token || ''
      },
      result: '',
      isSelf: false, // 投保人与被保人是否为同一人
      isImmunity: true, // 投保险种不涉及投保人保险费豁免责任时，投保人健康告知栏无需填写
      isAndroid: false,
      isiOS: false,
      applicantSignStatus: 1,
      insuredSignStatus: 1,
      agentSignStatus: 1
    }
  },
  filters: {
    // 保障额度
    productTag (val) {
      //val  0份数 1档次  2计划  3保额
      return val === 0 ? '份数' : val === 1 ? '档次' : val === 2 ? '计划' : val === 3 ? '保额' : '-'
    },
    // 投保人被保人证件有效期
    idValidityDateType (val, data) {
      //val  0  长期有效   1 非长期
      return val === 0 ? '长期有效' : val === 1 && !!data.idValidateDateStart && !!data.idValidateDateEnd ? `${data.idValidateDateStart} - ${data.idValidateDateEnd}` : '-'
    },
    // 受益人证件有效期
    idValidityType (val, data) {
      //val  0  长期有效   1 非长期
      return val === 0 ? '长期有效' : val === 1 && !!data.idValidityStartDate && !!data.idValidityEndDate ? `${data.idValidityStartDate} - ${data.idValidityEndDate}` : '-'
    },
    addressRepeatFlag (val, data) {
      //val  0  代表同投保人  1代表同被保人  不是0或者1就是详细的地址
      return val === '0' || val === 0 ? '同投保人' : val === '1' || val === 1 ? '同被保人' : data.addressRepeatFlag ? data.addressRepeatFlag : '-'
    },
    sex (val) {
      return val === 0 ? '先生' : val === 1 ? '女士' : '-'
    },
    parttimeJob (val) {
      return val === 0 ? '无兼职' : val === 1 ? '有兼职' : '-'
    },
    socialInsuranceFlag (val) {
      return val === 0 ? '没有社保' : val === 1 ? '有社保' : '-'
    },
    addUnits (val, units) {
      return val && !isNaN(val) ? parseFloat(val).toFixed(0) + units : '-'
    },
    policyPeriodName (val) {
      // 105岁以上为终身
      if (val && !isNaN(val)) {
        return parseInt(val) < 105 ? '保至' + val + '周岁' : '保至终身'
      } else {
        return val
      }
    },
    isNull (val) {
      return val ? val : '-'
    },
    beneficiaryQuickfillFlag (val, index) {
      //val 0  投保人  1  被保险人  2  法定受益人   4 指定受益人
      let text = '-'
      let num = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
      if (val !== null && val !== undefined && val !== '') {
        text = val === 4 ? `第${num[index]}顺序受益人` : '受益人'
      }
      return text
    },
    percentage (val) {
      return val && !isNaN(val) ? parseFloat(val * 100).toFixed(0) + '%' : '-'
    },
    paymentMethod (val) {
      // 交费方式   0  年交  1 半年交  2 季交 3 月交
      let text = '年'
      let time = ['年', '半年', '季', '月']
      if (val) text = time[val]
      return `每${text}`
    },
    total (val) {
      let premiumTotal = 0
      if (val) {
        val.map(item => {
          if (item.premium && !isNaN(item.premium)) premiumTotal += parseFloat(item.premium)
        })
      }
      return premiumTotal.toFixed(2)
    },
    signStatusTxt (val, name) {
      return val === 2 ? '已签' : (val === 3 || val === 4) ? '签名失败' : name + '签名'
    },
    bankAccount (val) {
      return val ? !isNaN(val) ? val.replace(/(\d{4})(?=\d)/g,'$1 ') : val : '-'
    }
  },
  computed: {
    formatDate () {
      const d = new Date()
      const year = d.getFullYear()
      const month = d.getMonth() + 1
      const date = d.getDate()
      return (year + '年' + month + '月' + date + '日')
    }
  },
  created() {},
  mounted() {
    this.isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
    this.isiOS = !!navigator.userAgent.indexOf('iPhone') > -1; //ios终端
    window.signCallBack = this.signCallBack
    this.getApplicationDetailFn()
  },
  methods: {
    signStatus (val) {
      return [2, 3, 4].findIndex(item => item === val) !== -1
    },
    getApplicationDetailFn() {
      if (!this.query.id) {
        this.Toast('未获取到保单信息')
        return
      }
      if (!this.query.token) {
        this.Toast('未获取到用户信息')
        return
      }
      getApplicationDetail(this.query).then(res => {
        this.result = res
        // 投保计划重新排序
        res.vitPolicyRiskInfoVoListNew = []
        if (res.vitPolicyRiskInfoVoList) {
          let one = res.vitPolicyRiskInfoVoList.filter(item => item.productForm === 0)
          let two = res.vitPolicyRiskInfoVoList.filter(item => item.productForm !== 0)
          res.vitPolicyRiskInfoVoListNew = one.concat(two)
        }
      })
      getIsSelf(this.query).then(res => {
        this.isSelf = !!res
      })
      getIsImmunity(this.query).then(res => {
        this.isImmunity = !!res
      })
      this.signCallBack()
    },
    gotoSign (type) {
      // type:  0 投保人 1：被保人 2：代理人
      let typeName = ['applicantSignStatus', 'insuredSignStatus', 'agentSignStatus']
      let params = {
        type: type,
        isResign: this[typeName[type]] !== 1
      }
      if (this.isAndroid) {
        window.hello.onClickSign(type, params.isResign)
      }
      if (this.isiOS) {
        window.webkit.messageHandlers.onClickSign.postMessage(JSON.stringify(params))
      }
    },
    signCallBack (type) {
      let param = {
        policyId: this.query.id
      }
      getSignStatus(param, this.query.token).then(res => {
        // status: 1：未签  2 签署完成  3：失败  4：拒签
        // this.Toast(JSON.stringify(res))
        res.map(item => {
          this.applicantSignStatus = item.type === 0 ? item.status : this.applicantSignStatus
          this.insuredSignStatus = item.type === 1 ? item.status : this.insuredSignStatus
          this.agentSignStatus = item.type === 2 ? item.status : this.agentSignStatus
        })
        if (type || type === 0) {
          let typeId = type === 0 ? "applicantSign" : type === 1 ? "insuredSign" : type === 2 ? "agentSign" : ""
          document.getElementById(typeId) ? document.getElementById(typeId).scrollIntoView() : ""
        }
      })
    }
  }
};
</script>