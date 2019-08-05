<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    var docEl = document.documentElement,
      resizeEvt =
        "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(resizeEvt, subRecalc, false);
    document.addEventListener("DOMContentLoaded", subRecalc, false);
    function subRecalc() {
      var clientWidth = Math.min(window.innerWidth, docEl.clientWidth);
      clientWidth >= 450 && (clientWidth = 450);
      docEl.style.fontSize = (clientWidth / 750) * 100 + "px";
    }
  }
};
</script>

<style lang="less">
// @media screen and (min-width: 450px) {
//     html {
//         font-size: 60px !important;
//     }
// }
html,
body {
  width: 100%;
  height: 100%;
  color: #444444;
  min-width: 350px;
  // max-width: 450px;
}
body {
  font-size: 0.28em;
  line-height: 1;
  -webkit-overflow-scrolling: touch;
}
#app,
.router-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.router-view{
  background-color: #fff;
}
.router-view,
.wrapper {
  overflow-y: auto;
  min-width: 350px;
  max-width: 450px;
  margin: 0 auto;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.btn-bottom {
  padding-bottom: 70px;
}
</style>
