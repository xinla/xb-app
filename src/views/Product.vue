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
      <template v-if="product.insurancePlan">
        <div class="tab-title-wrap">
          <div
            :class="['tab-title', {'active': tabActive == index}]"
            v-for="(item, index) in product.insurancePlanContent"
            :key="index"
            @click="tabActive = index"
          >{{item.name}}</div>
          <!-- <div class="tab-title active">保障利益</div> -->
        </div>
        <mt-tab-container v-model="tabActive" swipeable>
          <mt-tab-container-item :id="0">
            <ul class="tab1">
              <li v-for="(unit, unique) in product.insurancePlanContent" :key="unique">
                <span>{{planOptionList[unit.option]}}</span>
                <span class="fr">{{unit.amount}}{{['万元', '元', '元/天'][unit.unit]}}</span>
              </li>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </template>
    </div>

    <ul ref="tab2-title-wrap" class="tab2-title-wrap wrapper">
      <li :class="{current: active === '1'}" @click="active = '1'">
        保险详情
        <div class="line" v-show="active === '1'"></div>
      </li>
      <li :class="{current: active === '2'}" @click="active = '2'">
        费率测算
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
        <!-- 优先展示图集 -->
        <template v-if="product.descPicture">
          <img v-for="(item, index) of product.descPicture" :src="item" :key="index" alt />
        </template>
        <div
          v-else-if="product.imageText"
          class="insurance-text btn-bottom wangeditor"
          v-html="product.imageText"
        ></div>
        <div class="ac" v-else>
          <br />暂无详情介绍，等待后台更新。
        </div>
        <!-- </ul> -->
      </mt-tab-container-item>
      <!-- 费率表 -->
      <mt-tab-container-item id="2">
        <div class="btn-bottom">
          <ul class="args-wrap">
            <template v-for="item in listParams">
              <li class="li left" :key="item.id + 'a'">{{item.calItemName}}</li>
              <li class="li right" :key="item.id">
                <div
                  v-for="unique in item.vitProductCalConfigItems"
                  :class="['select-btn', {'select-icon':query[paramsDataDict[item.calItemTag]] == JSON.stringify(unique)}]"
                  :key="unique.id"
                  @click="query[paramsDataDict[item.calItemTag]] = JSON.stringify(unique), search()"
                >

                  <!-- 保险区间/交费区间 -->
                  <template
                    v-if="item.calItemTag === 5 || item.calItemTag === 7"
                  >{{unique.option | filterAge}}</template>

                  <template
                    v-else-if="item.calItemTag === 15"
                  >{{unique.optionOther}}{{unique.option}}</template>
<!-- 性别 -->
                  <template v-else-if="item.calItemTag === 4">{{{1: "男", 2: "女"}[unique.option]}}</template>
<!-- 有无社保 -->
                  <template v-else-if="item.calItemTag === 6">{{{1: "有", 0: "无"}[unique.option]}}</template>

                  <template v-else>
                    {{unique.option}}<!-- 份数 -->
                    <template v-if="item.calItemTag === 1">份</template>

                    <!-- 档次 -->
                    <template v-else-if="item.calItemTag === 3">档</template>

                    <!-- 领取年龄 -->
                    <template v-else-if="item.calItemTag === 9">岁起</template>

                    <!-- 保费/保险金额 -->
                    <template v-else-if="item.calItemTag === 12 || item.calItemTag === 10">{{unique.unit}}</template>
                  </template>
                </div>
              </li>
            </template>
          </ul>

          <div class="rate-page-wrap">
            <!-- 表头表格 -->
            <table class="table-header">
              <tr>
                <th>周岁</th>
                <th>{{['保额', '保费'][calculator.rateMode]}}（{{calculator.unit}}）</th>
              </tr>
            </table>
            <!-- 滚动表格 -->
            <div
              v-if="listRates.length"
              class="rate-page"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="isDisLoading"
              infinite-scroll-distance="10"
              infinite-scroll-immediate-check="true"
            >
              <table>
                <tr v-for="(item, index) of listRates" :key="index">
                  <td>{{item.age}}</td>
                  <td>{{item.result.toFixed(2)}}</td>
                </tr>
              </table>
              <mt-spinner type="fading-circle" v-if="isLoadingRate"></mt-spinner>
              <div v-else style="margin: 10px;">已加载全部</div>
            </div>

            <div v-else class="ac" style="margin-top: 40px;">查无结果</div>
          </div>
        </div>
      </mt-tab-container-item>
      <!-- 投保规则 -->
      <mt-tab-container-item id="3">
        <div
          v-if="product.underwritingRulesText"
          class="insurance-text btn-bottom wangeditor"
          v-html="product.underwritingRulesText"
        ></div>
        <template v-else-if="product.insuranceRulePdf">
          <img
            v-for="(item, index) in product.insuranceRulePdf"
            class="policy-wording-images"
            preview="1"
            :src="item"
            :key="index"
          />
        </template>
        <div class="ac" v-else>
          <br />暂无规则介绍，等待后台更新。
        </div>
      </mt-tab-container-item>
      <!-- 产品条款 -->
      <mt-tab-container-item id="4">
        <!-- <object v-for="(item, index) in product.attachment.productCourse" width="100%" height="100%" :data="item.url" type="application/pdf" :key="index">
            <embed :src="item.url" type="application/pdf" :key="index">
                <p>This browser does not support PDFs. Please download the PDF to view it: <a :href="item.url">Download PDF</a>.</p>
            </embed>
        </object>-->
        <!-- <div v-if="product.insuranceLiability" class="insurance-text" v-html="product.insuranceLiability"></div> -->
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
  filters: {
    filterAge(val) {
      return val.includes("@") ? `至${val.replace("@", '') == 120 ? '终身' : val.replace("@", '岁')}` : val + '年'
    }
  },
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
        productId: this.$route.query.id,
        policyPeriod: "1", // 保险区间
        paymentPeriod: "{}", // 交费区间
        paymentMethod: "{}", // 交费方式
        sexs: "{}", // 0男 1女 2默认
        socialInsuranceFlags: "{}", // 社保
        insuranceShares: "{}", // 份数
        applicationGrade: "{}", // 档次
        insurancePlanContent: "{}", // 计划
        drawingAge: "{}", // 领取年龄
        premium: '{}', // 保费
        amountInsured: '{}', // 保险金额
        jobCodes: '{}', // 职业（风险）类别
        receiveType: '{}', // 领取方式
        receivePeriod: '{}', // 领取期间
      },
      paramsDataDict: Object.freeze({
        5: "policyPeriod",
        7: "paymentPeriod",
        15: "paymentMethod",
        9: "drawingAge",
        14: "insurancePlanContent",
        3: "applicationGrade",
        1: "insuranceShares",
        6: "socialInsuranceFlags",
        4: "sexs",
        12: 'premium',
        10: 'amountInsured',
        8: 'jobCodes', // 职业（风险）类别
        11: 'receiveType', // 领取方式
        13: 'receivePeriod', // 领取期间
      }),
      listParams: {},
      isDisLoading: true,
      isLoadingRate: true,
      listRates: [],
      planOptionList: Object.freeze({
        0: "无关连",
        1: "有社保",
        2: "无社保",
        3: "男性",
        4: "女性"
      }),
      calculator: {
        rateMode: 0, // 费率计算模式  0  保费推算保额    1  保额推算保费
        unit: "" // 费率表返回单位
      },
    };
  },
  mounted() {
    let query = {
      id: this.$route.query.id, // 2402850435158245385
      token: this.$route.query.token
    };
    this.getData(query);
  },
  methods: {
    getData(query) {
      // console.log(query.token)
      // 获取产品详情
      getProductDetail(query).then(res => {
        res.insurancePlanContent = JSON.parse(res.insurancePlanContent) || [];
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
      });
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
          // console.log("ProductRateParams: ", res);
          this.calculator = res.vitProductCalculator;
          // 参数排序
          res.vitProductCalConfigs.sort((a, b) => a - b);

          this.listParams = res.vitProductCalConfigs;
          // 过虑性别出男女外的不合法选项
          // res.sexs = res.sexs.filter(data => data == 1 || data == 0);
          // this.query.amountInsured = res.insuredAmounts[0] || "";
          // this.query.applicationGrade = res.applicationGrades[0] || "";
          // this.query.policyPeriod = res.policyPeriods[0] || "";
          // this.query.paymentPeriod = res.paymentPeriods[0] || "";
          // this.query.socialInsuranceFlags = res.socialInsuranceFlag[0] || "";
          // this.query.sex = JSON.stringify(res.sexs[0]) ? res.sexs[0] : "";
          // this.query.renewalFlags = res.renewalFlags[0] || "";
          // this.query.paymentMethod = res.paymentMethods[0] || "";
          // this.query.occupationalRiskGrade = res.occupationalRiskGrade[0] || "";
          // 设置默认参数
          for (const iterator of res.vitProductCalConfigs) {
            if (this.paramsDataDict[iterator.calItemTag]) {
              this.query[
                this.paramsDataDict[iterator.calItemTag]
              ] = JSON.stringify(iterator.vitProductCalConfigItems[0]);
            }
          }
        })
        .then(() => {
          this.getRate();
        });
    },
    getRate() {
      // this.isLoadingRate = true
      let arr = Object.values(this.paramsDataDict);
      let query = { ...this.query };
      for (const iterator of arr) {
        query[iterator] = query[iterator] && JSON.parse(query[iterator]);
      }
      // 获取费率详情
      getProductRateDetail(query, this.$route.query.token).then(res => {
        this.isDisLoading = false;
        if (res.list) {
          this.listRates = this.listRates.concat(res.list);
          !res.list.length &&
            ((this.isDisLoading = true), (this.isLoadingRate = false));
          // console.log("ProductRateDetail: ", this.listRates);
        } else {
          this.Toast({
            message: `${res}`,
            duration: 3000
          });
        }
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
@import url("../styles/wangEditor.less");
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
  padding: 0.32rem 0;
  line-height: 0.7rem;
  span {
    color: #515a6e;
  }
}
.tab2-title-wrap {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: solid 1px #f1f3f5;
  line-height: 0.8rem;
  color: #a6abb7;
  z-index: 1;
  padding: 0 0.32rem;
  margin-bottom: -0.94rem;
  width: 100%;
  .current {
    color: #515a6e;
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
  margin: 0.32rem;
}
.select {
  // border: 1px solid #ddd;
  width: 2rem;
  padding: 6px 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.24rem;
  background: #6582ff;
}
option {
  color: #888;
  padding: 5px;
  background: #fff;
}
.rate-page-wrap {
  overflow-x: auto;
  margin: 0.2rem 0.32rem 0;
  max-height: 10rem;
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
  color: #515a6e;
  th,
  td {
    border: 1px solid #e8eaec;
    padding: 13px 0;
    // border-right: 1px solid #ddd;
    &:first-child {
      width: 40%;
    }
  }
}
.policy-wording-images {
  margin: 0.1rem 0;
}
.table-header {
  position: relative;
  top: 1px;
  background: #f8f8f9;
}
.icon_xiala-copy {
  display: inline-block;
  position: absolute;
  right: 21px;
  top: 12px;
  font-size: 0.28rem;
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

.args-wrap {
  margin: 0.4rem 0.32rem 0;
  .li {
    display: inline-block;
    white-space: nowrap;
    margin-bottom: 0.34rem;
    vertical-align: middle;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .left {
    width: 28%;
    line-height: 1.5;
  }
  .right {
    width: 72%;
  }
  .select-btn {
    position: relative;
    display: inline-block;
    width: 1rem;
    overflow: hidden;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 6px;
    border: 1px solid #a6abb7;
    font-size: 0.24rem;
    margin-right: 0.2rem;
    white-space: nowrap;
    &:last-child {
      margin-right: 0;
    }
  }
  // 选中图标
  .select-icon {
    border: 1px solid #6582ff;
    color: #6582ff;
    background: #e8eaec;
    &::after {
      content: " ";
      position: absolute;
      display: inline-block;
      border: 1px solid #fff;
      border-radius: 1px;
      width: 7px;
      height: 3px;
      border-top: 0;
      border-right: 0;
      transform: rotate(-45deg);
      right: 0px;
      bottom: 3px;
    }
    &::before {
      content: " ";
      position: absolute;
      display: inline-block;
      right: -8px;
      bottom: -4px;
      width: 24px;
      height: 12px;
      background: #6582ff;
      transform: rotate(-45deg);
    }
  }
}
</style>

