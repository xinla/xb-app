<template>
  <div id="app">
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    var resizeEvt =
      "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(resizeEvt, subRecalc, false);
    document.addEventListener("DOMContentLoaded", subRecalc, false);
    function subRecalc() {
      var docEl = document.documentElement,
        clientWidth = Math.min(window.innerWidth, docEl.clientWidth);
      docEl.style.fontSize = (clientWidth / 750) * 100 + "px";
    }
  }
};
</script>

<style lang="less">
html,
body {
  background-color: #fff;
  width: 100%;
  height: 100%;
  color: #444444;
  min-width: 350px;
  max-width: 450px;
}
html {
  overflow-x: hidden;
  height: 100%;
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
.router-view {
  overflow: auto;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.btn-bottom{
  padding-bottom: 70px;
}
</style>
