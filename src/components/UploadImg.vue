<template>
  <div :class="['vit-prove', className]" @click="upload">
    <div class="vit-prove-file">
      <slot></slot>
      <img v-if="value" :src="value" />
      <input type="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple" style="display: none;">
    </div>   
  </div>
</template>

<script>
import { uploadFileApi } from "@/api/entry"
export default {
  name: 'uploadImg',
  props: {
    className: {
      type: String,
      default: ''
    },
    // 绑定的值
    value: {
      type: [Number, String, Boolean],
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    upload() {
      this.$refs.file.click()
    },
    fileChanged() {
      let self = this
      const list = this.$refs.file.files;
      if (list.length > 1) {
        this.Toast('最多只能选择1张图片')
        return
      }
      const formData = new FormData()
      formData.append("file", list[0])
      uploadFileApi(formData).then(res => {
        this.$emit('input', res.url)
      })
      this.$refs.file.value = ''
    }
  }
}
</script>


<style lang="less" scoped>
.vit-prove {
  width: 100%;
  .vit-prove-file {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

