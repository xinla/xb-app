<style lang="less" scoped>
.select-list {
  display: flex;
  align-items: center;
  .value {
    flex: 1;
  }
  .is-null {
    color:#CACDD4;
  }
  .icon-arr {
    font-size: .24rem;
  }
  .icon-birth {
    font-size: .3rem;
  }
}
</style>
<style lang="less">
.vit-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
}
.vit-actionsheet {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 .3rem;
  background: #fff;
  transform: translateY(100%);
  transition: transform .3s ease-out;
  overflow: hidden;
  z-index: 100;
  ul {
    overflow-y: auto;
    li {
      text-align: center;
      font-size: .32rem;
      line-height: .45rem;
      height: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom:1px solid rgba(219,219,219,1);
    }
    li:last-child {
      border-bottom: 0;
    }
  }
  .vit-header {
    display: flex;
    align-items: center;
    height: 1.2rem;
    box-sizing: border-box;
    position: relative;
    border-bottom:1px solid rgba(219,219,219,1);
    span {
      flex: 1;
      font-size: .34rem;
      text-align: center;
      line-height: .48rem;
      font-weight: bold;
    }
    .vit-cancel{
      width: .36rem;
      height: .36rem;
      background: url(../assets/icon_close.png) center center no-repeat;
      background-size: 60% 60%;
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -.18rem;
    }
  }
}
</style>

<template>
  <div :class="['select-list', className]" @click="selectOpenFn">
    <input ref="input" type="hidden" :value="value" @input="_changeValue"/>
    <span :class="{'value': true, 'is-null': isNull}">{{ valueStr }}</span>
    <svg class="icon icon-arr" aria-hidden="true"><use xlink:href="#icon_more"></use></svg>
  </div>
</template>

<script>
import sheet from "@/utils/actionsheet"
import DC from '@/utils/dictionary.json'
export default {
  name: 'Select',
  props: {
    classOverflow: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '',
    },
    // 绑定的值
    value: {
      type: [Number, String, Boolean],
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
      valueCode: ''
    }
  },
  computed: {
    valueStr () {
      let Str = '请选择' + this.label
      if (this.valueCode) {
        let strIndex = DC[this.keys].findIndex(a => a.code === this.valueCode)
        Str = strIndex > -1 ? DC[this.keys][strIndex].name : Str
      }
      return Str
    },
    isNull () {
      return !(this.valueCode || this.valueCode === 0)
    }
  },
  methods: {
    selectOpenFn () {
      sheet.actionsheet({
        title: '选择' + this.label,
        items: DC[this.keys]
      }, this.classOverflow).then(res => {
        this.valueCode = res.code
        this._changeValue(this.valueCode)
      })
    },
    _changeValue(value) {
      // 这里手动触发一下 input 事件，并且把值传进去
      this.$emit('input', value)
    },
  },
  mounted() {
    this.valueCode = this.value
  }
}
</script>