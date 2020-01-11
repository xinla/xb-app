
<style lang="less" scoped>
.container {
  border-bottom: 0.1rem solid #f1f3f5;
  padding: 0 0.3rem;
  p {
    line-height: 0.5rem;
  }
  .title {
    padding: 0.26rem 0;
    color: #101010;
    text-align: left;
    font-size: .32rem;
    line-height: .4rem;
    font-weight: bold;
    span {
      vertical-align: top;
    }
  }
  .title-boder {
    border-bottom: 1px solid #f1f3f5;
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
    margin: 0.3rem 0;
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
    padding: 0.3rem 0 .3rem;
    text-align: center;
    overflow: hidden;
    img {
      width: 1.1rem;
      vertical-align: middle;
      padding: 0 0 .08rem .1rem;
    }
  }
  .half {
    display: inline-block;
    width: 50%;
    padding: 0 5%;
    vertical-align: top;
  }
  .title2 {
    font-size: .28rem;
    font-weight: bold;
    padding-bottom: 0.1rem;
  }
  .input-wrap {
    margin-bottom: 0.2rem;
    overflow: hidden;
    line-height: 24px;
    .half {
      display: block;
      width: 100%;
      padding: 0 0 .2rem .58rem;
    }
    span {
      color: #a6abb7;
      font-size: .24rem;
    }
  }
  .input {
    width: 1rem;
    margin: 0 0.2rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
  .input-width{
    width: 4rem;
    padding: 0 .1rem;
    text-align: left;
  }
}
.form {
  background: #fff;
  margin: 0 0 .2rem;
  overflow: hidden;
  line-height: .48rem;
  li {
    display: flex;
    padding: 0 .5rem .2rem .58rem;
  }
  .input{
    flex: 1;
  }
}
</style>

<template>
  <div>
    <div class="container">
      <div class="title title-boder">
        <span>健康告知</span>
      </div>
      
      <div v-for="(item, index) in healthTell" :key="index">
        <div class="number-line">{{index + 1}}</div>
        <p>{{listQuestionHealthTell[item.index].question}}</p>

        <div v-for="(unit, unique) in item.answers" :key="'a' + unique">
          <template v-if="!([1,12].includes(item.index))">
            <p
              v-if="listQuestionHealthTell[item.index].children"
            >{{`（${unique + 1}）` + listQuestionHealthTell[item.index].children[unit.index].question}}</p>

            <div class="switch-wrap">
              <div class="half" v-if="!isSelf">
                投保人
                <img v-if="unit.applicant" :src="checkBox2" />
                <img v-else :src="checkBox1" />
              </div>
              <div class="half fr">
                被保人
                <img v-if="unit.insured" :src="checkBox2" />
                <img v-else :src="checkBox1" />
              </div>
            </div>
          </template>

          <template v-if="item.index === 1">
            <div class="input-wrap" v-if="!isSelf">
              <div class="title2">投保人</div>
              <div class="half">
                身高
                <input disabled class="input" v-model="unit.applicantContent.height"><span>厘米</span>
              </div>
              <div class="half">
                体重
                <input disabled class="input" v-model="unit.applicantContent.weight"><span>公斤</span>
              </div>
            </div>

            <div class="input-wrap">
              <div class="title2">被保人</div>
              <div class="half">
                身高
                <input disabled class="input" v-model="unit.insuredContent.height"><span>厘米</span>
              </div>
              <div class="half">
                体重
                <input disabled class="input" v-model="unit.insuredContent.weight"><span>公斤</span>
              </div>
            </div>
          </template>

          <template v-if="item.index === 2">
            <div class="input-wrap" v-show="unit.applicant && !isSelf">
              <div class="title2">投保人吸烟情况</div>
              <div class="half">
                吸烟
                <input disabled class="input" v-model="unit.applicantContent.smokeYear"><span>年</span>
              </div>
              <div class="half">
                每天
                <input disabled class="input" v-model="unit.applicantContent.smokeNumEveryDay"><span>支</span>
              </div>
              <div class="half">
                若已戒烟，戒烟
                <input disabled class="input" v-model="unit.applicantContent.stopSmoke"><span>年</span>
              </div>
              <div class="half">
                原因
                <input disabled class="input input-width" v-model="unit.applicantContent.stopReason">
              </div>
            </div>

            <div class="input-wrap" v-show="unit.insured">
              <div class="title2">被保人吸烟情况</div>
              <div class="half">
                吸烟
                <input disabled class="input" v-model="unit.insuredContent.smokeYear"><span>年</span>
              </div>
              <div class="half">
                每天
                <input disabled class="input" v-model="unit.insuredContent.smokeNumEveryDay"><span>支</span>
              </div>
              <div class="half">
                若已戒烟，戒烟
                <input disabled class="input" v-model="unit.insuredContent.stopSmoke"><span>年</span>
              </div>
              <div class="half">
                原因
                <input disabled class="input input-width" v-model="unit.insuredContent.stopReason">
              </div>
            </div>
          </template>

          <template v-if="item.index === 3">
            <div class="input-wrap" v-show="unit.applicant && !isSelf">
              <div class="title2">投保人饮酒情况</div>
              <div class="half">
                喝酒
                <input disabled class="input" v-model="unit.applicantContent.drinkYear"><span>年</span>
              </div>
              <div class="half">
                每天
                <input disabled class="input" v-model="unit.applicantContent.drinkNumEveryTime"><span>两</span>
              </div>
              <div class="half">
                若已戒酒，戒酒
                <input disabled class="input" v-model="unit.applicantContent.stopDrink"><span>年</span>
              </div>
              <div class="half">
                原因
                <input disabled class="input input-width" v-model="unit.applicantContent.stopReason">
              </div>
            </div>

            <div class="input-wrap" v-show="unit.insured">
              <div class="title2">被保人饮酒情况</div>
              <div class="half">
                喝酒
                <input disabled class="input" v-model="unit.insuredContent.drinkYear"><span>年</span>
              </div>
              <div class="half">
                每天
                <input disabled class="input" v-model="unit.insuredContent.drinkNumEveryTime"><span>两</span>
              </div>
              <div class="half">
                若已戒酒，戒酒
                <input disabled class="input" v-model="unit.insuredContent.stopDrink"><span>年</span>
              </div>
              <div class="half">
                原因
                <input disabled class="input input-width" v-model="unit.insuredContent.stopReason">
              </div>
            </div>
          </template>
          

          <template v-if="item.index === 11 && unique === 0">
            <div class="input-wrap" v-show="unit.applicant && !isSelf">
              <div class="title2">投保人</div>
              <div class="half">
                已怀孕
                <input disabled class="input" v-model="unit.applicantContent.pregnant"><span>周</span>
              </div>
            </div>
            <div class="input-wrap" v-show="unit.insured">
              <div class="title2">被保人</div>
              <div class="half">
                已怀孕
                <input disabled class="input" v-model="unit.insuredContent.pregnant"><span>周</span>
              </div>
            </div>
          </template>

          <!-- 健康告知说明栏 -->
          <template v-if="[4, 5, 6, 7, 8, 9, 10, 11].includes(item.index)">
            <div v-for="(vItem, vIndex) in healthSpecialExplain" :key="vIndex">
              <div v-if="vItem.index === item.index">
                <div v-show="unit.applicant && isImmunity && !isSelf">
                  <div
                    v-for="(vUnit, vUnique) in vItem.applicant"
                    :key="vUnique"
                  >
                  <div class="form" v-if="vUnit.index === unit.index">
                    <div class="title2">投保人</div>
                    <ul>
                      <li>
                        <span>序号</span>
                        <input disabled class="input" v-model="vUnit.index">
                      </li>
                      <li>
                        <span>说明对象</span>
                        <input disabled class="input" v-model="vUnit.explainObject">
                      </li>
                      <li>
                        <span>疾病名称</span>
                        <input disabled class="input" v-model="vUnit.diseaseName">
                      </li>
                      <li>
                        <span>发病时间</span>
                        <input disabled class="input" v-model="vUnit.diseaseTime">
                      </li>
                      <li>
                        <span>治疗方法</span>
                        <input disabled class="input" v-model="vUnit.therapies">
                      </li>
                      <li>
                        <span>治疗医院</span>
                        <input disabled class="input" v-model="vUnit.hospital">
                      </li>
                      <li>
                        <span>最后治疗时间</span>
                        <input disabled class="input" v-model="vUnit.lastTherapyTime">
                      </li>
                      <li>
                        <span>现在情况</span>
                        <input disabled class="input" v-model="vUnit.currentState">
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>

                <div v-show="unit.insured">
                  <div
                    v-for="(vUnit, vUnique) in vItem.insured"
                    :key="vUnique"
                  >
                  <div class="form" v-if="vUnit.index === unit.index">
                    <div class="title2">被保人</div>
                    <ul>
                      <li>
                        <span>序号</span>
                        <input disabled class="input" v-model="vUnit.index">
                      </li>
                      <li>
                        <span>说明对象</span>
                        <input disabled class="input" v-model="vUnit.explainObject">
                      </li>
                      <li>
                        <span>疾病名称</span>
                        <input disabled class="input" v-model="vUnit.diseaseName">
                      </li>
                      <li>
                        <span>发病时间</span>
                        <input disabled class="input" v-model="vUnit.diseaseTime">
                      </li>
                      <li>
                        <span>治疗方法</span>
                        <input disabled class="input" v-model="vUnit.therapies">
                      </li>
                      <li>
                        <span>治疗医院</span>
                        <input disabled class="input" v-model="vUnit.hospital">
                      </li>
                      <li>
                        <span>最后治疗时间</span>
                        <input disabled class="input" v-model="vUnit.lastTherapyTime">
                      </li>
                      <li>
                        <span>现在情况</span>
                        <input disabled class="input" v-model="vUnit.currentState">
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- <template v-if="item.index === 6">
              <div class="input-wrap">
                <div class="title2">说明情况</div>
                <input disabled class="input" v-model="item.applicantInput">
              </div>
              <div class="input-wrap">
                <div class="title2">说明情况</div>
                <input disabled class="input" v-model="item.insuredInput">
              </div>
          </template>-->

          <template v-if="item.index === 12">
            <div class="input-wrap" v-if="unit.index === 1">
              <div class="title2">被保人</div>
              <div class="half">
                出生时孕周
                <input disabled class="input" v-model="unit.insuredContent.childWeek"><span>周</span>
              </div>
              <div class="half">
                身高
                <input disabled
                  class="input"
                  v-model="unit.insuredContent.childHeight"
                ><span>厘米</span>
              </div>
              <div class="half">
                体重
                <input disabled
                  class="input"
                  v-model="unit.insuredContent.childWeight"
                ><span>公斤</span>
              </div>
              <div class="half">
                出生时留院
                <input disabled
                  class="input"
                  v-model="unit.insuredContent.stayHospital"
                ><span>天</span>
              </div>
            </div>

            <p
              v-if="unit.index === 2"
            >{{`（${unique + 1}）` + listQuestionHealthTell[item.index].children[unit.index].question}}</p>
            <div class="switch-wrap" v-if="unit.index === 2">
              <div class="half fr">
                被保人
                <img v-if="unit.insured" :src="checkBox2" />
                <img v-else :src="checkBox1" />
              </div>
            </div>
            
            <!-- 第12项健康告知说明栏 -->
            <div v-for="(vItem, vIndex) in healthSpecialExplain" :key="vIndex">
              <div v-if="vItem.index === 12">
                <div>
                  <div v-for="(vUnit, vUnique) in vItem.insured" :key="vUnique">
                    <div class="form" v-if="(unit.index === 1 &&  vUnit.index === 1 &&  unit.insuredContent.stayHospital > 7) || (unit.index === 2 && vUnit.index === 2 && unit.insured)">
                      <div class="title2" v-show="unit.index === 1">超过7天，请详细说明：</div>
                      <ul>
                        <li>
                          <span>序号</span>
                          <input disabled class="input" v-model="vUnit.index">
                        </li>
                        <li>
                          <span>说明对象</span>
                          <input disabled class="input" v-model="vUnit.explainObject">
                        </li>
                        <li>
                          <span>疾病名称</span>
                          <input disabled class="input" v-model="vUnit.diseaseName">
                        </li>
                        <li>
                          <span>发病时间</span>
                          <input disabled class="input" v-model="vUnit.diseaseTime">
                        </li>
                        <li>
                          <span>治疗方法</span>
                          <input disabled class="input" v-model="vUnit.therapies">
                        </li>
                        <li>
                          <span>治疗医院</span>
                          <input disabled class="input" v-model="vUnit.hospital">
                        </li>
                        <li>
                          <span>最后治疗时间</span>
                          <input disabled class="input" v-model="vUnit.lastTherapyTime">
                        </li>
                        <li>
                          <span>现在情况</span>
                          <input disabled class="input" v-model="vUnit.currentState">
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

      </div>
        
    </div>

    <!-- 财务和其他告知 -->
    <div class="container">
      <div class="title title-boder">
        <span>财务和其他告知</span>
      </div>

      
      <div v-for="(item, index) in otherTell" :key="'e' + index">
          <div class="number-line">{{index + 1}}</div>
          <p>{{listQuestionInformFinancing[item.index].question}}</p>

          <div v-for="(unit, unique) in item.answers" :key="'e' + unique">
            <template v-if="!([1].includes(item.index))">
              <div class="switch-wrap">
                <div class="half" v-if="!isSelf">
                  投保人
                  <img v-if="unit.applicant" :src="checkBox2" />
                  <img v-else :src="checkBox1" />
                </div>
                <div class="half fr">
                  被保人
                  <img v-if="unit.insured" :src="checkBox2" />
                  <img v-else :src="checkBox1" />
                </div>
              </div>
            </template>

            <template v-if="item.index === 1">
              <div class="input-wrap" v-if="!isSelf">
                <div class="title2">投保人</div>
                <div class="half">
                  固定收入
                  <input disabled class="input" v-model="unit.applicantContent.income"><span>万元</span>
                </div>
                <div class="half">
                  来源
                  <input disabled class="input input-width" v-model="unit.applicantContent.incomeFrom">
                </div>
              </div>
              <div class="input-wrap">
                <div class="title2">被保险人</div>
                <div class="half">
                  固定收入
                  <input disabled class="input" v-model="unit.insuredContent.income"><span>万元</span>
                </div>
                <div class="half">
                  来源
                  <input disabled class="input input-width" v-model="unit.insuredContent.incomeFrom">
                </div>
              </div>
            </template>

            <template v-if="item.index === 2">
              <div class="input-wrap" v-show="unit.applicant && isImmunity && !isSelf">
                <div class="title2">投保人</div>
                <div class="half">
                  驾照执照类型为
                  <input disabled class="input" v-model="unit.applicantContent.driverLicense">
                </div>
              </div>

              <div class="input-wrap" v-show="unit.insured">
                <div class="title2">被保人</div>
                <div class="half">
                  驾照执照类型为
                  <input disabled class="input" v-model="unit.insuredContent.driverLicense">
                </div>
              </div>
            </template>

            <template v-if="item.index === 3">
              <div class="input-wrap" v-show="unit.applicant && isImmunity && !isSelf">
                <div class="title2">投保人</div>
                <div class="half">
                  具体类型为
                  <input disabled class="input" v-model="unit.applicantContent.medicalInsurance">
                </div>
              </div>

              <div class="input-wrap" v-show="unit.insured">
                <div class="title2">被保人</div>
                <div class="half">
                  具体类型为
                  <input disabled class="input" v-model="unit.insuredContent.medicalInsurance">
                </div>
              </div>
            </template>

            <template v-if="[4, 5, 7, 8].includes(item.index)">
              <div v-for="(vItem, vIndex) in otherSpecialExplain" :key="vIndex">
                <div v-if="vItem.index === item.index">
                  <div v-show="unit.applicant && isImmunity && !isSelf">
                    <div
                      class="form"
                      v-for="(vUnit, vUnique) in vItem.applicant"
                      :key="vUnique"
                    >
                      <div class="title2">投保人</div>
                      <ul>
                        <li>
                          <span>序号</span>
                          <input disabled class="input" v-model="vUnit.index">
                        </li>
                        <li>
                          <span>说明对象</span>
                          <input disabled class="input" v-model="vUnit.explainObject">
                        </li>
                        <li>
                          <span>说明内容</span>
                          <input disabled class="input" v-model="vUnit.explainContent">
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div v-show="unit.insured">
                    <div
                      class="form"
                      v-for="(vUnit, vUnique) in vItem.insured"
                      :key="vUnique"
                    >
                      <div class="title2">被保人</div>
                      <ul>
                        <li>
                          <span>序号</span>
                          <input disabled class="input" v-model="vUnit.index">
                        </li>
                        <li>
                          <span>说明对象</span>
                          <input disabled class="input" v-model="vUnit.explainObject">
                        </li>
                        <li>
                          <span>说明内容</span>
                          <input disabled class="input" v-model="vUnit.explainContent">
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <template v-if="item.index === 6">
              <div class="input-wrap" v-show="unit.applicant && isImmunity && !isSelf">
                <div class="title2">投保人</div>
                <div class="half">
                  项目
                  <input disabled class="input input-width" v-model="unit.applicantContent.project">
                </div>
                <div class="half">
                  频次
                  <input disabled class="input" v-model="unit.applicantContent.frequency">
                </div>
              </div>

              <div class="input-wrap" v-show="unit.insured">
                <div class="title2">被保人</div>
                <div class="half">
                  项目
                  <input disabled class="input input-width" v-model="unit.insuredContent.project">
                </div>
                <div class="half">
                  频次
                  <input disabled class="input" v-model="unit.insuredContent.frequency">
                </div>
              </div>
            </template>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    isSelf: {
      type: Boolean,
      default: false
    },
    isImmunity: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  filters: {
    swi(val) {
      const arr = [false, true];
      return arr[val];
    }
  },
  data() {
    return {
      checkBox1: require('@/assets/checkbox.png'),
      checkBox2: require('@/assets/checkbox2.png'),
      listQuestionHealthTell: Object.freeze({
        1: {
          question: ""
        },
        2: {
          question: "您是否目前或曾经有吸烟习惯？若“是”请填写下列内容："
        },
        3: {
          question:
            "您是否目前或曾经有饮白酒、洋酒等烈性酒的习惯？若“是”请填写下列内容："
        },
        4: {
          question:
            "您在过去6个月内是否曾有过下列症状：反复头痛、眩晕、晕厥、咯血、胸痛、呼吸困难、呕血、黄疸、便血、听力下降、耳鸣、复视、视力明显下降、原因不明的皮肤或粘膜或齿龈出血、原因不明的发热、体重下降（3个月内超过5公斤）、原因不明的肌肉萎缩、身体的其他感觉异常或活动障碍等"
        },
        5: {
          question:
            "您在过去两年内是否做过血压、血液化验、心电图、X光、B超、超声心动图、CT、核磁共振、内窥镜及活体组织检查？若是，请在“健康告知说明栏”中注明检查原因、检查时间与检查结果"
        },
        6: {
          question:
            "您过去五年内是否曾住院诊疗？若有，请写明原因、时间、治疗结果及医院名称"
        },
        7: {
          question: "您是否目前或曾经患有，或被怀疑患有下列疾病？",
          children: {
            1: {
              question:
                "哮喘、慢性支气管炎、支气管扩张、肺气肿、肺结核、肺纤维化等呼吸系统疾病"
            },
            2: {
              question:
                "脑出血、脑梗塞、短暂性脑缺血、脑血管瘤、多发性硬化、重症肌无力、帕金森氏综合症、癫痫、精神分裂症、抑郁症等神经系统及精神疾病"
            },
            3: {
              question:
                "高血压、冠心病、风湿性心脏病、心脏瓣膜病、先天性心脏病、心肌病、主动脉瘤、心律失常等心血管疾病"
            },
            4: {
              question:
                "高血压、冠心病、风湿性心脏病、心脏瓣膜病、先天性心脏病、心肌病、主动脉瘤、心律失常等心血管疾病"
            },
            5: {
              question:
                "血尿、蛋白尿、肾炎、肾病综合症、肾衰竭、肾囊肿、膀胱疾病、前列腺疾病等泌尿生殖系统疾病"
            },
            6: {
              question:
                "糖尿病、痛风、甲状腺疾病、脑垂体疾病、肾上腺疾病、白血病、血友病、再生障碍性贫血、紫癜等内分泌、代谢及血液系统疾病"
            },
            7: {
              question:
                "类风湿性关节炎、风湿病、强直性脊柱炎、白塞氏病、系统性红斑狼疮、肌肉营养不良症、免疫缺陷病（艾滋病或艾滋病病毒携带）等骨骼、肌肉、结缔组织疾病"
            },
            8: {
              question:
                "中耳炎、白内障、青光眼、视神经或视网膜病变等眼、耳、鼻、喉或口腔疾病"
            },
            9: {
              question:
                "恶性肿瘤、尚未证实为良性或恶性的肿瘤、息肉、肿块、囊肿、赘生物"
            },
            10: {
              question:
                "先天性疾病、遗传性疾病、脑外伤后遗症、内脏损伤、急/慢性中毒或职业病等"
            },
            11: {
              question: "以上未提及的疾病或症状"
            }
          }
        },
        8: {
          question:
            "身体残疾情况：您是否智能障碍？是否失明、聋哑、跛行、小儿麻痹后遗症？是否有脊柱、胸廓、四肢、五官、手指、足趾畸形或功能障碍？"
        },
        9: {
          question:
            "您是否使用过任何成瘾药物，如镇静安眠剂、迷幻药、吸食有机溶剂或毒品？"
        },
        10: {
          question:
            "您的父母、子女、兄弟姐妹中，是否有人患有癌症、糖尿病、多囊肝、多囊肾、血友病、精神疾病及其他遗传性疾病？"
        },
        11: {
          question: "女性告知（≥14周岁填写）",
          children: {
            1: {
              question: "您现在是否怀孕"
            },
            2: {
              question:
                "是否患有或曾经患有阴道不规则出血、子宫肌瘤、子宫内膜异位症、卵巢囊肿、乳腺包块或肿块等女性疾病？"
            },
            3: {
              question: "是否被建议做宫颈涂片、乳房超声、X光、活检等？"
            }
          }
        },
        12: {
          question: "两周岁以下儿童（含两周岁）告知：",
          children: {
            1: {
              question: ""
            },
            2: {
              question:
                "是否多胎、早产、难产、先天性疾病、遗传性疾病或畸形、体重不增或增长缓慢？"
            }
          }
        }
      }),
      listQuestionInformFinancing: Object.freeze({
        1: {
          question: "每年固定收入为？ 收入来源：①工资 ②房屋出租 ③投资收益 ④个体经营 ⑤农业收入 ⑥其他："
        },
        2: {
          question: "您是否持有有效机动车驾驶执照？若有，驾驶执照类型为："
        },
        3: {
          question:
            "您是否拥有公费医疗、社会医疗保险或其他费用补偿型医疗保险？若有，具体类型为："
        },
        4: {
          question:
            "您是否已购买或正在向其他保险公司申请购买（指提交投保申请但保险公司还未正式签单）人身保险合同？若“是”，请详细描述：保险公司名称、险种名称、保险金额及日期。"
        },
        5: {
          question:
            "您在过去投保人身保险时，或在申请保全复效时，是否被拒保、延期、加费、或对条款做特别约定，或申请过理赔？若“是”，请详细描述保险公司名称、险种名称、索赔金额、日期、原因及结果。"
        },
        6: {
          question:
            "您是否有参加飞行、潜水、跳伞、武术、拳击、赛车、特技表演、赛马等危险运动的爱好？若有，请说明（被保险人）项目：频次（投保人）项目：频次"
        },
        7: {
          question:
            "您是否计划1年以内前往其他国家或地区？若有，请在“财务和其他告知说明栏”说明计划前往的国家或地区及时间。"
        },
        8: {
          question: "您是否负债超过200万元（自用房屋及车辆贷款除外）？"
        }
      }),
      healthTell: [],
      otherTell: [],
      healthSpecialExplain: [],
      otherSpecialExplain: []
    }
  },
  mounted() {
    this.intData()
  },
  methods: {
    intData () {
      let tellInfo = this.data.tellInfo ? JSON.parse(this.data.tellInfo) : {};
      this.healthTell = tellInfo.healthTell || [];
      this.otherTell = tellInfo.otherTell || [];
      this.healthSpecialExplain = this.data.healthSpecialExplain ? JSON.parse(this.data.healthSpecialExplain) : [];
      this.otherSpecialExplain = this.data.otherSpecialExplain ? JSON.parse(this.data.otherSpecialExplain) : [];
    }
  },
};
</script>
