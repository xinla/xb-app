<template>
  <div class="main" @scroll="scroll">
    <img src="@/assets/banner@2x.png" class="banner">

    <div class="tab-wrap">
      <div class="tab-title">保障利益</div>
      <mt-tab-container value="1" swipeable>
        <mt-tab-container-item id="1">
          <ul class="tab1">
            <li>
              <span>标题文字</span>
              <span class="fr">标题文字</span>
            </li>
            <li>
              <span>标题文字</span>
              <span class="fr">标题文字</span>
            </li>
            <li>
              <span>标题文字</span>
              <span class="fr">标题文字</span>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">874989654sfawef wr</mt-tab-container-item>
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
        <img src="@/assets/test.png" alt="">
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">874989654sfawef wr</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      offsetTop: 0
    };
  },
  mounted() {
    this.offsetTop = this.$refs['tab2-title-wrap'].offsetTop
  },
  methods: {
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
</style>

