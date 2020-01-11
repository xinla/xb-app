<template>
  <div :class="['vit-radio', className]">
    <div class="radio-item" v-for="(item, index) in listData" :key="className + '_' + index" @click="updateVal(item.code, item.disabled)">
      <label class="ui-radio" :class="{'checked':model === item.code,'disabled': item.disabled}">
        <input type="radio" ref="radio" :value="item.code" :disabled="item.disabled">
      </label>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import DC from '@/utils/dictionary.json'
export default {
  name: 'Radio',
  model: {//自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
    prop: 'model',
    event: 'change'
  },
  props:{
    value:{//radio的value属性
      type:[String,Number],
      require:true
    },
    model:{//这里的model指的是上面定义的v-model的prop
      type:[String,Number],
      require:true
    },
    className: {
      type: String,
      default: ''
    },
    // 键名
    keys: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      listData: DC[this.keys] || [],
      valueCode: ''
    }
  },
  mounted () {},
  methods:{
    updateVal (code, state) {
      //当用户点击radio时,触发change事件更新v-model
      if (!state) this.$emit('change', code)
    }
  }
}
</script>

<style lang="less" scoped>
.vit-radio {
  .radio-item {
    display: flex;
    align-items: center;
    padding-right: .3rem;
  }
  .ui-radio{
    width: .28rem;
    height: .28rem;
    margin-right: .2rem;
    box-sizing: border-box;
    border:#b8b8b8 solid 1px;
    border-radius: .14rem;
    background:#fff;
    position: relative;
    input[type=radio]{
      opacity: 0;
      margin: 0;
    }
    &.disabled{
      background: rgb(236, 236, 236);
    }
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: .2rem;
      height: .2rem;
      border-radius: .1rem;
      margin: -.1rem 0 0 -.1rem;
      background:rgba(101,130,255,1);
      opacity: 0;
      transition: opacity .3s ease-in-out;
    }
    &.checked::after {
      opacity: 1;
    }
    &.disabled.checked::after {
      background:#b8b8b8;
    }
  }
}

</style>
