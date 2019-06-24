<template>
  <div>
    <div class="member-wrap">
      <div class="member">
        <span class="semicircle"></span>
        <span style="margin-right：-8px;">敬呈</span>
        <span class="arrows arrows-left"></span>
        <svg class="icon icon_letter" aria-hidden="true">
          <use xlink:href="#icon_letter"></use>
        </svg>
        <span class="arrows arrows-right"></span>
        <span>{{result.applicantName}}</span>先生
      </div>

      <div class="relation-wrap">
        <div class="title">
          <svg class="icon icon-title icon_loverelationship" aria-hidden="true">
            <use xlink:href="#icon_loverelationship"></use>
          </svg>
          <span>{{result.applicantRelationInsured}}关系</span>
        </div>
        <ul class="relation-ul">
          <li class="relation-li">
            <p class="value">{{result.applicantName}}</p>
            <p class="key">投保人</p>
          </li>
          <li class="relation-li">
            <p class="value">{{result.insuredName}}</p>
            <p class="key">被保人</p>
          </li>
          <li class="relation-li">
            <p class="value">{{result.insuredAge}}</p>
            <p class="key">被保人年龄</p>
          </li>
          <li class="relation-li">
            <p class="value">{{result.applicantRelationInsured}}</p>
            <p class="key">关系</p>
          </li>
        </ul> 
      </div>
    </div>

    <div class="container1">
      <div class="title title-boder">
        <svg class="icon icon-title icon_toubaoplane" aria-hidden="true">
          <use xlink:href="#icon_toubaoplane"></use>
        </svg>
        <span>投保计划</span>
      </div>
 
      <div v-for="(item, index) in result.vitPolicyRightRiskVoList" :key="index">
        <div class="title">
          <svg v-if="index === 0" class="icon icon-title icon_zhuxian" aria-hidden="true" :key="0">
            <use xlink:href="#icon_zhuxian"></use>
          </svg>
          <svg v-if="index === 1" class="icon icon-title icon_fuxian" aria-hidden="true" :key="1">
            <use xlink:href="#icon_fuxian"></use>
          </svg>
          <span>{{item.productName}}</span>
        </div>
        <div class="content">
          <div class="item-wrap">
            <div class="item">
              <p class="key">保障额度</p>
              <p class="value">{{item.guaranteeName}}</p>
            </div>
            <div class="item">
              <p class="key">保障期间</p>
              <p class="value">{{item.policyPeriodName}}</p>
            </div>
          </div>
          <div class="item-wrap">
            <div class="item">
              <p class="key">交费额度</p>
              <p class="value">{{item.paymentPeriodName}}</p>
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
              <span class="key">万/年</span>
            </div>
          </div>
        </div>
        <div class="blue ac" style="padding: .4rem 0 .2rem;">查看保单条款详情></div>
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
      <div class="blue ac" style="padding: .4rem 0 .2rem;">查看保单条款详情></div> -->

    </div>

    <div class="container1">
      
      <div class="title title-boder" style="border-bottom: 1px solid #f1f3f5;">
        <svg class="icon icon-title icon_liyi" aria-hidden="true">
          <use xlink:href="#icon_liyi"></use>
        </svg>
        <span>利益说明</span>
      </div>

      <div style="margin: .8rem 0 .3rem;">
        <mt-range v-model="age" :min="query.insuredCurrentAge" :max="query.insuredMaxAge" :step="1" :key='query.insuredCountAge'>
          <div slot="start" @click="age++">
            <svg class="icon icon_add_circle" aria-hidden="true" style="margin-right: 10px;">
              <use xlink:href="#icon_add_circle"></use>
            </svg>{{query.insuredCurrentAge}}
          </div>
          <div slot="end" @click="age--">
            <svg class="icon icon_reduce_circle" aria-hidden="true" style="margin-left: 10px;">
              <use xlink:href="#icon_reduce_circle"></use>
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
              <use xlink:href="#icon_baofei"></use>
            </svg>
            <span>保费</span>
          </div>
          <div style="line-height: 1rem;">
            <div class="item">
              <p class="key al">当期保费</p>
            </div>
            <div class="item">
              <p class="value ar">{{item.currentPremium}}</p>
            </div>
          </div>
          <div style="line-height: 1rem;">
            <div class="item">
              <p class="key al">累计保费</p>
            </div>
            <div class="item">
              <p class="value ar">{{item.totalPremium}}</p>
            </div>
          </div>
        </div>

        <div class="content" v-for="(item, index) in JSON.parse(item.insurableInterest)" :key="index">
          <div class="title2">
            <svg class="icon icon-title icon_bao" aria-hidden="true">
              <use xlink:href="#icon_bao"></use>
            </svg>
            <span>{{item.scheduleName}}</span>
          </div>
          <div style="padding: .2rem 0;line-height: .8rem;">
            <div v-for="(unit, unqiue) in item.content" :key="unqiue">
              <div class="item">
                <p class="key al">{{unit.title}}</p>
              </div>
              <div class="item">
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
      </div> -->

      <div class="content">
        <div class="title2">
          <svg class="icon icon-title icon_baofei" aria-hidden="true">
            <use xlink:href="#icon_baofei"></use>
          </svg>
          <span>合计保费</span>
        </div>
        <div class="item-wrap2">
          <div class="item-wrap2">
            <div class="item">
              <p class="key al">合计当期保费</p>
            </div>
            <div class="item">
              <p class="yellow ar">{{result.currentTotalPremium}}</p>
            </div>
          </div>
          <div class="item-wrap2">
            <div class="item">
              <p class="key al">合计累计保费</p>
            </div>
            <div class="item">
              <p class="yellow ar">{{result.countTotalPremium}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { getBeneficiaryDetail, getInsuredAgeRange } from "@/api/beneficiary";
export default {
  components: {},
  props: {},
  data() {
    return {
      query: {
        id: this.$route.query.id || '2266434895041527813',
        insuredCurrentAge: 0,
        insuredMaxAge: 0,
        insuredCountAge: undefined,
        proposalId: this.$route.query.proposalId,
        token: this.$route.query.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJXRUIiLCJpc3MiOiJhdXRoLXNlcnZlciIsImV4cCI6MTU1OTM4MDQ1MywiaWF0IjoxNTU5Mzc2ODUzLCJ1c2VySWQiOjIyNjQ0ODU0NTI2MjkxNDc2NTV9.tOcwghVeSUi62W4u9XNx0dAaduI7vOgIjLanuRCFTx4',
      },
      age: undefined,
      result: {},
      timer: undefined
    };
  },
  computed: {},
  watch: {
    'age'() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.query.insuredCountAge = this.age
        this.getData()
      }, 500)
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getInsuredAgeRange(this.query).then(res => {
        // console.log(res)
        this.query.insuredCurrentAge = res.currentAge
        this.query.insuredMaxAge = res.maxAge
        this.query.insuredCountAge = res.currentAge
        this.age = res.currentAge
        this.getData()
      })
    },
    getData() {
      // console.log(this.query)
      getBeneficiaryDetail(this.query).then(res => {
        // console.log(res)
        this.result = res
      });
    }
  }
};
</script>
<style lang="less" scoped>
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
      .key {
        color: #a6abb7;
      }
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
</style>
