<template>
    <div class="vit-picker" :style="resultShow ? 'transform: translateY(0%)' : ''">
        <div class="vit-title vit-border-bottom">
            <span class="vit-cancel" @click="cancel">取消</span>
            <span class="title">{{ title }}</span>
            <span class="vit-confirm" @click="confirm">确定</span>
        </div>
        <div class="vit-linkage">
            <div class="vit-pickerWrapper">
                <mt-picker ref="province" :slots="provinces" :visibleItemCount="7" @change="onProvinceChange" value-key="name"></mt-picker>
            </div>
            <div class="vit-pickerWrapper">
                <mt-picker :slots="citys" @change="onCityChange" :visibleItemCount="7" value-key="name"></mt-picker>
            </div>
            <div class="vit-pickerWrapper">
                <mt-picker :slots="areas" @change="onAreaChange" :visibleItemCount="7" value-key="name"></mt-picker>
            </div>
        </div>
    </div>
</template>

<script>
var mask = document.createElement('div');
export default {
    name: 'cityPicker',
    props: {
        data: {
            type: Array,
            default: []
        },
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '选择省市区'
        }
    },
    data() {
        return {
            value: '',
            resultShow: this.show,
            province:{
                name:'',
                id:''
            },
            maskFlag:false,
            city:{
                name:'',
                id:''
            },
            area:{
                name:'',
                id:''
            },
            flag:0,
            provinces: [
                {
                    flex: 1,
                    values: this._getProvince(),
                    textAlign: 'center'
                }
            ],
            citys: [
                {
                    flex: 1,
                    values: this._getCity(),
                    textAlign: 'center'
                }
            ],
            areas: [
                {
                    flex: 1,
                    values: this._getArea(),
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
        resultShow(val) {
            return val;
        }
    },
    computed: {
        result() {
            return {
                name: this.province.name + '/' + this.city.name + '/' + this.area.name,
                id: this.province.id + ',' + this.city.id + ',' + this.area.id
            }
        }
    },
    mounted() {},
    methods: {
        cancel() {
            this.$emit('show', this.resultShow);
        },
        confirm() {
            if (!this.province.name) {
                this.province = JSON.parse(JSON.stringify(this.provinces[0].values[0]))
            }
            if (!this.city.name) {
                this.city = JSON.parse(JSON.stringify(this.citys[0].values[0]))
            }
            if (!this.area.name) {
                this.area = JSON.parse(JSON.stringify(this.areas[0].values[0]))
            }
            this.$emit('change', this.result);
            this.$emit('show', this.resultShow);
        },
        onProvinceChange(picker, values) {
            if (this.flag === 0){
                return
            }
            let provinceIndex = picker.getSlotValue(0);
            this.province = provinceIndex;
            let city = this._getCity(provinceIndex.name);
            this.citys[0].values = city;
            this.city = city[0];
        },
        onCityChange(picker, values) {
            if (this.flag === 0){
                return
            }
            let cityIndex = picker.getSlotValue(0);
            this.city = cityIndex;
            let provinceIndex = this.province;
            let area = this._getArea(provinceIndex.name,cityIndex.name);
            this.areas[0].values = area;
            this.area = area[0];
        },
        onAreaChange(picker, values) {
            if (this.flag === 0){
                this.flag = 1
                return
            }
            let areaIndex = picker.getSlotValue(0);
            this.area = areaIndex;
        },
        //得到省份数据
        _getProvince(name) {
            let province = []
            this.data.forEach(function(item,index){
                let obj = {};
                obj.id = item.adcode;
                obj.name = item.name;
                province.push(obj);
                return
            });
            return province;
        },
        //根据省份得到城市数据
        _getCity(province){
            let city=[]
            this.data.forEach((item,index)=>{
                if(item.name == province || !province){
                    item.districts.forEach((item,index)=>{
                        let obj = {};
                        obj.id = item.adcode;
                        obj.name = item.name;
                        city.push(obj);
                        return
                    });
                }
            });
            return city
        },
        //根据城市和省份得到区域数据
        _getArea(province,city){
            let area = [];
            this.data.forEach((item,index)=> {
                if (item.name == province || !province) {
                    item.districts.forEach((item,index)=>{
                        if(item.name == city || !city){
                            item.districts && item.districts.forEach((item)=>{
                                let obj = {};
                                obj.id = item.adcode;
                                obj.name = item.name;
                                area.push(obj);
                                return
                            });
                        }
                    });
                }
            });
            if (area.length==0){ //如果没有区域数据则第三个picker显示的内容
                area.push({
                    name: ' ',
                    id: '000000'
                });
            }
            return area;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.2rem;
        border-bottom:1px solid rgba(219,219,219,1);
        span {
            display: inline-block;
            font-size: .34rem;
            line-height: .48rem;
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
        overflow: hidden;
        .vit-pickerWrapper {
            float: left;
            width:33.3%;
        }
    }
}
</style>
