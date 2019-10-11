<template>
  <div class="main" @scroll="scroll">
    <div class="top wrapper ac" ref="top" :style="{paddingTop: isShare && '.3rem'}">
      <svg class="icon icon_fanhui" aria-hidden="true" @click="back" v-if="!isShare">
        <use xlink:href="#icon_fanhui" />
      </svg>
      <span class="oe">{{result.supplier.name}}</span>
      <svg class="icon icon_fenxiang" aria-hidden="true" @click="share" v-if="!isShare">
        <use xlink:href="#icon_fenxiang" />
      </svg>
    </div>

    <div class="bfc-o">
      <div class="top top1 wrapper" v-if="!isShare">
        <svg class="icon icon_fanhui" aria-hidden="true" style="color: #fff;" @click="back">
          <use xlink:href="#icon_fanhui" />
        </svg>
        <svg class="icon icon_fenxiang" aria-hidden="true" style="color: #fff;" @click="share">
          <use xlink:href="#icon_fenxiang" />
        </svg>
      </div>

      <!-- <img src="http://www.common.visualinsur.com/1561368733229.jpg" class="banner" /> -->
      <img
        :src="result.supplier.publicityImage || require('../assets/default_banner_brand.png')"
        class="banner"
      />

      <div class="title-logo">
        <div class="logo-wrap">
          <img v-if="result.supplier.logo" :src="result.supplier.logo" class="logo" />
          <!-- <img src="http://www.common.visualinsur.com/1561368733229.jpg" class="logo" /> -->
        </div>
        <div class="pro-name">{{result.supplier.name}}</div>
        <div>创立于{{new Date(result.supplier.foundingTime).getFullYear()}}年</div>
      </div>
    </div>

    <ul ref="tab2-title-wrap" class="tab2-title-wrap wrapper">
      <li :class="{current: active === '1'}" @click="active = '1'">
        公司介绍
        <div class="line" v-show="active === '1'"></div>
      </li>
      <li :class="{current: active === '2'}" @click="active = '2'">
        联系方式
        <div class="line" v-show="active === '2'"></div>
      </li>
      <li :class="{current: active === '3'}" @click="active = '3'">
        分支机构
        <div class="line" v-show="active === '3'"></div>
      </li>
      <li :class="{current: active === '4'}" @click="active = '4'">
        产品列表
        <div class="line" v-show="active === '4'"></div>
      </li>
    </ul>
    <mt-tab-container
      v-model="active"
      style="margin-top: .84rem;min-height: 1rem;padding: 0 0.25rem;"
    >
      <!-- 公司介绍 -->
      <mt-tab-container-item id="1">
        <div class="title-wrap">
          <svg class="icon zu" aria-hidden="true">
            <use xlink:href="#zu" />
          </svg>
          <span class="title">公司简介</span>
        </div>
        <p
          ref="describe"
          class="describe"
          :style="{maxHeight: allShow ? 'none' : '100px'}"
          v-html="result.supplier.supplierDescription"
        ></p>
        <div class="ac all-wrap" v-if="isShow">
          <div @click="toggle">{{allShow ? '收起' : '阅读全文'}}</div>
          <svg
            class="icon icon_more"
            aria-hidden="true"
            :style="{transform: allShow ? 'rotate(-90deg)' : 'rotate(90deg)'}"
          >
            <use xlink:href="#icon_more" />
          </svg>
        </div>

        <template v-if="result.bigEvents.length">
          <div class="title-wrap">
            <svg class="icon zu" aria-hidden="true">
              <use xlink:href="#zu" />
            </svg>
            <span class="title">公司里程碑</span>
          </div>
          <ul class="ul">
            <li class="li" v-for="(item, index) of result.bigEvents" :key="index">
              <i class="dot"></i>
              <div class="time">{{item.time}}</div>
              <div class="event">{{item.bigEvents}}</div>
            </li>
            <li class="li">
              <i class="dot"></i>
              <div class="time">更多里程碑事件等待发生</div>
            </li>
          </ul>
        </template>

        <template v-if="result.honors.length">
          <div class="title-wrap">
            <svg class="icon zu" aria-hidden="true">
              <use xlink:href="#zu" />
            </svg>
            <span class="title">公司荣誉</span>
          </div>
          <ul class="ul">
            <li class="li" v-for="(item, index) of result.honors" :key="index">
              <i class="dot"></i>
              <div class="time">{{item.prizeTime}}</div>
              <div class="event">{{item.honorName}}</div>
            </li>
            <li class="li">
              <i class="dot"></i>
              <div class="time">更多荣誉事件等待发生</div>
            </li>
          </ul>
        </template>
      </mt-tab-container-item>

      <!-- 联系方式 -->
      <mt-tab-container-item id="2">
        <ul>
          <li class="li2">
            <div class="left">服务电话</div>
            <span
              @click="call(result.supplier.nationalServicePhone)"
            >{{result.supplier.nationalServicePhone}}</span>
          </li>
          <li class="li2">
            <div class="left">公司网址</div>
            <div @click="goLink(result.supplier.companyWebsite)">{{result.supplier.companyWebsite}}</div>
            <!-- <a :href="result.supplier.companyWebsite" target="_self" rel="noopener noreferrer">{{result.supplier.companyWebsite}}</a> -->
          </li>
          <li class="li2">
            <div class="left">总部地址</div>
            <!-- 高德地图方案 -->
            <!-- <div @click="goMap('合肥国家大学科技园')">
              <iframe
                src="https://uri.amap.com/search?keyword=合肥国家大学科技园&center=&city=&view=map&src=mypage&coordinate=gaode&callnative=1"
                frameborder="0"
                width="100vw;"
              ></iframe>
            </div>-->

            <!-- 高德URI根据经纬度单点标记 -->
            <!-- //uri.amap.com/marker?position=121.287689,31.234527&name=park&src=mypage&coordinate=gaode&callnative=0 -->

            <!-- 高德URI搜索查询 -->
            <!-- //uri.amap.com/search?keyword=合肥国家大学科技园&center=&city=&view=map&src=mypage&coordinate=gaode&callnative=1 -->

            <!-- 高德地图地名搜索地图点集合 -->
            <!-- https://m.amap.com/search/mapview/keywords=合肥国家大学科技园&src=mypage&callnative=1 -->

            <!-- 百度地图方案 -->
            <!-- <a
              :href="`http://api.map.baidu.com/geocoder?address=合肥国家大学科技园&output=html`"
              target="_blank"
            >
              <img
                style="margin:2px"
                width="400"
                height="300"
                :src="`http://api.map.baidu.com/staticimage? 
            width=400&height=300&zoom=18&center=合肥国家大学科技园`"
              />
            </a>-->

            <div @click="goMap(result.supplier.companyAddress)">
              <img
                style="margin:2px"
                width="400"
                height="300"
                :src="`http://api.map.baidu.com/staticimage? 
            width=400&height=300&zoom=18&center=${result.supplier.companyAddress}`"
              />
            </div>
          </li>
        </ul>
      </mt-tab-container-item>

      <!-- 分支机构 -->
      <mt-tab-container-item id="3">
        <ul>
          <li class="li2" v-for="(item, index) of result.list" :key="index">
            <div class="left">{{item.name}}</div>
            <div>
              <svg class="icon dianhua" aria-hidden="true">
                <use xlink:href="#dianhua" />
              </svg>
              <span @click="call(item.organizationPhone)" class="right">{{item.organizationPhone}}</span>
            </div>
            <div>
              <svg class="icon location-" aria-hidden="true">
                <use xlink:href="#location-" />
              </svg>
              <span @click="goMap(item.organizationAddress)">{{item.organizationAddress}}</span>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>

      <!-- 产品列表 -->
      <mt-tab-container-item id="4">
        <ul>
          <li class="li-pro bfc-o" v-for="(item, index) of productList" :key="index">
            <img class="cover-pro fl" :src="item.appNavigation" alt />
            <div class="title-pro">{{item.name}}</div>
            <div class="txt1">{{item.coreBuy}}</div>
            <div class="txt2">{{item.typicalRate}}</div>
            <div class="txt3">
              <img class="supplier-logo" :src="item.supplierLogo" alt />
              <span>{{item.startAge ? item.startAge + '周岁' : item.ageDay + '天'}}至{{item.endAge}}周岁可保</span>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { getBrandInfo, getBrandProductList } from "@/api/brand";

export default {
  components: {},
  props: {},
  data() {
    return {
      active: "1",
      result: {
        supplier: {},
        bigEvents: [],
        honors: [],
        list: []
      },
      productList: {},
      allShow: false,
      isShow: false,
      offsetTop: 0,
      // offsetTopTitle: 0,
      isSwitch: false,
      query: {
        id:
          (this.$route.query && this.$route.query.id) || "2252792750044872711",
        page: 1,
        size: 10
      }
    };
  },
  computed: {
    // 是否为分享状态
    isShare() {
      return this.$route.query && this.$route.query.share;
    }
  },
  mounted() {
    // console.log(this.$route.query)
    this.getData();
  },
  methods: {
    getData() {
      getBrandInfo(this.query.id).then(res => {
        // console.log("BrandInfo：", res);
        // this.Toast(JSON.stringify(res.supplier.companyAddress));
        this.result = {
          supplier: res.supplier || {},
          bigEvents: res.bigEvents || [],
          honors: res.honors || [],
          list: res.list || []
        };
        // 兼容ios 时间格式转换
        if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && res.supplier.foundingTime) {
          this.result.supplier.foundingTime = res.supplier.foundingTime.replace(/-/g, '/')
        }
        // console.log("foundingTime：", res.supplier.foundingTime)
        const website = this.result.supplier.companyWebsite;
        if (website) {
          this.result.supplier.companyWebsite = /^http/i.test(website)
            ? website
            : "http://" + website;
        }
        // 用于设置分享标题
        document.title = res.supplier.nameForShort || res.supplier.name;
        this.$nextTick(() => {
          this.offsetTop =
            this.$refs["tab2-title-wrap"].offsetTop -
            this.$refs["top"].clientHeight;
          // console.log(this.offsetTop);
          // console.log(this.$refs["top"].clientHeight);
          if (this.$refs.describe.clientHeight >= 100) {
            this.isShow = true;
          }
          // console.log(this.$refs.describe.offsetHeight);
        });
      });
      getBrandProductList(this.query).then(res => {
        // console.log(res);
        this.productList = res.list;
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
          this.$refs["top"].clientHeight + "px";

        this.$refs["top"].style.transform = "scale(1)";
        // this.$refs["top"].style.visibility = "visible";
        this.isSwitch = false;
        this.Toast(this.$refs["top"].style.transform)
      } else {
        this.$refs["tab2-title-wrap"].style.position = "relative";
        this.$refs["tab2-title-wrap"].style.top = '-0.2rem';

        this.$refs["top"].style.transform = "scale(0)";
        // this.$refs["top"].style.visibility = "hidden";
        this.isSwitch = true;
        this.Toast(this.$refs["top"].style.transform)
      }

      // if ($event.target.scrollTop >= this.offsetTopTitle) {
      //   // debugger
      //   this.$refs["title"].style.position = "fixed";
      //   this.$refs["title"].style.zIndex = 9;
      // } else {
      //   this.$refs["title"].style.position = "relative";
      //   this.$refs["title"].style.zIndex = 1;
      // }
    },
    toggle() {
      this.allShow = !this.allShow;
    },
    back() {
      // 调用两端返回事件
      !(navigator.userAgent.indexOf("Android") > -1)
        ? window.webkit.messageHandlers.back.postMessage(null)
        : window.hello.back();
    },
    share() {
      // 调用两端分享事件
      !(navigator.userAgent.indexOf("Android") > -1)
        ? window.webkit.messageHandlers.share.postMessage(
            JSON.stringify(this.result.supplier)
          )
        : window.hello.share(JSON.stringify(this.result.supplier));
    },
    call(data) {
      // 调用两端拨号事件
      !(navigator.userAgent.indexOf("Android") > -1)
        ? window.webkit.messageHandlers.callPhone.postMessage(data)
        : window.hello.callPhone(data);
    },
    goMap(data) {
      // 调用两端拨号事件
      !(navigator.userAgent.indexOf("Android") > -1)
        ? window.webkit.messageHandlers.skipToMapIntent.postMessage(data)
        : window.hello.skipToMapIntent(data);
    },
    goLink(data) {
      // 调用两端跳转网址事件
      !(navigator.userAgent.indexOf("Android") > -1)
        ? window.webkit.messageHandlers.goLink.postMessage(data)
        : window.hello.goLink(data);
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  // position: relative;
  overflow: scroll;
}
.top {
  width: 100%;
  z-index: 2;
  padding: 0.64rem 0.32rem 0.3rem;
  display: flex;
  justify-content: space-between;
  background: #fcfcfc;
  align-items: center;
  font-weight: 600;
  transform: scale(0);
  // visibility: hidden;
  transition: all 0.1s;
  .icon {
    font-size: 0.36rem;
  }
  span {
    flex: 1;
    font-size: 0.36rem;
    max-width: 80%;
    line-height: 0.5rem;
  }
}
.top {
  position: fixed;
}
.top1 {
  position: absolute;
  z-index: 1;
  transform: scale(1);
  // visibility: visible;
  background: none;
}
.banner {
  width: 100%;
  height: 3.78rem;
}
.title-logo {
  position: absolute;
  top: 1.47rem;
  color: #fff;
  padding: 0 0.32rem;
  width: 100%;
}
.logo-wrap {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  float: right;
  background: #fff;
  line-height: 1.2rem;
  text-align: center;
}
.logo {
  width: 0.85rem;
  height: 0.85rem;
}
.pro-name {
  font-weight: 600;
  font-size: 0.4rem;
  margin-bottom: 0.14rem;
  line-height: 0.56rem;
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
  margin-bottom: -0.8rem;
  border-radius: 0.2rem 0.2rem 0 0;
  top: -0.2rem;
  position: relative;
  .current {
    color: #6582ff;
  }
  .line {
    width: 0.4rem;
    height: 0.06rem;
    background-color: #6582ff;
    border-radius: 0.03rem;
    margin: 0 auto;
  }
}
.title-wrap {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  .title {
    font-size: 0.34rem;
    font-weight: 600;
    line-height: 1rem;
    display: flex;
    align-items: center;
    flex: 1;
    &:after {
      flex: 1;
      content: "";
      display: inline-block;
      border-top: 1px solid #dbdbdb;
      margin-left: 0.18rem;
      vertical-align: middle;
    }
  }
}
.zu {
  margin-right: 0.18rem;
  font-size: 0.36rem;
  vertical-align: middle;
}

.describe {
  line-height: 0.5rem;
  overflow: hidden;
  transition: all 0.3s;
  word-break: break-all !important;
  white-space: normal !important;
  text-align: justify !important;
  table {
    width: 100% !important;
  }
  // .ellipsis-line();
}
.all-wrap {
  margin-top: 0.5rem;
  position: relative;
  color: #bdc1cc;
  line-height: 0.3rem;
  font-size: 0.24rem;
  .icon_more {
    position: relative;
    transition: all 0.3s;
    transform: rotate(90deg);
    color: #bdc1cc;
  }
  .up {
    transform: rotate(-90deg);
  }
}
.li2 {
  line-height: 0.5rem;
  border-bottom: 1px solid #dbdbdb;
  padding: 0.2rem 0;
  color: #888;
  .left {
    line-height: 0.7rem;
    font-weight: 600;
    color: #444;
  }
}

.li-pro {
  padding: 0.4rem 0;
  border-bottom: 1px solid #dbdbdb;
  line-height: 0.4rem;
  &:last-child {
    border: 0;
  }
  .cover-pro {
    width: 2.4rem;
    height: 1.72rem;
    margin-right: 0.2rem;
  }
  .title-pro {
    margin-top: 0.1rem;
    font-weight: 600;
    font-size: 0.3rem;
  }
  .txt1 {
    font-size: 0.24rem;
  }
  .txt2 {
    font-size: 0.2rem;
    color: #fcb33f;
  }
  .txt3 {
    font-size: 0.22rem;
  }
  .supplier-logo {
    width: 0.27rem;
    height: 0.27rem;
  }
}

.ul {
  position: relative;
  left: 0.1rem;
}
.li {
  position: relative;
  padding: 0 0 0.2rem 0.3rem;
  border-left: 1px solid #ccc;
  &:last-child {
    border: 0;
  }
  .dot {
    position: absolute;
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #6582ff;
    left: 0;
    transform: translate(-50%);
    box-shadow: 0 0 4px 0 #6582ff;
  }
  .time {
    color: #bbb;
    font-size: 0.28rem;
  }
  .event {
    padding: 0.2rem 0;
    line-height: 0.5rem;
    color: #666;
    font-size: 0.32rem;
  }
}
iframe {
  width: 100%;
  height: 10rem;
}
</style>
<style lang='less'>
table {
  width: 100%;
  td {
    text-align: justify !important;
  }
}
</style>
