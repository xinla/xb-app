<template>
  <div class="main">
    <div class="title">公司简介</div>
    <p
      ref="describe"
      class="describe"
      :style="{maxHeight: allShow ? 'none' : '100px'}"
      v-html="result.xbCompany.companyContent"
    ></p>
    <div class="ac all-wrap" v-if="isShow">
      <span @click="toggle">
        {{allShow ? '收起' : '阅读全文'}}
        <svg
          class="icon icon_more-B"
          aria-hidden="true"
          :style="{transform: allShow ? 'rotate(-90deg)' : 'rotate(90deg)'}"
        >
          <use xlink:href="#icon_more-B" />
        </svg>
      </span>
    </div>

    <template v-if="result.bigEvents.length">
      <div class="title">公司里程碑</div>
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

    <div class="title" v-if="result.honor.length">公司荣誉</div>
    <ul class="ul">
      <li class="li" v-for="(item, index) of result.honor" :key="index">
        <i class="dot"></i>
        <div class="time">{{item.prizeTime}}</div>
        <div class="event">{{item.honorName}}</div>
      </li>
    </ul>

    <div class="title">联系方式</div>
    <ul>
      <li class="li2">
        <span class="left">服务电话</span>
        <a :href="result.xbCompany.telephoneNumber" class="right">{{result.xbCompany.telephoneNumber}}</a>
      </li>
      <li class="li2">
        <span class="left">公司地址</span>
        <span class="right">{{result.xbCompany.headquartersAddress}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCompanyDetail } from "@/api/company";

export default {
  data() {
    return {
      allShow: false,
      result: {
        bigEvents: [
          // {
          //   prizeTime: 1654,
          //   bigEvents: '更多里程碑事件等待发生'
          // },
          // {
          //   prizeTime: 1654,
          //   bigEvents: '更多里程碑事件等待发生'
          // },
        ],
        honor: [],
        xbCompany: {}
      },
      isShow: false
    };
  },
  mounted() {
    let query = {
      id: this.$route.query.id || "2291195929463619591",
      token: this.$route.query.token
    };
    this.getData(query);
  },
  methods: {
    getData(query) {
      getCompanyDetail(query).then(res => {
        // console.log(res);
        this.result = res;
        // 用于设置分享标题
        document.title = res.xbCompany.companyForShort || res.xbCompany.name;
        this.$nextTick(() => {
          if (this.$refs.describe.clientHeight >= 100) {
            this.isShow = true;
          }
          // console.log(this.$refs.describe.offsetHeight);
        });
      });
    },
    toggle() {
      this.allShow = !this.allShow;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  padding: 0.25rem;
}
.title {
  font-size: 0.32rem;
  font-weight: 600;
  line-height: 1rem;
}
.describe {
  line-height: 0.5rem;
  overflow: hidden;
  transition: all 0.3s;
  // word-break: break-all;
  text-align: justify !important;
  // .ellipsis-line();
}
.all-wrap {
  position: relative;
  color: #6582ff;
  line-height: 1rem;
  .icon_more-B {
    position: relative;
    transition: all 0.3s;
    margin-left: 5px;
    transform: rotate(90deg);
  }
  .up {
    transform: rotate(-90deg);
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
    font-size: 0.24rem;
  }
  .event {
    padding: 0.2rem 0;
    line-height: 0.5rem;
    color: #666;
  }
}
.li2 {
  display: flex;
  justify-content: space-between;
  line-height: 0.5rem;
  border-bottom: 1px solid #ddd;
  color: #888;
  padding: 0.2rem 0;
  align-items: center;
  .right {
    width: 60%;
    color: #666;
    text-align: right;
    font-weight: 600;
  }
}
</style>
