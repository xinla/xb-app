<template>
  <div class="vit-picker" :style="resultShow ? 'transform: translateY(0%)' : ''">
    <div class="vit-title vit-border-bottom">
      <ul class="title">
        <li v-for="(item, index) in tabList" :key="index" @click="tabIndex = index" :class="{'active': tabIndex === index}">{{ item }}</li>
      </ul>
      <span class="vit-confirm" @click="confirm">确定</span>
    </div>
    <div class="vit-linkage">
      <div class="vit-pickerWrapper">
          <mt-picker :visibleItemCount="7" :slots="companyList" @change="companyChange" value-key="name"></mt-picker>
      </div>
      <div v-show="tabIndex === 1" class="vit-pickerWrapper">
          <mt-picker :visibleItemCount="7" :slots="orgList" @change="orgChange" value-key="name"></mt-picker>
      </div>
    </div>
  </div>
</template>

<script>
var mask = document.createElement('div')
import { getCompanyOrgan } from "@/api/entry"
export default {
  name: 'organPicker',
  props: {
    data: {
      type: Array,
      default: []
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      flag:0,
      resultShow: this.show,
      tabList: ['分公司', '营业部'],
      tabIndex: 0,
      company:{ name:'', id:'' },
      org:{ name:'', id:'' },
      companyList: [
        {
          flex: 1,
          values: this._getCompanyList(),
          textAlign: 'center'
        }
      ],
      orgList: [
        {
          flex: 1,
          values: [],
          textAlign: 'center'
        }
      ]
    }
  },
  watch: {
    show(val) {
      this.resultShow = val;
      mask.className = 'vit-mask';
      document.querySelector('.router-view').appendChild(mask);
      if (!val) {
        document.querySelector('.router-view').removeChild(mask);
      }
    },
    resultShow (val) {
      return val
    },
    tabIndex (val) {
      if (val) this._getOrgList(this.company.id || this.data[0].id)
    }
  },
  computed: {
    result() {
      return {
        name: this.tabIndex === 0 ? this.company.name : this.org.name,
        id: this.tabIndex === 0 ? this.company.id : this.org.id
      }
    }
  },
  mounted() {
    this._getOrgList(this.data[0].id)
  },
  methods: {
    cancel() {
      this.$emit('show', this.resultShow);
    },
    confirm() {
      if (!this.company.id) {
          this.company = JSON.parse(JSON.stringify(this.companyList[0].values[0]))
      }
      this.$emit('change', this.result);
      this.$emit('show', this.resultShow);
    },
    companyChange(picker, values) {
      if (this.flag === 0) return
      let companyIndex = picker.getSlotValue(0)
      this.company = companyIndex
      this._getOrgList(companyIndex.id)
    },
    orgChange(picker, values) {
      if (this.flag === 0) {
          this.flag = 1
          return
      }
      let orgIndex = picker.getSlotValue(0)
      this.org = orgIndex || this.company
    },
    // 得到分公司数据
    _getCompanyList() {
      let companys = []
      this.data.map(item =>{
        companys.push({
          id: item.id,
          name: item.organizeName
        })
      })
      return companys
    },
    //根据省份得到城市数据
    _getOrgList(orgId){
      let orgs = []
      getCompanyOrgan({
        companyId: this.$parent.companyId,
        orgId: orgId
      }).then(res => {
        res.map(item => {
          orgs.push({
            id: item.id,
            name: item.organizeName
          })
        })
        this.orgList[0].values = orgs
        this.org = orgs.length ? orgs[0] : this.company
      })
    }
  }
}
</script>

<style lang="less" scoped>
.vit-picker {
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    transition: transform .3s ease-out;
    overflow: hidden;
    z-index: 100;
    .vit-title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1.2rem;
      font-size: .34rem;
      line-height: .48rem;
      border-bottom:1px solid rgba(219,219,219,1);
      .title {
        height: 100%;
        display: flex;
        li {
          height: 100%;
          line-height: 1.2rem;
          padding: 0 .4rem;
          color:#A6ABB7;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            display: block;
            left: 50%;
            bottom: 0;
            width: 50%;
            margin-left: -25%;
            height: .06rem;
            border-radius: .03rem;
            background: #6582FF;
            transform: scale(0);
            transition: transform .2s ease-out;
          }
          &.active {
            color: #444;
            &::after {
              transform: scale(1);
            }
          }
        }
      }
      .vit-cancel {
          color: #A6ABB7;
          font-size: .32rem;
          padding: 0 .3rem;
      }
      .vit-confirm {
          color: #6582FF;
          font-size: .32rem;
          padding: 0 .3rem;
      }
    }
    .vit-linkage {
      display: flex;
      .vit-pickerWrapper {
        flex: 1;
      }
    }
}
</style>
