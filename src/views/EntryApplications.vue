<style lang="less" scoped>
.entry-applications {
  display: flex;
  flex-direction:column ;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background:url("../assets/entry/entry-bg.png") #F1F3F5 center top no-repeat;
  background-size: 100% auto;
  .header {
    position: relative;
    height: 1.7rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
    &.short {
      height: .8rem;
    }
    .logo {
      position: absolute;
      left: .2rem;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: .6rem;
      height: .6rem;
      overflow: hidden;
      border-radius: 50%;
      background:#fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      flex: 1;
      padding: 0 .2rem;
      div {
        font-size: .32rem;
        line-height: .45rem;
        font-weight: normal;
        height: .54rem;
        &.hide {
          height: 0;
        }
      }
      h3 {
        font-size: .36rem;
        line-height: .5rem;
      }
    }
  }
  .content {
    flex: 1;
    overflow-y: auto;
    .item {
      border-radius: .2rem;
      background:#fff;
      overflow:hidden;
      margin: 0 .2rem .2rem;
      .title {
        background: #F8F9FA;
        height: .9rem;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
        padding: 0 .3rem;
        h5 {
          font-size: .34rem;
        }
        span {
          font-style: .24rem;
        }
      }
      &.add-btn {
        text-align: center;
        line-height: 1rem;
        font-size: .3rem;
        cursor: pointer;
        .icon-add-circle {
          width: .44rem;
          height: .44rem;
          vertical-align: middle;
        }
        span {
          padding-left: .2rem;
          vertical-align: middle;
        }
      }
      .form-list {
        padding: 0 .3rem;
        li {
          position: relative;
          padding-top: .2rem;
          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: rgba(219,219,219,1);
          }
          .label {
            line-height: .5rem;
            height: .5rem;
            font-size: .28rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .switch {
              position: relative;
              box-sizing: border-box;
              padding: .04rem .1rem .04rem .56rem;
              display: inline-block;
              white-space: nowrap;
              line-height: .42rem;
              height: .5rem;
              border-radius: .25rem;
              overflow: hidden;
              background: #f1f3f5;
              font-size: .2rem;
              color: #666;
              outline: none;
              &::before {
                content: '';
                position: absolute;
                width: .42rem;
                height: .42rem;
                top: .04rem;
                left: .04rem;
                border-radius: 50%;
                background:#fff;
                z-index: 1;
                transition: left .3s ease-in-out;
              }
              &::after {
                content: '有推荐人';
                position: absolute;
                padding: .04rem 0 .04rem .1rem;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                opacity: 0;
                font-size: .2rem;
                color: #fff;
                border-radius: .25rem;
                background: rgba(101,130,255,1);
                transition: opacity .3s ease-in-out;
              }
              &.on {
                &::after {
                  opacity: 1;
                }
                &::before {
                  left: calc(100% - .46rem);
                }
              }
            }
          }
          .input-txt {
            padding: .14rem 0 .26rem;
            display: flex;
            align-items: center;
            line-height: .32rem;
            .value {
              flex: 1;
            }
            .is-null {
              color:#CACDD4;
            }
            .icon-arr {
              font-size: .24rem;
            }
            .icon-birth {
              font-size: .3rem;
            }
          }
        }
        &.last-no-border li:last-child::before {
          height: 0;
        }
      }
      .tip {
        padding: .15rem .3rem;
        color:#FCB33F;
        font-size: .24rem;
        line-height: .4rem;
        height: .7rem;
      }
      .upload-list {
        padding: .3rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          .upload-item {
            position: relative;
            width: 3.14rem;
            height: 2.06rem;
            background: url("../assets/entry/upload-bg.png" ) center no-repeat;
            background-size: 100% 100%;
            border-radius: .16rem;
            overflow: hidden;
            box-sizing: border-box;
            padding: .1rem;
            &::after {
              display: block;
              content: '';
              position: absolute;
              width: .72rem;
              height: .72rem;
              left: 50%;
              top: 50%;
              margin: -.36rem 0 0 -.36rem;
              background: url("../assets/entry/upload-icon.png" ) center no-repeat;
              background-size: 100% 100%;
            }
          }
          .text {
            text-align: center;
            font-size: .28rem;
            line-height: .4rem;
            padding: .2rem 0 .3rem;
          }
        }
      }
    }
    .footer {
      padding: .25rem .32rem;
      background:rgba(255,255,255,1);
      box-shadow:0px -8px 10px rgba(0,0,0,0.06);
      .submit-btn {
        height: .9rem;
        background:rgba(101,130,255,1);
        border-radius: .1rem;
        text-align: center;
        line-height: .9rem;
        font-size: .32rem;
        color: #fff;
      }
    }
  }
}
</style>
<style lang="less">
  .picker-slot-wrapper {
    font-size: .28rem;
  }
</style>
<template>
  <div class="entry-applications">
    <div :class="{header: true, short: !isTop}">
      <div class="logo"><img :src="companyInfo.logo"/></div>
      <div class="name">
        <div :class="{hide: !isTop}">{{ companyInfo.companyName }}</div>
        <h3>入职申请表</h3>
      </div>
    </div>
    <div class="content main-content" ref="content" @scroll="handleScroll">
      <!-- 组织信息 -->
      <div class="item">
        <div class="title"><h5>组织信息</h5></div>
        <ul class="form-list">
          <li>
            <div class="label">
              <span>{{ hasRecommend ? '推荐人手机' : '所在机构' }}</span>
              <div :class="{switch: true, on: hasRecommend}" @click="hasRecommend = !hasRecommend">无推荐人</div>
            </div>
            <div v-if="hasRecommend" class="input-txt"><input type="tel" class="value" v-model="recommendMobile" placeholder="请输入手机号" @focus="phoneFocus" @blur="rulePhone"/></div>
            <div v-else class="input-txt" @click="openOrganBox">
              <span :class="{'value': true, 'is-null': !formData.organ}">{{ formData.organ | organFilter }}</span>
              <svg class="icon icon-arr" aria-hidden="true">
                <use xlink:href="#icon_more"></use>
              </svg>
            </div>
          </li>
        </ul>
        <div class="tip">{{ recommendErrMsg }}</div>
      </div>
      <!-- 基本信息 -->
      <div class="item">
        <div class="title"><h5>基本信息</h5></div>
        <ul class="form-list last-no-border">
          <li>
            <div class="label"><span>姓名</span></div>
            <div class="input-txt"><input class="value" v-model="formData.name" @focus="handleFocus" @blur="handleblur" placeholder="请输入姓名" /></div>
          </li>
          <li>
            <div class="label"><span>性别</span></div>
            <radio-box className="input-txt" v-model="formData.gender" keys="gender"></radio-box>
          </li>
          <li>
            <div class="label"><span>生日</span></div>
            <div class="input-txt" @click="selDate('birthday')">
              <span :class="{'value': true, 'is-null': !formData.birthday}">{{ formData.birthday | isNull }}</span>
              <svg class="icon icon-birth" aria-hidden="true"><use xlink:href="#icon_birth"></use></svg>
            </div>
          </li>
          <li>
            <div class="label"><span>婚姻状况</span></div>
            <select-box className="input-txt" classOverflow="content" label="婚姻状况" keys="marriage" v-model="formData.marriage"></select-box>
          </li>
          <li>
            <div class="label"><span>居住地址</span></div>
            <div class="input-txt" @click="openCityBox">
              <span :class="{'value': true, 'is-null': !formData.familyGeneralAddress}">{{ formData.familyGeneralAddress | isNull }}</span>
              <svg class="icon icon-arr" aria-hidden="true">
                <use xlink:href="#icon_more"></use>
              </svg>
            </div>
          </li>
          <li>
            <div class="label"><span>详细住址</span></div>
            <div class="input-txt"><input class="value" v-model="formData.familyDetailedAddress" @focus="handleFocus" @blur="handleblur" placeholder="请填写道路、楼栋、门牌号" /></div>
          </li>
          <li>
            <div class="label"><span>手机号</span></div>
            <div class="input-txt"><input class="value" type="tel" v-model="formData.mobile" @focus="handleFocus" @blur="handleblur" placeholder="请输入手机号" /></div>
          </li>
          <li>
            <div class="label"><span>微信号（选填）</span></div>
            <div class="input-txt"><input class="value" v-model="formData.wechatCode" @focus="handleFocus" @blur="handleblur" placeholder="请输入微信号" /></div>
          </li>
          <li>
            <div class="label"><span>电子邮箱</span></div>
            <div class="input-txt"><input class="value" v-model="formData.email" @focus="handleFocus" @blur="handleblur" placeholder="请输入电子邮箱" /></div>
          </li>
        </ul>
      </div>
      <!-- 教育经历 -->
      <div class="item">
        <div class="title">
          <h5>教育经历</h5>
          <span>请从最高学历填起</span>
        </div>
        <ul v-for="(item, index) in educational" :key="'edu' + index" :class="{'form-list': true, 'last-no-border': index === educational.length - 1}">
          <li>
            <div class="label"><span>学历</span></div>
            <select-box className="input-txt" classOverflow="content" label="学历" keys="education" v-model="item.education"></select-box>
          </li>
          <li>
            <div class="label"><span>学位（选填）</span></div>
            <div class="input-txt"><input class="value" v-model="item.academicDegree" @focus="handleFocus" @blur="handleblur" placeholder="请输入学位名称" /></div>
          </li>
          <li>
            <div class="label"><span>就读学校</span></div>
            <div class="input-txt"><input class="value" v-model="item.school" @focus="handleFocus" @blur="handleblur" placeholder="请输入学校全称" /></div>
          </li>
          <li>
            <div class="label"><span>毕业时间</span></div>
            <div class="input-txt" @click="selDate('graduationDate', 'educational', index)">
              <span :class="{'value': true, 'is-null': !item.graduationDate}">{{ item.graduationDate | isNull }}</span>
              <svg class="icon icon-birth" aria-hidden="true"><use xlink:href="#icon_birth"></use></svg>
            </div>
          </li>
          <li>
            <div class="label"><span>入学时间</span></div>
            <div class="input-txt" @click="selDate('enrollmentDate', 'educational', index)">
              <span :class="{'value': true, 'is-null': !item.enrollmentDate}">{{ item.enrollmentDate | isNull }}</span>
              <svg class="icon icon-birth" aria-hidden="true"><use xlink:href="#icon_birth"></use></svg>
            </div>
          </li>
        </ul>
      </div>
      <div class="item add-btn" @click="addItem('educational')">
        <svg class="icon icon-add-circle" aria-hidden="true">
          <use xlink:href="#icon_add_circle"></use>
        </svg>
        <span>再添加一条教育经历</span>
      </div>
      <!-- 工作经历 -->
      <div class="item">
        <div class="title">
          <h5>工作经历</h5>
          <span>请从最近工作经历填起</span>
        </div>
        <ul v-for="(item, index) in work" :key="'work' + index" :class="{'form-list': true, 'last-no-border': index === work.length - 1}">
          <li>
            <div class="label"><span>工作单位</span></div>
            <div class="input-txt"><input class="value" @focus="handleFocus" @blur="handleblur" v-model="item.organization" placeholder="请输入单位名称" /></div>
          </li>
          <li>
            <div class="label"><span>职位</span></div>
            <div class="input-txt"><input class="value" @focus="handleFocus" @blur="handleblur" v-model="item.position" placeholder="请输入职位名称" /></div>
          </li>
          <li>
            <div class="label"><span>薪资</span></div>
            <div class="input-txt"><input class="value" type="tel" @focus="handleFocus" @blur="handleblur" v-model="item.salary" placeholder="请输入平均月薪" /></div>
          </li>
          <li>
            <div class="label"><span>离职时间</span></div>
            <div class="input-txt" @click="selDate('quitDate', 'work', index)">
              <span :class="{'value': true, 'is-null': !item.quitDate}">{{ item.quitDate | isNull }}</span>
              <svg class="icon icon-birth" aria-hidden="true"><use xlink:href="#icon_birth"></use></svg>
            </div>
          </li>
          <li>
            <div class="label"><span>入职时间</span></div>
            <div class="input-txt" @click="selDate('joinDate', 'work', index)">
              <span :class="{'value': true, 'is-null': !item.joinDate}">{{ item.joinDate | isNull }}</span>
              <svg class="icon icon-birth" aria-hidden="true"><use xlink:href="#icon_birth"></use></svg>
            </div>
          </li>
          <li>
            <div class="label"><span>证明人</span></div>
            <div class="input-txt"><input class="value" @focus="handleFocus" @blur="handleblur" v-model="item.witness" placeholder="请输入证明人姓名" /></div>
          </li>
          <li>
            <div class="label"><span>证明人职位</span></div>
            <div class="input-txt"><input class="value" @focus="handleFocus" @blur="handleblur" v-model="item.witnessPosition" placeholder="请输入证明人职位" /></div>
          </li>
          <li>
            <div class="label"><span>证明人手机</span></div>
            <div class="input-txt"><input type="tel" class="value" @focus="handleFocus" @blur="handleblur" v-model="item.witnessMobile" placeholder="请输入证明人手机号" /></div>
          </li>
        </ul>
      </div>
      <div class="item add-btn" @click="addItem('work')">
        <svg class="icon icon-add-circle" aria-hidden="true">
          <use xlink:href="#icon_add_circle"></use>
        </svg>
        <span>再添加一条工作经历</span>
      </div>
      <!-- 紧急联系人 -->
      <div class="item">
        <div class="title"><h5>紧急联系人</h5></div>
        <ul v-for="(item, index) in contact" :key="'contact' + index" :class="{'form-list': true, 'last-no-border': index === contact.length - 1}">
          <li>
            <div class="label"><span>关系</span></div>
            <select-box className="input-txt" classOverflow="content" label="关系" keys="relation" v-model="item.relation"></select-box>
          </li>
          <li>
            <div class="label"><span>姓名</span></div>
            <div class="input-txt"><input @focus="handleFocus" @blur="handleblur" class="value" v-model="item.fullname" placeholder="请输入姓名" /></div>
          </li>
          <li>
            <div class="label"><span>手机号</span></div>
            <div class="input-txt"><input @focus="handleFocus" @blur="handleblur" class="value" type="tel" v-model="item.mobile" placeholder="请输入手机号" /></div>
          </li>
        </ul>
      </div>
      <div class="item add-btn" @click="addItem('contact')">
        <svg class="icon icon-add-circle" aria-hidden="true">
          <use xlink:href="#icon_add_circle"></use>
        </svg>
        <span>再添加一名紧急联系人</span>
      </div>
      <!-- 上传证件 -->
      <div class="item">
        <div class="title"><h5>上传证件</h5></div>
        <ul class="upload-list">
          <li>
            <upload-img className="upload-item" v-model="personalForm.type0" />
            <p class="text">身份证正面</p>
          </li>
          <li>
            <upload-img className="upload-item" v-model="personalForm.type1" />
            <p class="text">身份证背面</p>
          </li>
          <li>
            <upload-img className="upload-item" v-model="personalForm.type2" />
            <p class="text">最高学历证</p>
          </li>
          <li>
            <upload-img className="upload-item" v-model="personalForm.type4" />
            <p class="text">离职证明</p>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="submit-btn" @click="submitFn">提交表单</div>
      </div>
    </div>
    <city-picker v-if="cityData && cityData.length" :show="cityBoxShow" :data="cityData" @change="handleCity" @show="v => closePickerBox(v, 1)"></city-picker> 
    <organ-picker v-if="organList && organList.length" :show="organBoxShow" :data="organList" @change="handleOrgan" @show="closePickerBox"></organ-picker>      
    <mt-datetime-picker ref="picker" type="date" :startDate="startDate" :endDate="endDate" v-model="pickerValue" @visible-change="datePickerBoxChange" @confirm="handleConfirm" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"></mt-datetime-picker>
  </div>
</template>

<script>
import radioBox from "@/components/Radio"
import selectBox from "@/components/Select"
import cityPicker from "@/components/CityPicker"
import organPicker from "@/components/OrganPicker"
import uploadImg from "@/components/UploadImg"
import rules from "@/utils/validationRules"
import { getCompanyInfo, getCompanyOrgan, getUserIsExist, saveUserBaseInfo, savePersonalInfo, saveEducationalInfo, saveWorkInfo, saveContactInfo, savePersonalDescInfo } from "@/api/entry"
import { getCityData } from "@/api/map"
export default {
  data() {
    return {
      companyId: this.$route.query.companyId || '',
      companyInfo: {},
      isTop: true, // 是否在顶部
      hasRecommend: true, // 是否有推荐人
      scrollTimeout: null, // 更新顶部状态时间延迟,
      pickerValue: '', // 时间选择器
      recommendState: true,
      recommendId: '',
      userId: '',
      pickerKey: '',
      endDate:new Date(),
      startDate:new Date("1950-01-01"),
      cityData: [],
      cityBoxShow: false,
      organBoxShow: false,
      organList: [],
      recommendMobile: '',
      formData: {
        name: '',
        gender: '0',
        birthday: '',
        marriage: '',
        familyGeneralAddress: '',
        familyDetailedAddress: '',
        mobile: '',
        email: '',
        organ: '',
        wechatCode: ''
      },
      educational: [],
      work: [],
      contact: [],
      personalForm: {
        type0: '',
        type1: '',
        type2: '',
        type4: ''
      },
      formDataItem: {
        name: {required: true,  message: '请输入姓名'},
        mobile: {required: true,  message: '请输入手机号', pattern: rules.mobile, errMsg: '手机号格式错误'},
        birthday: {required: true,  message: '请选择生日'},
        marriage: {required: true,  message: '请选择婚姻状况'},
        familyGeneralAddress: {required: true,  message: '请选择居住地址'},
        familyDetailedAddress: {required: true,  message: '请输入道路、楼栋、门牌号'},
        email: {required: true,  message: '请输入电子邮箱', pattern: rules.email, errMsg: '电子邮箱格式错误'}
      },
      educationalItem: {
        education: {required: true,  message: '请选择学历'},
        academicDegree: {required: false},
        school: {required: true,  message: '请输入学校全称'},
        graduationDate: {required: true,  message: '请选择毕业时间'},
        enrollmentDate: {required: true,  message: '请选择入学时间', timeRule: 'graduationDate', timeErrMsg: '毕业时间不得早于入学时间'}
      },
      workItem: {
        organization: {required: true,  message: '请输入单位名称'},
        position: {required: true,  message: '请输入职位名称'},
        salary: {required: true,  message: '请输入薪资', pattern: rules.number, errMsg: '薪资为大于零的正整数'},
        quitDate: {required: true,  message: '请选择离职时间'},
        joinDate: {required: true,  message: '请选择入职时间', timeRule: 'quitDate', timeErrMsg: '离职时间不得早于入职时间'},
        witness: {required: true,  message: '请输入证明人姓名'},
        witnessPosition: {required: true,  message: '请输入证明人职位'},
        witnessMobile: {required: true,  message: '请输入证明人手机号', pattern: rules.mobile, errMsg: '证明人手机号格式错误'}
      },
      contactItem: {
        relation: {required: true,  message: '请选择联系人关系'},
        fullname: {required: true,  message: '请输入联系人姓名'},
        mobile: {required: true,  message: '请输入联系人手机号', pattern: rules.mobile, errMsg: '联系人手机号格式错误'}
      },
      personalFormItem: {
        type0: {required: true,  message: '请上传身份证正面'},
        type1: {required: true,  message: '请上传身份证背面'},
        type2: {required: true,  message: '请上传最高学历证'},
      },
      isFocus: false
    }
  },
  components: {
    radioBox,
    selectBox,
    cityPicker,
    organPicker,
    uploadImg
  },
  filters: {
    isNull (val) {
      return val || '请选择'
    },
    organFilter (val) {
      return val && val.name ? val.name : '请选择机构'
    }
  },
  computed: {
    recommendErrMsg () {
      if (this.hasRecommend && this.recommendMobile && !this.recommendState) {
        return rules.mobile.test(this.recommendMobile) ? '系统内未检索到该手机号，请重新输入' : '推荐人手机号格式错误'
      }
      return ''
    }
  },
  methods: {
    // 查询公司信息
    getCompanyInfoFn() {
      getCompanyInfo({
        companyId: this.companyId
      }).then(res => {
        this.companyInfo = {
          companyName: res.companyForShort || res.name,
          logo: res.logo
        }
        this.getCompanyOrganFn()
        this.getCityDataFn()
        this.addItem('educational')
        this.addItem('work')
        this.addItem('contact')
      })
    },
    // 解决ios键盘留白问题
    handleblur (event) {
      let e = event.currentTarget;
      this.isFocus = false
      setTimeout(() => {
        if (!this.isFocus) {
          e.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
          });
        }
      }, 100);
    },
    handleFocus () {
      this.isFocus = true
    },
    // 获取行政区
    getCityDataFn () {
      getCityData().then(res => {
        if (res.status === '1') {
          this.cityData = res.districts[0].districts
        } else {
          this.Toast('高德行政区获取失败')
        }
      });
    },
    // 获取分公司
    getCompanyOrganFn () {
      getCompanyOrgan({
        companyId: this.companyId
      }).then(res => {
        this.organList = res
      })
    },
    phoneFocus () {
      this.isFocus = true
      this.recommendState = true
    },
    rulePhone (e) {
      this.handleblur(e)
      let rMobile = this.recommendMobile
      if (!rMobile) return false
      if (rules.mobile.test(rMobile)) {
        this.getUserIsExistFn()
      } else {
        this.recommendState = false
      }
    },
    // 查询手机号是否存在当前公司
    getUserIsExistFn () {
      getUserIsExist({
        companyId: this.companyId,
        mobile: this.recommendMobile
      }).then(res => {
        this.recommendState = res.state
        this.recommendId = res.recommendid
      })
    },
    // 滚动标题
    handleScroll () {
      let scrollTop = this.$refs.content.scrollTop
      if (!this.scrollTimeout && this.isTop !== (scrollTop < 10)) {
        this.isTop = scrollTop < 10
        this.scrollTimeout = setTimeout(() => {
          clearTimeout(this.scrollTimeout)
          this.scrollTimeout = null
        }, 300)
      }
    },
    // 提交验证
    submitFn() {
      if (this.hasRecommend) {
        if (this.recommendErrMsg || !this.recommendMobile) {
          return this.recommendMobile ? this.Toast(this.recommendErrMsg) : this.Toast('请输入推荐人手机号')
        }
      } else if (!(this.formData.organ && this.formData.organ.name)) {
        return this.Toast('请选择机构')
      }
      this.ruleItem('formData').then(res => {
        return this.ruleItem('educational')
      }).then(res => {
        return this.ruleItem('work')
      }).then(res => {
        return this.ruleItem('contact')
      }).then(res => {
        return this.ruleItem('personalForm')
      }).then(res => {
        this.saveData()
      }).catch((err) => {
        // 失败的情况
        this.Toast(err)
      })
    },
    saveData () {
      let baseForm = this.formData
      saveUserBaseInfo({
        mobile: baseForm.mobile,
        name: baseForm.name,
        companyId: this.companyId,
        recommendid: this.recommendId,
        state: 3,
        orgIds: (baseForm.organ && baseForm.organ.id) ? baseForm.organ.id : '',
        email: baseForm.email
      }).then(res => {
        this.userId = res
        return savePersonalInfo({
          userId: this.userId,
          gender: baseForm.gender, 
          birthday: baseForm.birthday,
          marriage: baseForm.marriage,
          familyGeneralAddress: baseForm.familyGeneralAddress,
          familyDetailedAddress: baseForm.familyDetailedAddress,
          wechatCode: baseForm.wechatCode
        })
      }).then(res => {
        return saveEducationalInfo({
          userId: this.userId,
          list: this.educational
        })
      }).then(res => {
        return saveWorkInfo({
          userId: this.userId,
          list: this.work
        })
      }).then(res => {
        return saveContactInfo({
          userId: this.userId,
          list: this.contact
        })
      }).then(res => {
        let formD = this.personalForm
        let formList = []
        for (let item in formD) {
          if (formD[item]) {
            formList.push({
              certificateType: item.substring(4, 5),
              fileUrl: formD[item]
            })
          }
        }
        return savePersonalDescInfo({
          userId: this.userId,
          list: formList
        })
      }).then(res => {
        this.Toast('申请成功！')
        setTimeout(() => {
          this.$router.go(0)
        }, 2000);
      })
    },
    moveFn (e) {
      e.preventDefault()
    },
    // 禁止底部滑动
    setOverflow () {
      this.$refs.content.style.overflow = 'hidden'
      document.body.addEventListener('touchmove', this.moveFn, {passive:false})
    },
    // 释放底部滑动
    resetOverflow () {
      this.$refs.content.style.overflow = 'auto'
      document.body.removeEventListener('touchmove', this.moveFn, {passive:false})
    },
    //打开日期选择弹窗
    selDate(keys, type, index){
      this.pickerKey = arguments
      if (this.pickerKey.length === 1) {
        this.pickerValue = this.formData[keys] ? new Date(this.formData[keys]) : new Date('1985-07-01')
      } else {
        this.pickerValue = this[type][index][keys] ? new Date(this[type][index][keys]) : new Date()
      }
      this.setOverflow()
      this.$refs.picker.open()
    },
    handleConfirm (value) {
      let keyList = this.pickerKey
      if (keyList.length === 1) {
        this.formData[keyList[0]] = value ? this.getDate(value) : ''
      } else {
        this[keyList[1]][keyList[2]][keyList[0]] = value ? this.getDate(value) : ''
      }
    },
    // 时间选择器关闭 
    datePickerBoxChange (val) {
      if (!val) {
        this.resetOverflow()
        // 解决时间选择器初始化时间不为一月份bug
        this.pickerValue = new Date('1985-01-01')
      }
    },
    getDate (time) {
      const d = new Date(time)
      const year = d.getFullYear()
      const month = this.getHandledValue(d.getMonth() + 1)
      const date = this.getHandledValue(d.getDate())
      return year + '-' + month + '-' + date
    },
    getHandledValue (num) {
      return num < 10 ? '0' + num : num
    },
    addItem(type) {
      let formT = this[type]
      let itemForm = {}
      for (let item in this[type + 'Item']) {
        itemForm[item] = ''
      }
      if (formT.length) {
        this.ruleItem(type).then(res => {
          formT.push(itemForm)
        }).catch((err) => {
          // 失败的情况
          this.Toast(err)
        })
      } else {
        formT.push(itemForm)
      }
    },
    ruleItem (type) {
      let ruleF = this[type + 'Item']
      let formD = this[type]
      return new Promise((resolve, reject) => {
        if (formD instanceof Array) {
          for (let item of formD) {
            for (let it in item) {
              let pData = ruleF[it]
              // 验证是否存在
              if (pData.required && !item[it]) {
                reject(pData.message)
              }
              // 校验格式
              if (Object.prototype.toString.call(pData.pattern).slice(8, -1).toLowerCase() === 'regexp' && !pData.pattern.test(item[it])) {
                reject(pData.errMsg)
              }
              // 校验时间
              if (pData.timeRule && pData.timeErrMsg && item[it] && item[pData.timeRule] && !(new Date(item[it]) < new Date(item[pData.timeRule]))) {
                reject(pData.timeErrMsg)
              }
            }
          }
          resolve()
        } else {
          for (let item in formD) {
            let pData = ruleF[item]
            // 验证是否存在
            if (pData && pData.required && !formD[item]) {
              reject(pData.message)
            }
            // 校验格式
            if (pData && Object.prototype.toString.call(pData.pattern).slice(8, -1).toLowerCase() === 'regexp' && !pData.pattern.test(formD[item])) {
              reject(pData.errMsg)
            }
          }
          resolve()
        }
      })
    },
    closePickerBox (v, type) {
      this.resetOverflow()
      if (type === 1) this.cityBoxShow = false
      else this.organBoxShow = false
    },
    openCityBox () {
      if (!(this.cityData && this.cityData.length)) return this.Toast('未获取到城市信息')
      this.setOverflow()
      this.cityBoxShow = true
    },
    handleCity(val) {
      this.formData.familyGeneralAddress = val.name.toString()
    },
    openOrganBox () {
      if (!(this.organList && this.organList.length)) return this.Toast('未获取到组织信息')
      this.setOverflow()
      this.organBoxShow = true
    },
    handleOrgan(val) {
      this.formData.organ = val
    },
  },
  mounted() {
    if (!this.companyId) return this.Toast('未获取到公司信息')
    this.getCompanyInfoFn()
  }
}
</script>
