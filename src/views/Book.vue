<template>
  <div>
    <img src="../assets/book1.png" alt />
    <img src="../assets/book2.png" alt />
    <div class="red-wrap">
      <p class="red">
        我公司{{info.years}}年{{info.quarter}} 季度公司综合偿付能力充足率为 {{info.solvencyRate}}%，风险 综 合 评级为{{info.riskLevel}} 类，偿付能力充足
        率 {{info.state == 1 ? '达到监管要求' : '未达到监管要求'}}，最近一期详细《长城人寿偿付能力披露通知书》已经公布在官网（www.greatlife.cn）公
        开信息披露偿付能力栏目中，请您及时查阅。
      </p>
      <span class="fr">2019年4月版</span>
    </div>
  </div>
</template>

<script>
import { getPolicyPromptBook } from "@/api/inform";
export default {
  components: {},
  props: {},
  data() {
    return {
      info: {
        years: "", // 年度
        quarter: "", // 季度 1:一季度； 2:二季度； 3:三季度； 4:四季度；
        state: "", // 是否达到监管要求  1:达到监管要求； 0:未达到监管要求
        riskLevel: "", // 风险综合评级   字母(A,B,C,D)
        solvencyRate: "" // 偿付能力比率   数值(无百分号)
      }
    };
  },
  mounted() {
    getPolicyPromptBook(this.$route.query.id, this.$route.query.token).then(
      res => {
        this.info = res;
      }
    );
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.red-wrap {
  padding: 0 36px 40px;
  font-size: 12px;
  text-align: justify;
}
.red {
  color: red;
  line-height: 0.36rem;
}
</style>
