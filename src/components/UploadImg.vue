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
import { compressImage } from '@/utils/compressImageUtils'
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
    //压缩图片上传
    _compressAndUploadFile(file) {
      compressImage(file.content).then(result => {
        // console.log('压缩前:' + file.file.size, '压缩后:' + result.size)
        if (result.size > file.file.size){
          //压缩后比原来更大，则将原图上传
          this._uploadFile(file.file, file.file.name);
        } else {
          //压缩后比原来小，上传压缩后的
          this._uploadFile(result, file.file.name)
        }
      })
    },
    fileChanged() {
      const list = this.$refs.file.files
      let fileInfo = {}
      if (list.length > 1) {
        this.Toast('最多只能选择1张图片')
        return
      }
      fileInfo.file = list[0]
      const reader = new FileReader()
      reader.onload = e => {
        fileInfo.content = e.target.result
        this._compressAndUploadFile(fileInfo);
      };
      reader.readAsDataURL(list[0])
    },
    //上传图片
    _uploadFile(file, filename) {
      const formData = new FormData()
      formData.append("file", file, filename)
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

