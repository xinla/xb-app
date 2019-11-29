<template>
  <div class="main" @scroll="scroll">
    <img :src="product.banner" class="banner" />
    <div class="title wrapper" ref="title">
      <h1>{{product.product.productFullName}}</h1>
      <p
        class="sub-title"
      >投保年龄：{{product.ageStart ? product.ageStart + '周岁' : product.ageDay + '天'}}至{{product.ageEnd}}周岁</p>
    </div>

    <div ref="tab-wrap" class="tab-wrap">
      <div class="tab-title-wrap">
        <!-- <div
          :class="['tab-title', {'active': tabActive == index}]"
          v-for="(item, index) in product.insurableInterest"
          v-if="item.scheduleName"
          :key="index"
          @click="tabActive = index"
        >{{item.scheduleName}}</div> -->
        <div class="tab-title active">保障利益</div>
      </div>
      <mt-tab-container v-model="tabActive" swipeable>
        <mt-tab-container-item :id="0"
        >
          <ul class="tab1">
            <li v-for="(unit, unique) in product.insurableInterest" :key="unique">
              <span>{{unit.title}}</span>
              <span class="fr">{{unit.algorithm}}</span>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <ul ref="tab2-title-wrap" class="tab2-title-wrap wrapper">
      <li :class="{current: active === '1'}" @click="active = '1'">
        保险详情
        <div class="line" v-show="active === '1'"></div>
      </li>
      <li :class="{current: active === '2'}" @click="active = '2'">
        费率表
        <div class="line" v-show="active === '2'"></div>
      </li>
      <li :class="{current: active === '3'}" @click="active = '3'">
        投保规则
        <div class="line" v-show="active === '3'"></div>
      </li>
      <li :class="{current: active === '4'}" @click="active = '4'">
        产品条款
        <div class="line" v-show="active === '4'"></div>
      </li>
    </ul>
    <mt-tab-container v-model="active" style="margin-top: .94rem;min-height: 1rem;">
      <!-- 保险详情 -->
      <mt-tab-container-item id="1">
        <div v-if="product.imageText" v-html="product.imageText"></div>
        <template v-else>
        <img v-for="(item, index) of product.descPicture" :src="item" :key="index" alt />
        </template>
        <!-- </ul> -->
      </mt-tab-container-item>
      <!-- 费率表 -->
      <mt-tab-container-item id="2">
        <div class="btn-bottom">
          <div class="args-wrap">
            <mt-cell title="保险金额" v-if="listParams.insuredAmounts.length">
              <select class="select" v-model="query.amountInsured" @change="search">
                <!-- <option value="请选择">请选择</option> -->
                <option
                  v-for="item in listParams.insuredAmounts"
                  :value="item"
                  :key="item"
                >{{item}}{{listParams.rateUnit[0]}}</option>
              </select>
              <svg
                class="icon icon_xiala-copy"
                aria-hidden="true"
                v-if="listParams.insuredAmounts.length > 1"
              >
                <use xlink:href="#icon_xiala-copy" />
              </svg>
            </mt-cell>

            <mt-cell title="保险期间" v-if="listParams.policyPeriods.length">
              <select class="select" v-model="query.policyPeriod" @change="search">
                <!-- <option value="请选择">请选择</option> -->
                <option
                  v-for="item in listParams.policyPeriods"
                  :value="item"
                  :key="item"
                >{{$Tool.transInsurancePeriod(item)}}</option>
              </select>
              <svg
                class="icon icon_xiala-copy"
                aria-hidden="true"
                v-if="listParams.policyPeriods.length > 1"
              >
                <use xlink:href="#icon_xiala-copy" />
              </svg>
            </mt-cell>

            <mt-cell title="交费期间" v-if="listParams.paymentPeriods.length">
              <select class="select" v-model="query.paymentPeriod" @change="search">
                <!-- <option value="请选择">请选择</option> -->
                <option
                  v-for="item in listParams.paymentPeriods"
                  :value="item"
                  :key="item"
                >{{$Tool.transPaymentPeriod(item)}}</option>
              </select>
              <svg
                class="icon icon_xiala-copy"
                aria-hidden="true"
                v-if="listParams.paymentPeriods.length > 1"
              >
                <use xlink:href="#icon_xiala-copy" />
              </svg>
            </mt-cell>

            <mt-cell title="交费方式">
              <!-- <select class="select" v-model="query.paymentMethod">
                <option value="请选择">请选择</option>
                <option v-for="item in listParams.paymentPeriods" :value="item" :key="item">{{item}}</option>
              </select>-->
              <mt-button type="primary" size="small" class="paymentMethod-btn">年交</mt-button>
            </mt-cell>

            <mt-cell title="性别" v-if="listParams.sexs.length">
              <div class="btn-wrap">
                <mt-button
                  v-for="(item, index) in listParams.sexs"
                  v-if="item != 2"
                  :type="item === query.sex ? 'primary' : 'default'"
                  size="small"
                  :key="index"
                  @click.native="choice('sex', item)"
                >{{item === 0 ? '男' : '女'}}</mt-button>
              </div>
            </mt-cell>

            <mt-cell title="有无社保" v-if="listParams.socialInsuranceFlag.length">
              <div class="btn-wrap">
                <mt-button
                  v-for="(item, index) in listParams.socialInsuranceFlag"
                  v-if="item == 0 || item == 1"
                  :type="item === query.socialInsuranceFlags ? 'primary' : 'default'"
                  size="small"
                  :key="index"
                  @click.native="choice('socialInsuranceFlags', item)"
                >{{item === 0 ? '无' : '有'}}</mt-button>
              </div>
            </mt-cell>

            <mt-cell title="首续保" v-if="listParams.renewalFlags.length">
              <!-- <select class="select" v-model="query.renewalFlags">
                <option value="请选择">请选择</option>
                <option v-for="item in listParams.renewalFlags" :value="item" :key="item">{{item}}</option>
              </select>-->
              <div class="btn-wrap">
                <mt-button
                  v-for="(item, index) in listParams.renewalFlags"
                  v-if="item == 2 || item == 1"
                  :type="item === query.renewalFlags ? 'primary' : 'default'"
                  size="small"
                  style="padding: 0;"
                  :key="index"
                  @click.native="choice('renewalFlags', item)"
                >{{item === 1 ? '首保' : '续保'}}</mt-button>
              </div>
            </mt-cell>

            <!-- 投保档次 -->
            <mt-cell title="投保档次" v-if="listParams.applicationGrades.length">
              <select class="select" v-model="query.applicationGrade" @change="search">
                <!-- <option value="请选择">请选择</option> -->
                <option
                  v-for="item in listParams.applicationGrades"
                  :value="item"
                  :key="item"
                >{{item}}档</option>
              </select>
              <svg
                class="icon icon_xiala-copy"
                aria-hidden="true"
                v-if="listParams.applicationGrades.length > 1"
              >
                <use xlink:href="#icon_xiala-copy" />
              </svg>
            </mt-cell>

            <!-- 职业风险等级 -->
            <mt-cell title="职业风险等级" v-if="listParams.occupationalRiskGrade.length">
              <select class="select" v-model="query.occupationalRiskGrade" @change="search">
                <option value="请选择">请选择</option>
                <option
                  v-for="item in listParams.occupationalRiskGrade"
                  :value="item"
                  :key="item"
                >{{item}}</option>
              </select>
              <svg
                class="icon icon_xiala-copy"
                aria-hidden="true"
                v-if="listParams.occupationalRiskGrade.length > 1"
              >
                <use xlink:href="#icon_xiala-copy" />
              </svg>
            </mt-cell>
          </div>

          <div class="rate-page-wrap">
            <!-- 表头表格 -->
            <table class="table-header">
              <tr>
                <th v-for="(item, index) of columns" :key="index">{{item.title}}</th>
              </tr>
            </table>
            <!-- 滚动表格 -->
            <div
              v-show="listRates.length"
              class="rate-page"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="isDisLoading"
              infinite-scroll-distance="10"
              infinite-scroll-immediate-check="true"
            >
              <table>
                <tr v-for="(item, index) of listRates" :key="index">
                  <td v-for="(unit, unique) of columns" :key="unique">{{item[unit.key]}}</td>
                </tr>
              </table>
              <mt-spinner type="fading-circle" v-if="isLoadingRate"></mt-spinner>
              <div v-else style="margin: 10px;">已加载全部</div>
            </div>
          </div>

          <div class="ac" v-show="!listRates.length">
            <br />查无结果
            <br />
          </div>
        </div>
      </mt-tab-container-item>
      <!-- 投保规则 -->
      <mt-tab-container-item id="3">
        <!-- <div class="insurance-text" v-html="product.underwritingRulesText"></div> -->
        <img
          v-for="(item, index) in product.insuranceRulePdf"
          class="policy-wording-images"
          preview="1"
          :src="item"
          :key="index"
        />
      </mt-tab-container-item>
      <!-- 产品条款 -->
      <mt-tab-container-item id="4">
        <!-- <object v-for="(item, index) in product.attachment.productCourse" width="100%" height="100%" :data="item.url" type="application/pdf" :key="index">
            <embed :src="item.url" type="application/pdf" :key="index">
                <p>This browser does not support PDFs. Please download the PDF to view it: <a :href="item.url">Download PDF</a>.</p>
            </embed>
        </object>-->
        <img
          v-for="(item, index) in product.insuranceLiabilityPdf"
          class="policy-wording-images"
          preview="2"
          :src="item"
          :key="index"
        />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import {
  getProductDetail,
  getProductRateParams,
  getProductRateDetail
} from "@/api/product";
import { getWeChatSign } from "@/api/weChatShare";
export default {
  data() {
    return {
      tabActive: 0,
      active: "1",
      offsetTop: 0,
      offsetTopTitle: 0,
      product: {
        attachment: {},
        product: {}
      },
      query: {
        page: 1,
        size: 20,
        amountInsured: "",
        applicationGrade: "",
        policyPeriod: "",
        paymentPeriod: "",
        socialInsuranceFlags: "有",
        sex: "0", // 0男 1女 2默认
        renewalFlags: "首保", // 首续保
        paymentMethod: "年交",
        occupationalRiskGrade: "",
        insuranceId: ""
      },
      listParams: {
        insuredAmounts: [],
        applicationGrades: [],
        policyPeriods: [],
        paymentPeriods: [],
        renewalFlags: [],
        sexs: [],
        socialInsuranceFlag: [],
        paymentMethods: [],
        occupationalRiskGrade: []
      },
      isDisLoading: true,
      isLoadingRate: true,
      columns: [
        // {
        //   title: "性别",
        //   key: "sex"
        // },
        {
          title: "投保年龄（岁）",
          key: "age"
        },
        // {
        //   title: "保险期间",
        //   key: "policyPeriod"
        // },
        // {
        //   title: "交费期间",
        //   key: "paymentPeriod"
        // },
        // {
        //   title: "社保",
        //   key: "socialInsuranceFlag"
        // },
        // {
        //   title: "首续保",
        //   key: "renewalFlag"
        // },
        // {
        //   title: "保险金额",
        //   key: "occupationalRiskGrade"
        // },
        // {
        //   title: "保险金额",
        //   key: "occupationalRiskGrade"
        // },
        // {
        //   title: "投保档次",
        //   key: "applicationGrade"
        // },
        // {
        //   title: "保险金额",
        //   key: "amountInsured"
        // },
        {
          title: "费率（元）",
          key: "rate"
        }
        // {
        //   title: "费率单位",
        //   key: "rateUnit"
        // },
        // {
        //   title: "计算单位",
        //   key: "countMethod"
        // },
        // {
        //   title: "缴费方式",
        //   key: "paymentMethod"
        // }
      ],
      listRates: []
    };
  },
  mounted() {
    let query = {
      id: this.$route.query.id, // 2291257061117263872
      token: this.$route.query.token
    };
    this.getData(query);
  },
  methods: {
    getData(query) {
      // console.log(query.token)
      // 获取产品详情
      getProductDetail(query)
        .then(res => {
          res.insurableInterest = JSON.parse(res.insurableInterest) || [];
          // res.attachment.productCourse =
          //   JSON.parse(res.attachment.productCourse) || [];
          this.product = res;
          // 设置文档标题
          document.title = res.product.productFullName;
          // 图集转换
          typeof this.product.descPicture === "string" &&
            (this.product.descPicture = this.product.descPicture.split(","));
          // 投保规则图片转换
          typeof this.product.insuranceRulePdf === "string" &&
            (this.product.insuranceRulePdf = this.product.insuranceRulePdf.split(
              ","
            ));
// 产品条款图片转换
          typeof this.product.insuranceLiabilityPdf === "string" &&
            (this.product.insuranceLiabilityPdf = this.product.insuranceLiabilityPdf.split(
              ","
            ));
          // console.log("ProductDetail: ", res);
          this.$nextTick(() => {
            this.offsetTop =
              this.$refs["tab2-title-wrap"].offsetTop -
              this.$refs["title"].clientHeight;
            this.offsetTopTitle = this.$refs["title"].offsetTop;

            // 动态设置标题css
            this.$refs["tab-wrap"].style.marginTop =
              this.$refs["title"].clientHeight + "px";
            this.$refs["title"].style.marginBottom =
              -this.$refs["title"].clientHeight + "px";
          });
          // return getWeChatSign(location.href);
        })
        // .then(res => {
        //   console.log(res);
        //   res = JSON.parse(res);
        //   wx.config({
        //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //     appId: "wx02b7033c0c901dd7", // 必填，公众号的唯一标识
        //     timestamp: res.timestamp, // 必填，生成签名的时间戳
        //     nonceStr: res.nonceStr, // 必填，生成签名的随机串
        //     signature: res.signature, // 必填，签名
        //     jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"] // 必填，需要使用的JS接口列表
        //   });
        // });

      //自定义分享 需在用户可能点击分享按钮前就先调用
      // wx.ready(() => {
      //   // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
      //   let product = this.product
      //   wx.updateAppMessageShareData({
      //     title: product.product.productFullName, // 分享标题
      //     desc: `投保年龄：${product.ageStart ? product.ageStart + '周岁' : product.ageDay + '天'}至${product.ageEnd}周岁`, // 分享描述
      //     link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      //     imgUrl: 'http://h5.visualinsur.cn/static/logo.png', // 分享图标
      //     success: function() {
      //       // 设置成功
      //     }
      //   });

      //   // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
      //   wx.updateTimelineShareData({
      //     title: product.product.productFullName, // 分享标题
      //     link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      //     imgUrl: "http://h5.visualinsur.cn/static/logo.png", // 分享图标
      //     success: function() {
      //       // 设置成功
      //     }
      //   });
      // });

      // 获取产品费率条件参数
      getProductRateParams(query)
        .then(res => {
          console.log("ProductRateParams: ", res);
          this.listParams = res;
          // 过虑性别出男女外的不合法选项
          res.sexs = res.sexs.filter(data => data == 1 || data == 0);
          this.query.amountInsured = res.insuredAmounts[0] || "";
          this.query.applicationGrade = res.applicationGrades[0] || "";
          this.query.policyPeriod = res.policyPeriods[0] || "";
          this.query.paymentPeriod = res.paymentPeriods[0] || "";
          this.query.socialInsuranceFlags = res.socialInsuranceFlag[0] || "";
          this.query.sex = JSON.stringify(res.sexs[0]) ? res.sexs[0] : "";
          this.query.renewalFlags = res.renewalFlags[0] || "";
          this.query.paymentMethod = res.paymentMethods[0] || "";
          this.query.occupationalRiskGrade = res.occupationalRiskGrade[0] || "";
          this.query.insuranceId = this.$route.query.id;
        })
        .then(() => {
          this.getRate();
        });
    },
    getRate() {
      // 获取费率详情
      getProductRateDetail(this.query, this.$route.query.token).then(res => {
        this.isDisLoading = false;
        this.listRates = this.listRates.concat(res.list);
        !res.list.length &&
          ((this.isDisLoading = true), (this.isLoadingRate = false));
        // console.log("ProductRateDetail: ", this.listRates);
      });
    },
    scroll($event) {
      // console.log(this.offsetTop)
      // console.log('offsetTop :', this.$refs['tab2-title-wrap'].offsetTop)
      // console.log('scrollTop :', $event.target.scrollTop)
      if ($event.target.scrollTop >= this.offsetTop) {
        // debugger
        this.$refs["tab2-title-wrap"].style.position = "fixed";
        this.$refs["tab2-title-wrap"].style.top =
          this.$refs["title"].clientHeight + "px";
      } else {
        this.$refs["tab2-title-wrap"].style.position = "relative";
        this.$refs["tab2-title-wrap"].style.top = 0;
      }

      if ($event.target.scrollTop >= this.offsetTopTitle) {
        // debugger
        this.$refs["title"].style.position = "fixed";
        this.$refs["title"].style.zIndex = 9;
      } else {
        this.$refs["title"].style.position = "relative";
        this.$refs["title"].style.zIndex = 1;
      }
    },
    loadMore() {
      this.isDisLoading = true;
      // console.log('loadMore')
      this.query.page++;
      this.getRate();
    },
    search() {
      // console.log('search')
      this.query.page = 1;
      this.listRates = [];
      this.getRate();
    },
    choice(type, data) {
      this.query[type] = data;
      this.search();
      // console.log(this.query[type])
    }
    // change() {
    //   this.search()
    //   // console.log(1)
    // },
  }
};
</script>

<style lang="less" scoped>
.main {
  overflow: scroll;
}
.banner {
  width: 100%;
  height: 3.4rem;
}
.tab-title-wrap {
  overflow: auto;
  // height: 0.7rem;
  white-space: nowrap;
}
.tab-title {
  display: inline-block;
  color: #fff;
  text-align: center;
  line-height: 0.7rem;
  font-size: 0.28rem;
  width: 1.6rem;
  border-radius: 10px 10px 0px 0px;
  margin-right: 2px;
  background: #888;
}
.active {
  background: #6582ff;
}
.tab-wrap {
  padding: 0 0.3rem;
  border-top: 0.3rem #fff solid;
  border-bottom: 10px solid #f1f3f5;
  border-radius: 10px 10px 0 0;
  position: relative;
  top: -8px;
  z-index: 1;
}
.tab1 {
  border-top: 1px solid #dbdbdb;
  padding: 0.2rem 0;
  line-height: 0.7rem;
  span {
    color: #444;
  }
}
.tab2-title-wrap {
  display: flex;
  justify-content: space-around;
  background: #fff;
  border-bottom: solid 1px #f1f3f5;
  line-height: 0.8rem;
  color: #a6abb7;
  z-index: 1;
  width: 100%;
  margin-bottom: -0.94rem;
  .current {
    color: #444;
  }
  .line {
    width: 0.4rem;
    height: 0.12rem;
    background-color: #6582ff;
    border-radius: 3px;
    margin: 0 auto;
  }
}
.insurance-text {
  margin: 0.2rem;
}
.select {
  border: 1px solid #ddd;
  width: 2rem;
  padding: 8px 10px;
  border-radius: 8px;
  color: #fff;
  font-size: 0.24rem;
  background: #6582ff;
  // &::after {
  //   content: ">";
  //   display: inline-block;
  //   width: 20px;
  //   height: 20px;
  //   position: relative;
  //   top: 60px;
  // }
}
option {
  color: #888;
  padding: 5px;
  background: #fff;
}
.rate-page-wrap {
  overflow-x: auto;
  margin: 20px 10px;
  height: 10rem;
}
.rate-page {
  width: 100%;
  // width: 800px;
  overflow-y: auto;
  text-align: center;
  height: 9.3rem;
}
table {
  width: 100%;
  text-align: center;
  line-height: 0.5rem;
  // border: 1px solid #ddd;
  th,
  td {
    border: 1px solid #ddd;
    // border-right: 1px solid #ddd;
    &:first-child {
      width: 30%;
    }
  }
}
.policy-wording-images {
  margin: 0.1rem 0;
}
.table-header {
  position: relative;
  top: 1px;
  background: #fff;
}
.icon_xiala-copy {
  display: inline-block;
  position: absolute;
  right: 21px;
  top: 9px;
  color: #fff;
  // transform: rotate(90deg);
  font-size: 0.32rem;
}
.paymentMethod-btn {
  width: 2rem;
  text-align: left;
}
.btn-wrap {
  width: 2rem;
  .mint-button--small {
    width: 45%;
    &:first-child {
      width: 45%;
      margin-right: 10%;
    }
  }
}
.title {
  font-size: 0.36rem;
  padding: 0.3rem 0.3rem 0.2rem;
  background: #fff;
  // color: #fff;
  width: 100%;
  line-height: 0.45rem;
  position: relative;
  top: 0;
  z-index: 1;
  .sub-title {
    font-size: 0.28rem;
  }
}

/deep/.mint-cell-wrapper {
  font-size: 0.28rem;
  background-image: none;
}
.mint-cell {
  min-height: 36px;
  margin: 5px 0;
  &:last-child {
    background-image: none;
  }
}
.mint-button--primary {
  background-color: #6582ff;
}
/deep/.mint-spinner-fading-circle {
  margin: 10px auto;
}
</style>

