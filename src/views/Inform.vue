<template>
  <div>
    <div class="container">
      <div class="title">
        <b>健康告知</b>
        <span class="button">查看全部</span>
        <span class="button">查看提示</span>
      </div>

      <div class="number-line">2</div>

      <div>
        <p>
          您是否每日吸烟超过10支，若是，请详述每日吸烟支数
          及吸烟年限；每日饮酒（白酒）超过100毫升？或是，
          请详述饮酒量、饮酒年限。
        </p>
        <div class="switch-wrap">
          <div class="half">
            投保人
            <mt-switch v-model="value"></mt-switch>
          </div>
          <div class="half">
            被保人
            <mt-switch v-model="value"></mt-switch>
          </div>
        </div>

        <div class="input-wrap">
          <div class="title2">被保人吸烟情况</div>
          <div class="half">
            吸烟
            <input class="input" v-model="username">年
          </div>
          <div class="half">
            每天
            <input class="input" v-model="username">支
          </div>
        </div>

        <div class="input-wrap">
          <div class="title2">被保人饮酒情况</div>
          <div class="half">
            喝酒
            <input class="input" v-model="username">年
          </div>
          <div class="half">
            喝酒
            <input class="input" v-model="username">两
          </div>
        </div>

        <div class="number-line">3</div>

        <div>
          <p>是否曾经或正在使用任何成瘾药物，如镇静安眠剂、迷幻药、吸食有机溶剂或毒品。</p>
          <div class="switch-wrap">
            <div class="half">
              投保人
              <mt-switch v-model="value"></mt-switch>
            </div>
            <div class="half">
              被保人
              <mt-switch v-model="value"></mt-switch>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="title">
        <b>财务和其他告知</b>
        <span class="button">查看全部</span>
        <span class="button">查看提示</span>
      </div>

      <div class="number-line">2</div>

      <div>
        <p>您是否持有有效机动车驾驶执照？</p>
        <div class="switch-wrap">
          <div class="half">
            投保人
            <mt-switch v-model="value"></mt-switch>
          </div>
          <div class="half">
            被保人
            <mt-switch v-model="value"></mt-switch>
          </div>
        </div>

        <div class="number-line">3</div>

        <div>
          <p>您是否已已购买或正在向保其他保险公司申请购买（指提交投保申请但保险公司还未正式签单）人身保险合同？若“是”，请详细描述：保险公司名称、险种名称、保险金额及日期。</p>
          <div class="switch-wrap">
            <div class="half">
              投保人
              <mt-switch v-model="value"></mt-switch>
            </div>
            <div class="half">
              被保人
              <mt-switch v-model="value"></mt-switch>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom: .2rem;">
      <div class="title">
        <b>代理人告知</b>
      </div>

      <div>
        <p>您是投/被保险人本人或投/被保险人的父母、配偶、子女、兄弟姐妹吗？若“是”请选择：</p>
        <div class="switch-wrap">
          <div class="half"></div>
          <div class="half" style="padding-left: 20%;">
            <mt-switch v-model="value"></mt-switch>
          </div>
        </div>

        <div class="input-wrap" style="line-height: .8rem; height: auto;">
          <div class="half" style="padding: 0;">
            <input type="radio" id="0" value="0" v-model="value1">
            <label for="0">本人</label>
            <br>
            <input type="radio" id="1" value="1" v-model="value1">
            <label for="1">子女</label>
            <br>
            <input type="radio" id="2" value="2" v-model="value1">
            <label for="2">其他</label>
            <br>
          </div>
          <div class="half" style="padding: 0;">
            <input type="radio" id="3" value="3" v-model="value1">
            <label for="3">父母</label>
            <br>
            <input type="radio" id="4" value="4" v-model="value1">
            <label for="4">配偶</label>
          </div>
          <input v-if="value1 == 2" type="textarea" v-model="text" placeholder="请填写你们之间的关系">
        </div>
      </div>
    </div>

    <div class="container">
      <div class="title">
        <b>投保人声明</b>
      </div>

      <p>本人声明针对上述健康告知/财务告知的回答属实，并以此作为保险合同的组成部分，如有隐瞒或告知不实，足以影响贵公司承保决定的，所签发的保险合同将视为无效，贵公司有权解除合同。对于合同解除前发生的任何事故，贵公司不承担任何责任。</p>

      <div class="ac" style="margin: .5rem 0;">
        <input type="checkbox" id="checkbox" v-model="value">
        <label for="checkbox">
          <svg class="icon icon_selected_r" aria-hidden="true">
            <use xlink:href="#icon_selected_r"></use>
          </svg>
        </label>
        本人我已阅读并同意
        <span class="blue">《投保人声明》</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value: false,
      value1: "",
      username: "",
      text: ''
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  border-bottom: 0.1rem solid #f1f3f5;
  padding: 0 0.3rem;
  p {
    line-height: 0.5rem;
  }
  .title {
    margin: 0.3rem 0;
    overflow: hidden;
    .button {
      width: 1.5rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border-radius: 0.3rem;
      border: solid 1px #dbdbdb;
      margin-left: 0.3rem;
      text-align: center;
      font-size: 0.24rem;
      float: right;
    }
  }
  .number-line {
    position: relative;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
    line-height: 0.5rem;
    text-align: center;
    color: #6582ff;
    margin: 0.4rem 0;
    &:after {
      position: absolute;
      content: "";
      width: 6rem;
      display: inline-block;
      border: 1px solid #ddd;
      top: 50%;
      left: 0.8rem;
    }
  }
  .switch-wrap {
    margin: 0.4rem 0;
    text-align: center;
  }
  .half {
    display: inline-block;
    width: 50%;
    padding: 0 5%;
    vertical-align: top;
  }
  .input-wrap {
    height: 1.7rem;
    background-color: #f1f3f5;
    border-radius: 10px;
    padding: 0 0.3rem 0.3rem;
    margin-bottom: 0.2rem;
    .title2 {
      padding: 0.3rem 0 0.5rem;
    }
  }
  .input {
    width: 1rem;
    margin: 0 0.2rem;
    border-bottom: 1px solid #ddd;
  }
}
.mint-switch {
  display: inline-block;
  margin-left: 0.4rem;
  vertical-align: middle;
}
.radio {
  display: inline-block;
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 50%;
  border: 2px solid #ddd;
}
input[type="radio"] + label::before {
  content: "";
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 50%;
  border: 2px solid #ddd;
  vertical-align: sub;
}
input[type="radio"]:checked + label::before {
  background: #6582ff;
}
input[type="textarea"] {
  border: 1px solid transparent;
  border-radius: 8px;
  min-height: 1.5rem;
  width: 100%;
  background: #fff;
  text-indent: 1em;
  
}

input[type="checkbox"] + label::before {
  content: "";
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 4px;
  border: 2px solid #ddd;
  vertical-align: sub;
}
input[type="checkbox"]:checked + label::before {
  display: none;
}
input[type="checkbox"] + label .icon {
  display: none;
}
input[type="checkbox"]:checked + label .icon {
  display: inline-block;
}

.blue {
  color: #6582ff;
}
</style>
