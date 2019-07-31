<template>
  <div class="home">
    <div>
      <div class="logo ac">现保</div>
      <router-link class="router-link" v-for="(item, index) in $router.options.routes" :to="item.path" :key="index">{{item.meta.title}}</router-link>
      <!-- <router-link to="/interest">查看权益</router-link>|
      <router-link to="/inform">告知项</router-link>|
      <router-link to="/application">投保单</router-link>|
      <router-link to="/company">公司详情</router-link> -->
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="less" scoped>
.logo {
  margin: 0 auto;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 2px solid #6582ff;
  border-radius: 50%;
}
.router-link {
  display: block;
  text-align: center;
  line-height: 40px;
}
</style>

