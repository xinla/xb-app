<template>
  <div class="btn-bottom">
    <div v-if="cover" class="cover-wrap">
      <img :src="cover" />
      <div class="title-cover">{{title}}</div>
    </div>
    <div class="member-wrap">
      <div class="member">
        <span class="semicircle"></span>
        <span style="margin-right：-8px;">敬呈</span>
        <span class="arrows arrows-left"></span>
        <svg class="icon icon_letter" aria-hidden="true">
          <use xlink:href="#icon_letter" />
        </svg>
        <span class="arrows arrows-right"></span>
        <span>{{result.applicantName}} {{ $route.query.type ? result.respectName : result.sex === 0 ? "先生" : result.sex === 1 ? "女士" : '未知'}}</span>
      </div>

      <div class="relation-wrap">
        <div class="title">
          <svg class="icon icon-title icon_loverelationship" aria-hidden="true">
            <use xlink:href="#icon_loverelationship" />
          </svg>
          <span>关爱关系</span>
        </div>
        <ul class="relation-ul">
          <li class="relation-li">
            <p class="key">投保人</p>
            <p class="value">{{result.applicantName}}</p>
          </li>
          <li class="relation-li">
            <p class="key">被保人</p>
            <p class="value">{{result.insuredName}}</p>
          </li>
          <li class="relation-li">
            <p class="key">被保人年龄</p>
            <p class="value">{{result.insuredAge}}</p>
          </li>
          <li class="relation-li">
            <p class="key">关系</p>
            <p class="value">{{result.applicantRelationInsured}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="container1">
      <div class="title title-boder">
        <svg class="icon icon-title icon_toubaoplane" aria-hidden="true">
          <use xlink:href="#icon_toubaoplane" />
        </svg>
        <span>投保计划</span>
      </div>

      <div v-for="(item, index) in result.vitPolicyRightRiskVoList" :key="index">
        <div class="title">
          <svg v-if="index === 0" class="icon icon-title icon_zhuxian" aria-hidden="true" :key="0">
            <use xlink:href="#icon_zhuxian" />
          </svg>
          <svg v-if="index === 1" class="icon icon-title icon_fuxian" aria-hidden="true" :key="1">
            <use xlink:href="#icon_fuxian" />
          </svg>
          <span>{{item.productName}}</span>
        </div>
        <div class="content">
          <div class="item-wrap">
            <div class="item">
              <p class="key">保障额度</p>
              <p class="value">{{item.guaranteeValue || 0}}万元</p>
            </div>
            <div class="item">
              <p class="key">保障期间</p>
              <p class="value">{{$Tool.transInsurancePeriod(item.policyPeriodValue)}}</p>
            </div>
          </div>
          <div class="item-wrap">
            <div class="item">
              <p class="key">交费期间</p>
              <p class="value">{{$Tool.transPaymentPeriod(item.paymentPeriodValue)}}</p>
            </div>
            <div class="item">
              <p class="key">交费方式</p>
              <p class="value">{{item.paymentMethodName}}</p>
            </div>
          </div>
          <div class="item-wrap" style="line-height:1.4rem;">
            <div class="item">
              <p class="key">保费</p>
            </div>
            <div class="item">
              <span class="blue">￥{{item.premium}}</span>
              <span class="key">元/年</span>
            </div>
          </div>
        </div>
        <div
          class="blue ac"
          style="padding: .4rem 0 .2rem;"
          @click="getPolicyImg(item.productId)"
        >查看保单条款详情></div>
      </div>

      <!-- <div class="title">
        <svg class="icon icon-title icon_fuxian" aria-hidden="true">
          <use xlink:href="#icon_fuxian"></use>
        </svg>
        <span>上海把巨额玩股票我就给我讲</span>
      </div>
      <div class="content">
        <div class="item-wrap">
          <div class="item">
            <p class="key">保险额度</p>
            <p class="value">100万</p>
          </div>
          <div class="item">
            <p class="key">保险额度</p>
            <p class="value">100万</p>
          </div>
        </div>
        <div class="item-wrap">
          <div class="item">
            <p class="key">保险额度</p>
            <p class="value">100万</p>
          </div>
          <div class="item">
            <p class="key">保险额度</p>
            <p class="value">100万</p>
          </div>
        </div>
        <div class="item-wrap" style="line-height:1.4rem;">
          <div class="item">保费</div>
          <div class="item">
            <span class="blue ac">￥1000</span>万/年
          </div>
        </div>
      </div>
      <div class="blue ac" style="padding: .4rem 0 .2rem;">查看保单条款详情></div>-->
    </div>

    <div class="container1">
      <div class="title title-boder" style="border-bottom: 1px solid #f1f3f5;">
        <svg class="icon icon-title icon_liyi" aria-hidden="true">
          <use xlink:href="#icon_liyi" />
        </svg>
        <span>利益说明</span>
      </div>

      <div style="margin: .8rem 0 .3rem;">
        <mt-range
          v-model="age"
          :min="query.insuredCurrentAge"
          :max="query.insuredMaxAge"
          :step="1"
          :key="query.insuredCountAge"
        >
          <div
            slot="start"
            style="margin-right: 10px;"
            @click="age > query.insuredCurrentAge && age--"
          >
            <svg
              class="icon icon_reduce_circle"
              aria-hidden="true"
              style="margin-right: 5px;vertical-align: middle;"
            >
              <use xlink:href="#icon_reduce_circle" />
            </svg>
            {{query.insuredCurrentAge}}
          </div>
          <div slot="end" @click="age < query.insuredMaxAge && age++">
            <svg
              class="icon icon_add_circle"
              aria-hidden="true"
              style="margin-left: 10px;vertical-align: middle;"
            >
              <use xlink:href="#icon_add_circle" />
            </svg>
          </div>
        </mt-range>
      </div>

      <div v-for="(item, index) in result.vitPolicyRightRiskVoList" :key="index">
        <div class="title">
          <span>{{item.productName}}</span>
        </div>
        <div class="content">
          <div class="title2">
            <svg class="icon icon-title icon_baofei" aria-hidden="true">
              <use xlink:href="#icon_baofei" />
            </svg>
            <span>保费</span>
          </div>
          <div style="line-height: 1rem;">
            <div class="item">
              <p class="key al">当期保费</p>
            </div>
            <div class="item">
              <p class="value ar">{{item.currentPremium}}元</p>
            </div>
          </div>
          <div style="line-height: 1rem;">
            <div class="item">
              <p class="key al">累计保费</p>
            </div>
            <div class="item">
              <p class="value ar">{{item.totalPremium}}元</p>
            </div>
          </div>
        </div>

        <div
          class="content"
          v-for="(item, index) in JSON.parse(item.insurableInterest)"
          :key="index"
        >
          <div class="title2">
            <svg class="icon icon-title icon_bao" aria-hidden="true">
              <use xlink:href="#icon_bao" />
            </svg>
            <span>{{item.scheduleName}}</span>
          </div>
          <div class="item-wrap2" style="padding: .2rem 0;">
            <div v-for="(unit, unqiue) in item.content" class="item-wrap2" :key="unqiue">
              <div class="item item-left">
                <p class="key al">{{unit.title}}</p>
              </div>
              <div class="item item-right">
                <p class="yellow ar">{{unit.algorithmValue}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="title">
        <span>长城附加意外上海保险（2014）</span>
      </div>
      <div class="content">
        <div class="title2">
          <svg class="icon icon-title icon_baofei" aria-hidden="true">
            <use xlink:href="#icon_baofei"></use>
          </svg>
          <span>保费</span>
        </div>
        <div style="line-height: 1rem;">
          <div class="item">
            <p class="key al">当前保费</p>
          </div>
          <div class="item">
            <p class="value ar">100万</p>
          </div>
        </div>
        <div style="line-height: 1rem;">
          <div class="item">
            <p class="key al">保险额度</p>
          </div>
          <div class="item">
            <p class="value ar">100万</p>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="title2">
          <svg class="icon icon-title icon_bao" aria-hidden="true">
            <use xlink:href="#icon_bao"></use>
          </svg>
          <span>保险金</span>
        </div>
        <div class="item-wrap2" style="padding: .2rem 0;">
          <div v-for="item in 10" :key="item" class="item-wrap2">
            <div class="item">
              <p class="key al">
                未从公费、社保进行报销，
                赔付70%医疗费用
              </p>
            </div>
            <div class="item">
              <p class="yellow ar">100万</p>
            </div>
          </div>
        </div>
      </div>-->

      <div class="content" v-if="result.vitPolicyRightRiskVoList.length > 1">
        <div class="title2">
          <svg class="icon icon-title icon_baofei" aria-hidden="true">
            <use xlink:href="#icon_baofei" />
          </svg>
          <span>合计保费</span>
        </div>
        <div class="item-wrapitem-wrap2">
          <div class="item-wrap2">
            <div class="item">
              <p class="key al">合计当期保费</p>
            </div>
            <div class="item">
              <p class="yellow ar">{{result.currentTotalPremium}}元</p>
            </div>
          </div>
          <div class="item-wrap2">
            <div class="item">
              <p class="key al">合计累计保费</p>
            </div>
            <div class="item">
              <p class="yellow ar">{{result.countTotalPremium}}元</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content card" v-if="$route.query.proposalId">
        <div class="head">
          <img v-if="result.agentHeadImage" :src="result.agentHeadImage" class="head-photo" />
          <div v-else class="head-photo">{{result.agentName.substr(-2, 2)}}</div>

          <b class="name">{{result.agentName}}</b>
          <span
            class="position"
            v-for="(item, index) of result.position"
            :key="index"
          >{{item}}</span>
        </div>
        <div>{{result.agentCompany}}</div>
        <div class="gray">
          <svg class="icon icon_phone" aria-hidden="true">
            <use xlink:href="#icon_phone" />
          </svg>
          <a :href="'tel:' + result.agentMobile">{{result.agentMobile ? '+86 ' + result.agentMobile : '暂未联系方式'}}</a>
        </div>
        <div class="gray slogan">{{result.companySlogan}}</div>
      </div>
    </div>
    <!-- v-if="imgList.length"  -->
    <!-- <div v-if="imgList.length" class="mask" @click="imgList = []">
      <div class="cc">
        <mt-tab-container v-model="active" swipeable>
          <mt-tab-container-item v-for="(item, index) of imgList" :id="index" :key="index">
            <img :src="item" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>-->

    <img
      ref="preview-img"
      v-for="(item, index) in imgList"
      style="display: none;"
      preview="1"
      :src="item"
      :key="index"
    />
  </div>
</template>

<script>
import {
  getBeneficiaryDetail,
  getInsuredAgeRange,
  getBeneficiaryDetailByProposalId,
  getInsuredAgeRangeByProposalId,
  getBeneficiaryCover,
  getPolicyDetail
} from "@/api/beneficiary";
export default {
  components: {},
  props: {},
  data() {
    return {
      query: {
        id: this.$route.query.id || this.$route.query.proposalId,
        insuredCurrentAge: 0,
        insuredMaxAge: 0,
        insuredCountAge: undefined,
        token: this.$route.query.token
      },
      age: undefined,
      result: {
        agentName: '',
        vitPolicyRightRiskVoList: []
      },
      timer: undefined,
      cover: "",
      title: "",
      active: 0,
      imgList: []
    };
  },
  computed: {},
  watch: {
    age() {
      // console.log(1)
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.query.insuredCountAge = this.age;
        this.getData();
      }, 500);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // let _this = this
      //   this.Toast({
      //   message: _this.query.token,
      //   duration: 3000
      // })
      (this.$route.query.proposalId
        ? getInsuredAgeRangeByProposalId(this.query)
        : getInsuredAgeRange(this.query)
      ).then(res => {
        // console.log(res)
        this.query.insuredCurrentAge = res.currentAge;
        this.query.insuredMaxAge = res.maxAge;
        this.query.insuredCountAge = res.currentAge;
        this.age = res.currentAge;
        // this.getData();
      });
    },
    getData() {
      // console.log(this.query)
      (this.$route.query.proposalId
        ? getBeneficiaryDetailByProposalId(this.query)
        : getBeneficiaryDetail(this.query)
      ).then(res => {
        // debugger
        console.log(res);
        this.result = res;
        // 代理人职位转换
        this.result.position = res.position.split(',')
      });
      this.$route.query.type &&
        getBeneficiaryCover(this.query).then(res => {
          // 获取封面
          res && ((this.cover = res.cover), (this.title = res.title));
        });
    },
    getPolicyImg(data) {
      getPolicyDetail({ id: data, token: this.$route.query.token }).then(
        res => {
          this.imgList = res.policyWordingImages.split(",");
          this.$nextTick(() => {
            // console.log(this.$refs['preview-img'][0])

            // 模拟调用vue-photo-preview点击事件，不可随意更改
            this.$previewRefresh();
            let e = {
              target: this.$refs["preview-img"][0]
            };
            this.onThumbnailsClick(e);
          });
          // console.log(this.imgList)
        }
      );
    }
  }
};
</script>
<style lang="less" scoped>
.cover-wrap {
  position: relative;
  .title-cover {
    position: absolute;
    width: 100%;
    height: 1.2rem;
    bottom: 15%;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    line-height: 1.2rem;
    color: #fff;
    font-size: 0.38rem;
  }
}
.member-wrap {
  border: 5px solid #f1f3f5;
  border-bottom-width: 0.1rem;
}
.member {
  padding: 1rem 0.3rem 1rem 0;
  display: flex;
  justify-content: space-between;
}
.semicircle {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: #f1f3f5;
  left: -0.15rem;
  position: relative;
}
.icon {
  font-size: 0.4rem;
}
.arrows {
  display: inline-block;
  width: 20%;
  height: 0.3rem;
  margin: 0 0.3rem;
  border: 1px solid #f1f3f5;
  border-top-color: transparent;
}
.arrows-left {
  transform: skew(-30deg);
  border-right-color: transparent;
}
.arrows-right {
  transform: skew(30deg);
  border-left-color: transparent;
}
.relation-wrap {
  border-top: 2px dashed #f1f3f5;
}
.title {
  padding: 0.4rem 0;
  text-align: left;
}
.icon-title {
  margin: 0 0.3rem;
}
.relation-ul {
  display: flex;
  justify-content: space-between;
  line-height: 0.65rem;
  padding-bottom: 0.3rem;
  .relation-li {
    flex: auto;
    text-align: center;
    border-right: 1px solid #f1f3f5;
    &:last-child {
      border: 0;
    }
    .key {
      color: #a6abb7;
    }
  }
}

.container1 {
  border-bottom: 0.1rem solid #f1f3f5;
  padding: 0 0.3rem;
  .icon-title {
    margin-left: 0;
  }
  .title-boder {
    border-bottom: 1px solid #f1f3f5;
  }
  .title2 {
    padding: 0.2rem 0;
    text-align: left;
    .title-boder;
  }
  .content {
    padding: 0 0.3rem;
    margin-bottom: 0.2rem;
    text-align: center;
    line-height: 0.7rem;
    box-shadow: 0px 0px 16px 0px #f1f3f5;
    border-radius: 0.2rem;
    .item-wrap {
      .title-boder;
    }
    .item {
      display: inline-block;
      width: 50%;
      vertical-align: middle;
      .key {
        color: #a6abb7;
      }
    }
    .item-left {
      width: 65%;
    }
    .item-right {
      width: 35%;
    }
    .item-wrap2 {
      padding: 0.2rem 0;
      line-height: 0.4rem;
    }
  }
  .blue {
    color: #6582ff;
  }
  .yellow {
    color: #fcb33f;
  }

  .card {
    overflow: hidden;
    text-align: left;
    .head {
      margin-top: 0.2rem;
    }
    .name {
      font-size: 0.32rem;
    }
    .position {
      border: 1px solid #6582ff;
      border-radius: 1rem;
      line-height: 0.4rem;
      margin-left: 0.2rem;
      color: #6582ff;
      padding: 0 0.1rem;
      font-size: 0.22rem;
    }
    .gray {
      color: #bbb;
    }
    .icon_baofei {
      margin-right: 0.1rem;
    }
    .slogan {
      margin: 0.5rem 0 0.3rem;
    }
    .head-photo {
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
      font-size: .32rem;
      border-radius: 50%;
      float: right;
      background: #6582ff;
      color: #fff;
      font-weight: 600;
    }
    .icon_phone{
      font-size: 0.24rem;
    }
  }
}

// range 下指向箭头
/deep/.range-tip::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: rgb(101, 130, 255);
  position: relative;
  top: 0px;
  left: 36%;
}
/deep/.mt-range-thumb {
  width: 20px;
  height: 20px;
  top: 4px;
}
/deep/.mt-range > * {
  display: flex;
  align-items: center;
}

.cc {
  width: 100%;
  padding: 0.25rem;
  background: #fff;
}
</style>
