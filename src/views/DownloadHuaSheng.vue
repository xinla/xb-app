<template>
  <div>
    <img class="pc" src="@/assets/pc_download_huasheng.png" />

    <div class="phone ac">
      <img class="background" src="@/assets/back_hsbh.png" alt />
      <img class="logo" src="@/assets/logo_huasheng.png" alt />
      <h1>华圣百惠</h1>
      <div class="slogan">中华圣事，百惠于您</div>
      <div class="version">当前版本：V1.0.0</div>
      <div class="botton android">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon_android" />
            </svg>点击下载</div>
      <div class="botton ios">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon_ios" />
            </svg>正在加急上线</div>
      <div class="desc">
        <p>支持任意组织架构，实现所有相关者实时通讯，轻松实现产业链协同；</p>
        <p>用户精准画像，智能管理客户需求；</p>
        <p>可视化计划与日程管理，移动活动量管理，智能秘书贴心提醒；</p>
        <p>按需部署合作保险产品，按需展示合作保险品牌；</p>
        <p>分角色工作权限配置，工作台任意订制；</p>
        <p>支持Web、Android、消息与工作同步。这就是全新一代金融办公软件。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    document.title = "现保，现在就保";
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.router-view {
  max-width: 100%;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.logo {
  display: block;
  width: 2rem;
  height: 2rem;
  box-shadow: 0rem 0rem 0rem 0rem rgba(101, 129, 255, 0.3);
  border-radius: 0rem;
  margin: 1rem auto 0;
}
.android,
.ios {
  width: 3.2rem;
  height: 0.9rem;
  background-color: #ff9b48;
  box-shadow: 0rem 0rem 0.2rem 0rem rgba(101, 129, 255, 0.2);
  border-radius: 0.5rem;
  line-height: 0.9rem;
  color: #fff;
  .icon {
    font-size: .46rem;
    margin-right: 0.2rem;
    vertical-align: sub;
  }
}
.android {
  font-size: 0.32rem;
  margin: 0.8rem auto 0.4rem;
}
.ios {
  font-size: 0.28rem;
  background-color: #b5b5b5;
  margin: 0.4rem auto 0.8rem;
}
h1 {
  font-size: 0.42rem;
}
.version {
  color: #b5b5b5;
  font-size: 0.22rem;
  line-height: 0.3rem;
}
.desc {
  width: 5.7rem;
  text-align: justify;
  margin: 0 auto;
  line-height: 0.48rem;
  color: #444444;
  p {
    margin: 0.2rem 0;
  }
}
</style>

<style>
@media screen and (min-width: 451px) {
  .pc {
    display: block;
    margin: 0 auto;
  }
  .phone {
    display: none;
  }
}
@media screen and (max-width: 450px) {
  .pc {
    display: none;
  }
  .phone {
    display: block;
    line-height: 0.6rem;
  }
}
</style>


