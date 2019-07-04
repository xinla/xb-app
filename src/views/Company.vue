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

    <div class="title">公司里程碑</div>
    <ul>
      <li class="li" v-for="(item, index) of result.bigEvents" :key="index">
        <i class="dot"></i>
        <div class="time">{{item.prizeTime}}</div>
        <div class="event">{{item.bigEvents}}</div>
      </li>
      <li class="li">
        <i class="dot"></i>
        <div class="time">更多里程碑事件等待发生</div>
      </li>
    </ul>

    <div class="title">公司荣誉</div>
    <ul>
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
        <span class="right">{{result.xbCompany.telephoneNumber}}</span>
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
        bigEvents: [],
        honor: [],
        xbCompany: {}
      },
      isShow: false
    };
  },
  mounted() {
    let query = {
      id: this.$route.query.id || "2252114126136410115",
      token:
        this.$route.query.token ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJXRUIiLCJpc3MiOiJhdXRoLXNlcnZlciIsImNvbXBhbnkiOiJ7XCJhY3R1YWxBbm5pdmVyc2FyeVwiOjE1NTc3NjMyMDAwMDAsXCJidXNpbmVzc1R5cGVcIjowLFwiY2l0eUlkXCI6XCIzNDAxMDBcIixcImNvbWFwbnlUeXBlXCI6dHJ1ZSxcImNvbXBhbnlDb250ZW50XCI6XCI8cD7lronlv4Pkv53pmanlj6_pnaDvvIzlronlhajvvIzmlL7lv4Mu44CC44CC44CC44CCPC9wPlwiLFwiY29tcGFueUZvclNob3J0XCI6XCLlronlv4Pkv53pmalcIixcImNvbXBhbnlTbG9nYW5cIjpcIuihjOS4muesrOS4gFwiLFwiY29tcGF5QWNjb3VudFR5cGVcIjowLFwiZW5nbGlzaE5hbWVcIjpcIlwiLFwiZW5nbGlzaE5hbWVGb3JTaG9ydFwiOlwiXCIsXCJoZWFkcXVhcnRlcnNBZGRyZXNzXCI6XCLmtYvor5VcIixcImhpZGRlbkNoYWlybWFuSW5mb1wiOjAsXCJoaWRkZW5NYW5hZ2VySW5mb1wiOjAsXCJpZFwiOjIyNTIxMTQxMjYxMzY0MTAxMTUsXCJpc0FjdGl2ZVwiOjEsXCJpc0RlbFwiOjAsXCJpc0dlbmVyYXRlR3JvdXBcIjoxLFwibG9nb1wiOlwiaHR0cDovL3d3dy5jb21tb24udmlzdWFsaW5zdXIuY29tL2NvbW1vbl8yMjg4ODc5OTQ1NzM0MTYwMzg2XzE1NjE2OTA3MjY4NTUucG5nXCIsXCJuYW1lXCI6XCLlronlvr3lronlv4Pkv53pmanku6PnkIbmnInpmZDlhazlj7hcIixcIm91dHNpZGVBbGxBdXRob3JpdHlcIjowLFwicHJvdmluY2VJZFwiOlwiMzQwMDAwXCIsXCJyZWdpc3RyYXRpb25EYXRlXCI6MTU2MDk2MDAwMDAwMCxcInRlbGVwaG9uZU51bWJlclwiOlwiMTIzNDQzNTQ0MVwiLFwidXBkYXRlVGltZVwiOjE1NTg5MjAzNzUwMDB9Iiwic3RhdGUiOiIxIiwiZXhwIjoxNTYyMjEwMjM2LCJpYXQiOjE1NjIyMDY2MzYsInVzZXJJZCI6MjI2NTY0Mjk0OTMxMDE1MjcwNn0.KG2d0T0asGiort7eefXiSPVgPWFws2CwvFUrZ5qzwE0"
    };
    this.getData(query);
  },
  methods: {
    getData(query) {
      getCompanyDetail(query).then(res => {
        // console.log(res);
        this.result = res;
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
  word-break: break-all;
  // .ellipsis-line();
}
.all-wrap {
  color: #6582ff;
  line-height: 1rem;
  .icon_more-B {
    transition: all 0.3s;
    margin-left: 5px;
    transform: rotate(90deg);
  }
  .up {
    transform: rotate(-90deg);
  }
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
    margin: 0.2rem 0;
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
  }
}
</style>
