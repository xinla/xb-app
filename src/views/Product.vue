<template>
  <div class="main" @scroll="scroll">
    <img :src="product.webBanner" class="banner">

    <div class="tab-wrap">
      <div class="tab-title" v-for="(item, index) in product.insurableInterest" :key="index">{{item.scheduleName}}</div>
      <mt-tab-container v-model="tabActive" swipeable>
        <mt-tab-container-item v-for="(item, index) in product.insurableInterest" :key="index" :id="index" >
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
      <li :class="{current: active === '1'}" @click="active = '1'">保险详情
        <div class="line" v-show="active === '1'"></div>
      </li>
      <li :class="{current: active === '2'}" @click="active = '2'">费率表
        <div class="line" v-show="active === '2'"></div>
      </li>
      <li :class="{current: active === '3'}" @click="active = '3'">投保规则
        <div class="line" v-show="active === '3'"></div>
      </li>
      <li :class="{current: active === '4'}" @click="active = '4'">产品条款
        <div class="line" v-show="active === '4'"></div>
      </li>
    </ul>
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="1">
        <img :src="product.descPicture" alt="">
        <!-- </ul> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="2">874989654sfawef wr</mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="insurance-text" v-html="product.underwritingRulesText"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <!-- <object v-for="(item, index) in product.attachment.productCourse" width="100%" height="100%" :data="item.url" type="application/pdf" :key="index">
            <embed :src="item.url" type="application/pdf" :key="index">
                <p>This browser does not support PDFs. Please download the PDF to view it: <a :href="item.url">Download PDF</a>.</p>
            </embed>
        </object> -->
        <img v-for="(item, index) in product.attachment.productCourse" :src="item.url" :key="index">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { getProductDetail } from "@/api/product";

export default {
  data() {
    return {
      tabActive: 0,
      active: "1",
      offsetTop: 0,
      product: {
        attachment:{}
      }
    };
  },
  mounted() {
    let query = {
      id: this.$route.query.id || '2266402544886480903',
      token: this.$route.query.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJXRUIiLCJpc3MiOiJhdXRoLXNlcnZlciIsImV4cCI6MTU2MDE1MDczOCwiaWF0IjoxNTYwMTQ3MTM4LCJ1c2VySWQiOjIyNjQ0ODU0NTI2MjkxNDc2NTV9.J0Mcx9__QX9TG2Ljyy7eGQuOBtBuIS1tQ7qdrB1Ttt4'
    }
    this.getData(query)
    
    this.offsetTop = this.$refs['tab2-title-wrap'].offsetTop
  },
  methods: {
    getData(query) {
      getProductDetail(query).then(res =>{
        res.insurableInterest = JSON.parse(res.insurableInterest) || []
        res.attachment.productCourse = JSON.parse(res.attachment.productCourse) || []
        this.product = res
        console.log(res)
      })
    },
    scroll($event) {
      // console.log(this.$refs['tab2-title-wrap'].offsetTop)
      if ($event.target.scrollTop >= this.offsetTop) {
        this.$refs['tab2-title-wrap'].style.position = 'fixed'
      } else {
        this.$refs['tab2-title-wrap'].style.position = 'relative'
      }
    }
  }
};
</script>

<style lang="less" scoped>
.main{
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
  padding: .3rem .3rem 0;
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
.tab2-title-wrap{
  display: flex;
  justify-content: space-around;
  background: #fff;   
  border-bottom: solid 1px #f1f3f5;
  line-height: 0.8rem;
  color: #a6abb7;
  z-index: 1;
  width: 100%;
  top: 0;
  .current{
    color: #444;
  }
  .line{
    width: .4rem;
    height: 6px;
    background-color: #6582ff;
    border-radius: 3px;
    margin: 0 auto;
  }
}
.insurance-text{
  margin: .2rem;
}
</style>

