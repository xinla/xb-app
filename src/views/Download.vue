<template>
  <div>
    <img class="pc" src="@/assets/pc_download_xianbao.png" />

    <div class="phone ac">
      <transition name="slide-down">
      <div class="browser al slide-down" v-if="isWeChat">点击右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可下载安装。</div>
      </transition>
      <img class="background" src="@/assets/back_xianbao.png" alt />
      <img class="logo" src="@/assets/logo_xianbao.png" alt />
      <h1>现保</h1>
      <div class="slogan">让保险创业更简单</div>
      <div class="version">当前版本：V{{version.versionNum}}</div>
      <div class="botton android">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon_android" />
        </svg>
        <a :href="version.download">点击下载</a>
      </div>
      <div class="botton ios">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon_ios" />
        </svg>
        <a href="https://apps.apple.com/cn/app/%E7%8E%B0%E4%BF%9D/id1475200923">点击下载</a>
      </div>
      <div class="desc">
        <p>
          支持任意组织架构，实现所有相关者实时通
          讯，轻松实现产业链协同；
        </p>
        <p>以家族树方式实现客户管理，客户精准画像，智能管理客户需求；</p>
        <p>可视化计划与日程管理，移动活动量管理，智能秘书贴心提醒；</p>
        <p>按需部署合作保险产品，按需展示合作保险品牌；</p>
        <p>分角色工作权限配置，工作台任意订制；</p>
        <p>支持Web、Android、iOS三端消息与工作同步。一套软件解决保险中介企业所有科技化命题。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getVersionPage } from "@/api/download";

export default {
  components: {},
  props: {},
  data() {
    return {
      version: {
        versionNum: '',
        download: ''
      },
      isWeChat: false
    };
  },
  computed: {},
  watch: {},
  created() {
    document.title = "现保，现在就保";
  },
  mounted() {
    navigator.userAgent.indexOf("MicroMessenger") > -1 && (this.isWeChat = true)
    getVersionPage().then(res => {
      res.list[0] && (this.version = res.list[0])
      // console.log(this.version)
    })
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
#app,.router-view {
  max-width: 100%;
  background-color: inherit;
}
.browser{
  background: #444444;
  padding: .6rem;
  color: #888;
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
  background-color: #6581ff;
  box-shadow: 0rem 0rem 0.2rem 0rem rgba(101, 129, 255, 0.2);
  border-radius: 0.5rem;
  line-height: 0.9rem;
  color: #fff;
  .icon {
    font-size: 0.46rem;
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
  margin: 0.4rem auto 0.8rem;
}
h1 {
  font-size: 0.42rem;
}
.slogan {
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

.slide-down-enter-active {
  transition: all 0.3s ease;
}
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-down-enter, .slide-down-leave-to
/* .slide-down-leave-active for below version 2.1.8 */ {
  opacity: 0;
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


