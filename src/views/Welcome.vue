<template>
  <div class="wrap">
    <h1 class="header">欢迎使用现保，进入实时办公新世界</h1>
    <div class="department">现保研发部</div>
    <p>现保，是一个平台。现保致力于聚合行业资源、构建产业链通讯协作，让您的工作更简单，让信息与服务可以实时抵达，让客户更加信赖。</p>
    <p>现保由一批90后程序员倾情研发，我们满怀热情，怀着对美好世界的向往，打磨不一样的软件。虽然我们刚刚开始，我们已知远方在哪里，我们每一天都在努力，以攀登互联网软件的巅峰。</p>
    <p>如果您在使用中有任何不爽，可以到“我的-帮助与反馈”里去吐槽。我们将第一时间修正或迭代。</p>
    <p>我们的使命是让您的创业更容易成功，我们存在的价值恰恰就是您的成功。我们是一群简单而坦诚的人，我们像您一样热爱工作，热爱创造价值，让我们一起把世界变得更加美好。</p>
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
    document.title = '欢迎信'
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.wrap {
  line-height: .6rem;
  padding: 0 0.3rem;
  .header {
    // line-height: 1rem;
    margin: .2rem 0;
    font-size: .4rem;
  }
  p {
    margin: .6rem 0;
    font-size: .36rem;
    text-align: justify;
  }
  .department{
    color: rgb(7, 151, 55);
    font-size: .32rem;
  }
}
</style>
