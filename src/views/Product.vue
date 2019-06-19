<template>
  <div class="main" @scroll="scroll">
    <img :src="product.webBanner" class="banner">

    <div class="tab-wrap">
      <div
        class="tab-title"
        v-for="(item, index) in product.insurableInterest"
        :key="index"
      >{{item.scheduleName}}</div>
      <mt-tab-container v-model="tabActive" swipeable>
        <mt-tab-container-item
          v-for="(item, index) in product.insurableInterest"
          :key="index"
          :id="index"
        >
          <ul class="tab1">
            <li v-for="(unit, unique) in item.content" :key="unique">
              <span>{{unit.title}}</span>
              <span class="fr">{{unit.algorithm}}</span>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <ul ref="tab2-title-wrap" class="tab2-title-wrap">
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
    <mt-tab-container v-model="active">
      <!-- 保险详情 -->
      <mt-tab-container-item id="1">
        <img :src="product.descPicture" alt>
        <!-- </ul> -->
      </mt-tab-container-item>
      <!-- 费率表 -->
      <mt-tab-container-item id="2">
        <div v-if="listRates.length">
          <div class="args-wrap">
            <mt-cell title="保险金额" v-if="listParams.insuredAmounts.length">
              <select class="select" v-model="query.amountInsured">
                <option value="请选择">请选择</option>
                <option v-for="item in listParams.insuredAmounts" :value="item" :key="item">{{item}}</option>
              </select>
            </mt-cell>
            <mt-cell title="投保档次" v-if="listParams.applicationGrades.length">
              <select class="select" v-model="query.applicationGrade">
                <option value="请选择">请选择</option>
                <option
                  v-for="item in listParams.applicationGrades"
                  :value="item"
                  :key="item"
                >{{item}}</option>
              </select>
            </mt-cell>
            <mt-cell title="保险期间" v-if="listParams.policyPeriods.length">
              <select class="select" v-model="query.policyPeriod">
                <option value="请选择">请选择</option>
                <option v-for="item in listParams.policyPeriods" :value="item" :key="item">{{item}}</option>
              </select>
            </mt-cell>
            <mt-cell title="交费期间" v-if="listParams.paymentPeriods.length">
              <select class="select" v-model="query.paymentPeriod">
                <option value="请选择">请选择</option>
                <option v-for="item in listParams.paymentPeriods" :value="item" :key="item">{{item}}</option>
              </select>
            </mt-cell>
            <mt-cell title="有无社保" v-if="listParams.socialInsuranceFlag.length">
              <select class="select" v-model="query.socialInsuranceFlags">
                <option value="请选择">请选择</option>
                <option
                  v-for="item in listParams.socialInsuranceFlag"
                  :value="item"
                  :key="item"
                >{{item}}</option>
              </select>
            </mt-cell>
            <mt-cell title="性别" v-if="listParams.sexs.length">
              <select class="select" v-model="query.sex">
                <option value="请选择">请选择</option>
                <option
                  v-for="item in listParams.sexs"
                  :value="item"
                  :key="item"
                >{{item === 0 ? '男' : '女'}}</option>
              </select>
            </mt-cell>
            <mt-cell title="首续保" v-if="listParams.renewalFlags.length">
              <select class="select" v-model="query.renewalFlags">
                <option value="请选择">请选择</option>
                <option v-for="item in listParams.renewalFlags" :value="item" :key="item">{{item}}</option>
              </select>
            </mt-cell>
            <mt-button type="primary" size="small" style="width: 100%;" @click.native="search()">查询</mt-button>
          </div>

          <div class="rate-page-wrap">
            <table class="table-header">
              <tr>
                <th v-for="(item, index) of columns" :key="index">{{item.title}}</th>
              </tr>
            </table>
            <div
              class="rate-page"
              v-infinite-scroll="loadMore"
              :infinite-scroll-disabled="loadingRate"
              infinite-scroll-distance="10"
            >
              <table>
                <thead style="visibility: collapse;">
                  <tr>
                    <th v-for="(item, index) of columns" :key="index">{{item.title}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) of listRates" :key="index">
                    <td v-for="(unit, unique) of columns" :key="unique">{{item[unit.key]}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="ac" v-else>
          查无结果
        </div>
      </mt-tab-container-item>
      <!-- 投保规则 -->
      <mt-tab-container-item id="3">
        <div class="insurance-text" v-html="product.underwritingRulesText"></div>
      </mt-tab-container-item>
      <!-- 产品条款 -->
      <mt-tab-container-item id="4">
        <!-- <object v-for="(item, index) in product.attachment.productCourse" width="100%" height="100%" :data="item.url" type="application/pdf" :key="index">
            <embed :src="item.url" type="application/pdf" :key="index">
                <p>This browser does not support PDFs. Please download the PDF to view it: <a :href="item.url">Download PDF</a>.</p>
            </embed>
        </object>-->
        <img
          v-for="(item, index) in product.attachment.policyWordingImages"
          class="policy-wording-images"
          :src="item"
          :key="index"
        >
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

export default {
  data() {
    return {
      tabActive: 0,
      active: "1",
      offsetTop: 0,
      product: {
        attachment: {}
      },
      query: {
        page: 1,
        size: 10,
        amountInsured: "请选择",
        applicationGrade: "请选择",
        policyPeriod: "请选择",
        paymentPeriod: "请选择",
        socialInsuranceFlags: "请选择",
        sex: "请选择", // 0男 1女 2默认
        renewalFlags: "请选择"
      },
      listParams: {
        insuredAmounts: [],
        applicationGrades: [],
        policyPeriods: [],
        paymentPeriods: [],
        renewalFlags: [],
        sexs: [],
        socialInsuranceFlag: []
      },
      loadingRate: false,
      columns: [
        {
          title: "性别",
          key: "sex"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "保险期间",
          key: "policyPeriod"
        },
        {
          title: "交费期间",
          key: "paymentPeriod"
        },
        {
          title: "社保",
          key: "socialInsuranceFlag"
        },
        {
          title: "首续保",
          key: "renewalFlag"
        },
        {
          title: "保险金额",
          key: "occupationalRiskGrade"
        },
        {
          title: "保险金额",
          key: "occupationalRiskGrade"
        },
        {
          title: "投保档次",
          key: "applicationGrade"
        },
        {
          title: "保险金额",
          key: "amountInsured"
        },
        {
          title: "费率",
          key: "rate"
        },
        {
          title: "费率单位",
          key: "rateUnit"
        },
        {
          title: "计算单位",
          key: "countMethod"
        },
        {
          title: "缴费方式",
          key: "paymentMethod"
        }
      ],
      listRates: []
    };
  },
  mounted() {
    let query = {
      id: this.$route.query.id || "2266402544886480903",
      token:
        this.$route.query.token ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJXRUIiLCJpc3MiOiJhdXRoLXNlcnZlciIsInN0YXRlIjoiMSIsImV4cCI6MTU2MDg1NDQyNywiaWF0IjoxNTYwODUwODI3LCJ1c2VySWQiOjIyNjU2NDI5NDkzMTAxNTI3MDZ9.kDSmyNFuVG2OpMOC5-Wp6TQo7YM7Qce6h6z6EYH5r40"
    };
    this.getData(query);

    this.offsetTop = this.$refs["tab2-title-wrap"].offsetTop;
  },
  methods: {
    getData(query) {
      getProductDetail(query).then(res => {
        res.insurableInterest = JSON.parse(res.insurableInterest) || [];
        res.attachment.productCourse =
          JSON.parse(res.attachment.productCourse) || [];
        this.product = res;
        this.product.attachment.policyWordingImages = this.product.attachment.policyWordingImages.split(
          ","
        );
        console.log("ProductDetail: ", res);
      });
      getProductRateParams(query.id)
        .then(res => {
          console.log("ProductRateParams: ", res);
          this.listParams = res;
          this.query.amountInsured = res.insuredAmounts[0] || "";
          this.query.applicationGrade = res.applicationGrades[0] || "";
          this.query.policyPeriod = res.policyPeriods[0] || "";
          this.query.paymentPeriod = res.paymentPeriods[0] || "";
          this.query.socialInsuranceFlags = res.socialInsuranceFlag[0] || "";
          this.query.sex = JSON.stringify(res.sexs[0]) ? res.sexs[0] : "";
          this.query.renewalFlags = res.renewalFlags[0] || "";
        })
        .then(() => {
          this.getRate();
        });
    },
    getRate() {
      getProductRateDetail(this.query).then(res => {
        this.listRates = this.listRates.concat(res.list);
        !res.list.length && (this.loadingRate = true);
        // console.log('ProductRateDetail: ', res);
      });
    },
    scroll($event) {
      // console.log(this.$refs['tab2-title-wrap'].offsetTop)
      if ($event.target.scrollTop >= this.offsetTop) {
        this.$refs["tab2-title-wrap"].style.position = "fixed";
      } else {
        this.$refs["tab2-title-wrap"].style.position = "relative";
      }
    },
    loadMore() {
      this.query.page++;
      this.getRate();
    },
    search() {
      this.query.page = 1;
      this.listRates = [];
      this.getRate();
    }
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
.tab-title {
  display: inline-block;
  color: #fff;
  text-align: center;
  line-height: 0.7rem;
  font-size: 0.28rem;
  width: 1.6rem;
  height: 0.7rem;
  background-color: #6582ff;
  border-radius: 10px 10px 0px 0px;
}
.tab-wrap {
  padding: 0.3rem 0.3rem 0;
  border-bottom: 10px solid #f1f3f5;
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
  top: 0;
  .current {
    color: #444;
  }
  .line {
    width: 0.4rem;
    height: 6px;
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
  width: 100px;
  padding: 3px 5px;
  border-radius: 8px;
  color: #888;
  font-size: 0.12rem;
}
option {
  color: #888;
  padding: 0 3px;
}
.rate-page-wrap {
  overflow-x: auto;
}
.rate-page {
  width: 800px;
  height: 250px;
  overflow-y: auto;
}
table {
  width: 800px;
  text-align: center;
  line-height: 0.5rem;
  // border: 1px solid #ddd;
}
th,
td {
  border: 1px solid #ddd;
  // border-right: 1px solid #ddd;
}
.policy-wording-images {
  margin: 0.1rem 0;
}
.table-header {
  position: relative;
  top: 26px;
  background: #fff;
}
</style>

