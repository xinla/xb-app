<template>
  <div class="btn-bottom">
    <div class="container">
      <div class="title">
        <b>健康告知</b>
        <!-- <span class="button">查看全部</span>
        <span class="button">查看提示</span>-->
        <svg
          class="icon icon_zhankai fr"
          :class="{rotate: showIndex === 1}"
          aria-hidden="true"
          @click="slide(1)"
        >
          <use xlink:href="#icon_zhankai"></use>
        </svg>
      </div>
      <!-- 
        循环项说明
        item：告知项数组一级元素对象
        unit：item中answer的数组元素对象
        vItem：告知项说明栏数组一级元素对象
        vUnit：告知项说明栏中applicant或insured的数组元素对象
        每项展示都经历了'告知项'和'告知项说明栏'两次循环
      -->
      <transition name="slide-down">
        <div v-show="showIndex === 1">
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
                    <mt-switch v-model="unit.applicant"></mt-switch>
                  </div>
                  <div class="half fr">
                    被保人
                    <mt-switch v-model="unit.insured"></mt-switch>
                  </div>
                </div>
              </template>

              <template v-if="item.index === 1">
                <div class="input-wrap" v-if="!isSelf">
                  <div class="title2">投保人</div>
                  <div class="half">
                    身高
                    <input class="input" v-model="unit.applicantContent.height">厘米
                  </div>
                  <div class="half">
                    体重
                    <input class="input" v-model="unit.applicantContent.weight">公斤
                  </div>
                </div>

                <div class="input-wrap">
                  <div class="title2">被保人</div>
                  <div class="half">
                    身高
                    <input class="input" v-model="unit.insuredContent.height">厘米
                  </div>
                  <div class="half">
                    体重
                    <input class="input" v-model="unit.insuredContent.weight">公斤
                  </div>
                </div>
              </template>

              <template v-if="item.index === 2">
                <div class="input-wrap" v-show="unit.applicant && !isSelf">
                  <div class="title2">投保人吸烟情况</div>
                  <div class="half">
                    吸烟
                    <input class="input" v-model="unit.applicantContent.smokeYear">年
                  </div>
                  <div class="half">
                    每天
                    <input class="input" v-model="unit.applicantContent.smokeNumEveryDay">支
                  </div>
                  <div class="half">
                    若已戒烟，戒烟
                    <input class="input" v-model="unit.applicantContent.stopSmoke">年
                  </div>
                  <div class="half">
                    原因
                    <input class="input" v-model="unit.applicantContent.stopReason">
                  </div>
                </div>

                <div class="input-wrap" v-show="unit.insured">
                  <div class="title2">被保人吸烟情况</div>
                  <div class="half">
                    吸烟
                    <input class="input" v-model="unit.insuredContent.smokeYear">年
                  </div>
                  <div class="half">
                    每天
                    <input class="input" v-model="unit.insuredContent.smokeNumEveryDay">支
                  </div>
                  <div class="half">
                    若已戒烟，戒烟
                    <input class="input" v-model="unit.insuredContent.stopSmoke">年
                  </div>
                  <div class="half">
                    原因
                    <input class="input" v-model="unit.insuredContent.stopReason">
                  </div>
                </div>
              </template>

              <template v-if="item.index === 3">
                <div class="input-wrap" v-show="unit.applicant && !isSelf">
                  <div class="title2">投保人情况</div>
                  <div class="half">
                    喝酒
                    <input class="input" v-model="unit.applicantContent.drinkYear">年
                  </div>
                  <div class="half">
                    每天
                    <input class="input" v-model="unit.applicantContent.drinkNumEveryTime">两
                  </div>
                  <div class="half">
                    若已戒酒，戒酒
                    <input class="input" v-model="unit.applicantContent.stopDrink">年
                  </div>
                  <div class="half">
                    原因
                    <input class="input" v-model="unit.applicantContent.stopReason">
                  </div>
                </div>

                <div class="input-wrap" v-show="unit.insured">
                  <div class="title2">被保人饮酒情况</div>
                  <div class="half">
                    喝酒
                    <input class="input" v-model="unit.insuredContent.drinkYear">年
                  </div>
                  <div class="half">
                    每天
                    <input class="input" v-model="unit.insuredContent.drinkNumEveryTime">两
                  </div>
                  <div class="half">
                    若已戒酒，戒酒
                    <input class="input" v-model="unit.insuredContent.stopDrink">年
                  </div>
                  <div class="half">
                    原因
                    <input class="input" v-model="unit.insuredContent.stopReason">
                  </div>
                </div>
              </template>

              <template v-if="item.index === 11 && unique === 0">
                <div class="input-wrap" v-show="unit.applicant && !isSelf">
                  <div>
                    投保人已怀孕
                    <input class="input" v-model="unit.applicantContent.pregnant">周
                  </div>
                </div>
                <div class="input-wrap" v-show="unit.insured">
                  <div>
                    被保人已怀孕
                    <input class="input" v-model="unit.insuredContent.pregnant">周
                  </div>
                </div>
              </template>

              <!-- 健康告知说明栏 -->
              <template v-if="[4, 5, 6, 7, 8, 9, 10, 11].includes(item.index)">
                <div v-for="(vItem, vIndex) in healthSpecialExplain" :key="vIndex">
                  <div v-if="vItem.index === item.index">
                    <div v-show="unit.applicant && isImmunity && !isSelf">
                      <div v-for="(vUnit, vUnique) in vItem.applicant" :key="vUnique">
                        <div class="form" v-if="vUnit.index === unit.index">
                          <div class="title2">投保人</div>
                          <ul>
                            <li>
                              <span>序号</span>
                              <input class="input" v-model="vUnit.index" disabled="true">
                            </li>
                            <li>
                              <span>说明对象</span>
                              <input class="input" v-model="vUnit.explainObject">
                            </li>
                            <li>
                              <span>疾病名称</span>
                              <input class="input" v-model="vUnit.diseaseName">
                            </li>
                            <li>
                              <span>发病时间</span>
                              <input class="input" v-model="vUnit.diseaseTime">
                            </li>
                            <li>
                              <span>治疗方法</span>
                              <input class="input" v-model="vUnit.therapies">
                            </li>
                            <li>
                              <span>治疗医院</span>
                              <input class="input" v-model="vUnit.hospital">
                            </li>
                            <li>
                              <span>最后治疗时间</span>
                              <input class="input" v-model="vUnit.lastTherapyTime">
                            </li>
                            <li>
                              <span>现在情况</span>
                              <input class="input" v-model="vUnit.currentState">
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div v-show="unit.insured">
                      <div v-for="(vUnit, vUnique) in vItem.insured" :key="vUnique">
                        <div class="form" v-if="vUnit.index === unit.index">
                          <div class="title2">被保人</div>
                          <ul>
                            <li>
                              <span>序号</span>
                              <input class="input" v-model="vUnit.index" disabled="true">
                            </li>
                            <li>
                              <span>说明对象</span>
                              <input class="input" v-model="vUnit.explainObject">
                            </li>
                            <li>
                              <span>疾病名称</span>
                              <input class="input" v-model="vUnit.diseaseName">
                            </li>
                            <li>
                              <span>发病时间</span>
                              <input class="input" v-model="vUnit.diseaseTime">
                            </li>
                            <li>
                              <span>治疗方法</span>
                              <input class="input" v-model="vUnit.therapies">
                            </li>
                            <li>
                              <span>治疗医院</span>
                              <input class="input" v-model="vUnit.hospital">
                            </li>
                            <li>
                              <span>最后治疗时间</span>
                              <input class="input" v-model="vUnit.lastTherapyTime">
                            </li>
                            <li>
                              <span>现在情况</span>
                              <input class="input" v-model="vUnit.currentState">
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
                    <input class="input" v-model="item.applicantInput">
                  </div>
                  <div class="input-wrap">
                    <div class="title2">说明情况</div>
                    <input class="input" v-model="item.insuredInput">
                  </div>
              </template>-->

              <template v-if="item.index === 12">
                <div class="input-wrap" v-if="unit.index === 1">
                  <div class="title2">被保人</div>
                  <div>
                    出生时孕周
                    <input class="input" v-model="unit.insuredContent.childWeek">周
                    身高
                    <input
                      class="input"
                      v-model="unit.insuredContent.childHeight"
                    >厘米
                    体重
                    <input
                      class="input"
                      v-model="unit.insuredContent.childWeight"
                    >公斤
                    出生时留院
                    <input
                      class="input"
                      v-model="unit.insuredContent.stayHospital"
                    >天
                  </div>
                </div>

                <p
                  v-if="unit.index === 2"
                >{{`（${unique + 1}）` + listQuestionHealthTell[item.index].children[unit.index].question}}</p>
                <div class="switch-wrap" v-if="unit.index === 2">
                  <div class="half fr">
                    被保人
                    <mt-switch v-model="unit.insured"></mt-switch>
                  </div>
                </div>

                <!-- 第12项健康告知说明栏 -->
                <div v-for="(vItem, vIndex) in healthSpecialExplain" :key="vIndex">
                  <div v-if="vItem.index === 12">
                    <div>
                      <div v-for="(vUnit, vUnique) in vItem.insured" :key="vUnique">
                        <div
                          class="form"
                          v-if="(unit.index === 1 &&  vUnit.index === 1 &&  unit.insuredContent.stayHospital > 7) || (unit.index === 2 && vUnit.index === 2 && unit.insured)"
                        >
                          <div class="title2" v-show="unit.index === 1">超过7天，请详细说明：</div>
                          <ul>
                            <li>
                              <span>序号</span>
                              <input class="input" v-model="vUnit.index" disabled="true">
                            </li>
                            <li>
                              <span>说明对象</span>
                              <input class="input" v-model="vUnit.explainObject">
                            </li>
                            <li>
                              <span>疾病名称</span>
                              <input class="input" v-model="vUnit.diseaseName">
                            </li>
                            <li>
                              <span>发病时间</span>
                              <input class="input" v-model="vUnit.diseaseTime">
                            </li>
                            <li>
                              <span>治疗方法</span>
                              <input class="input" v-model="vUnit.therapies">
                            </li>
                            <li>
                              <span>治疗医院</span>
                              <input class="input" v-model="vUnit.hospital">
                            </li>
                            <li>
                              <span>最后治疗时间</span>
                              <input class="input" v-model="vUnit.lastTherapyTime">
                            </li>
                            <li>
                              <span>现在情况</span>
                              <input class="input" v-model="vUnit.currentState">
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
      </transition>
    </div>

    <!-- 财务和其他告知 -->
    <div class="container">
      <div class="title">
        <b>财务和其他告知</b>
        <!-- <span class="button">查看全部</span>
        <span class="button">查看提示</span>-->
        <svg
          class="icon icon_zhankai fr"
          :class="{rotate: showIndex === 2}"
          aria-hidden="true"
          @click="slide(2)"
        >
          <use xlink:href="#icon_zhankai"></use>
        </svg>
      </div>

      <transition name="slide-down">
        <div v-show="showIndex === 2">
          <div v-for="(item, index) in otherTell" :key="'e' + index">
            <div class="number-line">{{index + 1}}</div>
            <p>{{listQuestionInformFinancing[item.index].question}}</p>

            <div v-for="(unit, unique) in item.answers" :key="'e' + unique">
              <template v-if="!([1].includes(item.index))">
                <div class="switch-wrap">
                  <div class="half" v-if="!isSelf">
                    投保人
                    <mt-switch v-model="unit.applicant"></mt-switch>
                  </div>
                  <div class="half fr">
                    被保人
                    <mt-switch v-model="unit.insured"></mt-switch>
                  </div>
                </div>
              </template>

              <template v-if="item.index === 1">
                <div class="input-wrap" v-if="!isSelf">
                  <div class="title2">投保人</div>
                  <div>
                    固定收入
                    <input class="input" v-model="unit.applicantContent.income">万元
                  </div>
                  <div>
                    来源
                    <input class="input input-width" v-model="unit.applicantContent.incomeFrom">
                  </div>
                </div>
                <div class="input-wrap">
                  <div class="title2">被保险人</div>
                  <div>
                    固定收入
                    <input class="input" v-model="unit.insuredContent.income">万元
                  </div>
                  <div>
                    来源
                    <input class="input input-width" v-model="unit.insuredContent.incomeFrom">
                  </div>
                </div>
              </template>

              <template v-if="item.index === 2">
                <div class="input-wrap" v-show="unit.applicant && isImmunity && !isSelf">
                  投保人
                  <input class="input" v-model="unit.applicantContent.driverLicense">
                </div>

                <div class="input-wrap" v-show="unit.insured">
                  被保人
                  <input class="input" v-model="unit.insuredContent.driverLicense">
                </div>
              </template>

              <template v-if="item.index === 3">
                <div class="input-wrap" v-show="unit.applicant && isImmunity && !isSelf">
                  投保人
                  <input class="input" v-model="unit.applicantContent.medicalInsurance">
                </div>

                <div class="input-wrap" v-show="unit.insured">
                  被保人
                  <input class="input" v-model="unit.insuredContent.medicalInsurance">
                </div>
              </template>

              <template v-if="[4, 5, 7, 8].includes(item.index)">
                <div v-for="(vItem, vIndex) in otherSpecialExplain" :key="vIndex">
                  <div v-if="vItem.index === item.index">
                    <div v-show="unit.applicant && isImmunity && !isSelf">
                      <div class="form" v-for="(vUnit, vUnique) in vItem.applicant" :key="vUnique">
                        <div class="title2">投保人</div>
                        <ul>
                          <li>
                            <span>序号</span>
                            <input class="input" v-model="vUnit.index" disabled="true">
                          </li>
                          <li>
                            <span>说明对象</span>
                            <input class="input" v-model="vUnit.explainObject">
                          </li>
                          <li>
                            <span>说明内容</span>
                            <input class="input" v-model="vUnit.explainContent">
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div v-show="unit.insured">
                      <div class="form" v-for="(vUnit, vUnique) in vItem.insured" :key="vUnique">
                        <div class="title2">被保人</div>
                        <ul>
                          <li>
                            <span>序号</span>
                            <input class="input" v-model="vUnit.index" disabled="true">
                          </li>
                          <li>
                            <span>说明对象</span>
                            <input class="input" v-model="vUnit.explainObject">
                          </li>
                          <li>
                            <span>说明内容</span>
                            <input class="input" v-model="vUnit.explainContent">
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
                    <input class="input" v-model="unit.applicantContent.project">
                  </div>
                  <div class="half">
                    频次
                    <input class="input" v-model="unit.applicantContent.frequency">
                  </div>
                </div>

                <div class="input-wrap" v-show="unit.insured">
                  <div class="title2">被保人</div>
                  <div class="half">
                    项目
                    <input class="input" v-model="unit.insuredContent.project">
                  </div>
                  <div class="half">
                    频次
                    <input class="input" v-model="unit.insuredContent.frequency">
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- 代理人告知 -->
    <div class="container" style="padding-bottom: .2rem;">
      <div class="title">
        <b>代理人告知</b>
        <svg
          class="icon icon_zhankai fr"
          :class="{rotate: showIndex === 3}"
          aria-hidden="true"
          @click="slide(3)"
        >
          <use xlink:href="#icon_zhankai"></use>
        </svg>
      </div>

      <div v-show="showIndex === 3">
        <div v-for="(item, index) in agentTell" :key="index">
          <div v-for="(unit, unique) in item.answers" :key="unique">
            <p>您是投/被保险人本人或投/被保险人的父母、配偶、子女、兄弟姐妹吗？若“是”请选择：</p>
            <div class="switch-wrap">
              <div class="half"></div>
              <div class="half" style="padding-left: 20%;">
                <mt-switch v-model="unit.agent"></mt-switch>
              </div>
            </div>

            <div v-show="unit.agent" class="input-wrap" style="line-height: .8rem; height: auto;">
              <div class="half" style="padding: 0;">
                <input type="radio" id="0" value="本人" v-model="unit.agentContent.relation">
                <label for="0">本人</label>
                <br>
                <input type="radio" id="1" value="子女" v-model="unit.agentContent.relation">
                <label for="1">子女</label>
                <br>
                <input type="radio" id="2" value="其他" v-model="unit.agentContent.relation">
                <label for="2">其他</label>
                <br>
              </div>
              <div class="half" style="padding: 0;">
                <input type="radio" id="3" value="父母" v-model="unit.agentContent.relation">
                <label for="3">父母</label>
                <br>
                <input type="radio" id="4" value="配偶" v-model="unit.agentContent.relation">
                <label for="4">配偶</label>
              </div>
              <input
                v-if="unit.agentContent.relation === '其他'"
                type="textarea"
                v-model="relation"
                placeholder="请填写你们之间的关系"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="title">
        <b>投保人声明</b>
      </div>

      <p>本人声明针对上述健康告知/财务告知的回答属实，并以此作为保险合同的组成部分，如有隐瞒或告知不实，足以影响贵公司承保决定的，所签发的保险合同将视为无效，贵公司有权解除合同。对于合同解除前发生的任何事故，贵公司不承担任何责任。</p>

      <div class="ac" style="margin: .5rem 0;">
        <input type="checkbox" id="checkbox" v-model="isAgree">
        <label for="checkbox">
          <svg class="icon icon_selected_r" aria-hidden="true">
            <use xlink:href="#icon_selected_r"></use>
          </svg>
        </label>
        本人我已阅读并同意
        <span class="blue">《投保人声明》</span>
      </div>
    </div>

    <!-- <div @click="submit">提交</div> -->
  </div>
</template>

<script>
import {
  getInformDetail,
  saveInform,
  getIsSelf,
  getIsImmunity
} from "@/api/inform";

const relationList = ["本人", "子女", "父母", "配偶", "其他"];

export default {
  components: {},
  filters: {
    swi(val) {
      const arr = [false, true];
      return arr[val];
    }
  },
  data() {
    return {
      isAgree: false,
      relation: "",
      isSelf: false,
      isImmunity: false,
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
          question:
            "每年固定收入为？ 收入来源：①工资 ②房屋出租 ③投资收益 ④个体经营 ⑤农业收入 ⑥其他："
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
      healthTell: [
        {
          index: 1,
          answers: [
            {
              index: 1,
              applicant: 1,
              insured: 1,
              applicantContent: {
                height: 0,
                weight: 0
              },
              insuredContent: {
                height: 0,
                weight: 0
              }
            }
          ]
        },
        {
          index: 2,
          answers: [
            {
              index: 1,
              applicantContent: {
                smokeNumEveryDay: 0,
                smokeYear: 0,
                stopSmoke: 0,
                stopReason: "无"
              },
              insured: 0,
              applicant: 0,
              insuredContent: {
                stopSmoke: 0,
                smokeNumEveryDay: 0,
                smokeYear: 0,
                stopReason: "无"
              }
            }
          ]
        },
        {
          answers: [
            {
              index: 1,
              insured: 0,
              insuredContent: {
                drinkYear: 0,
                stopReason: "无",
                stopDrink: 0,
                drinkNumEveryTime: 0
              },
              applicant: 0,
              applicantContent: {
                drinkYear: 0,
                stopReason: "无",
                stopDrink: 0,
                drinkNumEveryTime: 0
              }
            }
          ],
          index: 3
        },
        {
          index: 4,
          answers: [
            {
              index: 1,
              insured: 0,
              applicant: 0
            }
          ]
        },
        {
          index: 5,
          answers: [
            {
              index: 1,
              insured: 0,
              applicant: 0
            }
          ]
        },
        {
          index: 6,
          answers: [
            {
              index: 1,
              insured: 0,
              applicant: 0
            }
          ]
        },
        {
          index: 7,
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            },
            {
              insured: 0,
              index: 2,
              applicant: 0
            },
            {
              insured: 0,
              index: 3,
              applicant: 0
            },
            {
              insured: 0,
              index: 4,
              applicant: 0
            },
            {
              insured: 0,
              index: 5,
              applicant: 0
            },
            {
              insured: 0,
              index: 6,
              applicant: 0
            },
            {
              insured: 0,
              index: 7,
              applicant: 0
            },
            {
              insured: 0,
              index: 8,
              applicant: 0
            },
            {
              insured: 0,
              index: 9,
              applicant: 0
            },
            {
              insured: 0,
              index: 10,
              applicant: 0
            },
            {
              insured: 0,
              index: 11,
              applicant: 0
            }
          ]
        },

        {
          index: 8,
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            }
          ]
        },
        {
          index: 9,
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            }
          ]
        },
        {
          index: 10,
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            }
          ]
        },
        {
          index: 11,
          answers: [
            {
              insured: 0,
              insuredContent: {
                pregnant: 0
              },
              index: 1,
              applicant: 1,
              applicantContent: {
                pregnant: 0
              }
            },
            {
              insured: 0,
              index: 2,
              applicant: 0
            },
            {
              insured: 0,
              index: 3,
              applicant: 0
            }
          ]
        },
        {
          index: 12,
          answers: [
            {
              index: 1,
              insured: 0,
              insuredContent: {
                childWeek: 0,
                childHeight: 0,
                childWeight: 0,
                stayHospital: 0
              },
              applicant: 0
            },
            {
              index: 2,
              insured: 0,
              applicant: 0
            }
          ]
        }
      ],
      otherTell: [
        {
          answers: [
            {
              insured: 1,
              index: 1,
              applicantContent: {
                income: 0,
                incomeFrom: ""
              },
              insuredContent: {
                income: 0,
                incomeFrom: ""
              },
              applicant: 1
            }
          ],
          index: 1
        },
        {
          answers: [
            {
              insured: 0,
              index: 1,
              applicantContent: {
                driverLicense: ""
              },
              insuredContent: {
                driverLicense: ""
              },
              applicant: 0
            }
          ],
          index: 2
        },
        {
          answers: [
            {
              insured: 0,
              applicantContent: {
                medicalInsurance: ""
              },
              insuredContent: {
                medicalInsurance: ""
              },
              index: 1,
              applicant: 0
            }
          ],
          index: 3
        },
        {
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            }
          ],
          index: 4
        },
        {
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            }
          ],
          index: 5
        },
        {
          answers: [
            {
              applicantContent: {
                project: "",
                frequency: 0
              },
              insured: 0,
              index: 1,
              applicant: 0,
              insuredContent: {
                project: "",
                frequency: 0
              }
            }
          ],
          index: 6
        },
        {
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            }
          ],
          index: 7
        },
        {
          answers: [
            {
              insured: 0,
              index: 1,
              applicant: 0
            }
          ],
          index: 8
        }
      ],
      healthSpecialExplain: [
        {
          index: 4,
          applicant: [
            {
              index: 1,
              explainObject: "投保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 5,
          applicant: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 6,
          applicant: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 7,
          applicant: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 2,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 3,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 4,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 5,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 6,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 7,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 8,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 9,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 10,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 2,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 3,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 4,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 5,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 6,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 7,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 8,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 9,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 10,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 8,
          applicant: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 9,
          applicant: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 10,
          applicant: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 11,
          applicant: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 2,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 3,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ],
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 2,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 3,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        },
        {
          index: 12,
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            },
            {
              index: 2,
              explainObject: "被保人",
              diseaseName: "头疼",
              diseaseTime: "2019年6月1号",
              therapies: "吃药",
              hospital: "安徽省立医院",
              lastTherapyTime: "2019年6月2号",
              currentState: "健康"
            }
          ]
        }
      ],
      otherSpecialExplain: [
        {
          index: 4,
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              explainContent: "长城人寿康健人生50万1998年"
            }
          ],
          applicant: [
            {
              index: 1,
              explainObject: "投保人",
              explainContent: "长城人寿康健人生50万1998年"
            }
          ]
        },
        {
          index: 5,
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              explainContent: "长城人寿康健人生50万1998年原因结果"
            }
          ],
          applicant: [
            {
              index: 1,
              explainObject: "投保人",
              explainContent: "长城人寿康健人生50万1998年原因结果"
            }
          ]
        },
        {
          index: 7,
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              explainContent: "美国计划2018年果"
            }
          ],
          applicant: [
            {
              index: 1,
              explainObject: "投保人",
              explainContent: "美国计划2018年"
            }
          ]
        },
        {
          index: 8,
          insured: [
            {
              index: 1,
              explainObject: "被保人",
              explainContent: "承包土地负债300万"
            }
          ],
          applicant: [
            {
              index: 1,
              explainObject: "投保人",
              explainContent: "承包土地负债300万"
            }
          ]
        }
      ],
      agentTell: [
        {
          index: 1,
          answers: [
            {
              index: 1,
              agent: 1,
              agentContent: {
                relation: "父母"
              }
            }
          ]
        }
      ],
      showIndex: 1,
      policyId: this.$route.query.id || "2278898684143861761",
      id: "",
      token:
        this.$route.query.token ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJXRUIiLCJpc3MiOiJhdXRoLXNlcnZlciIsImV4cCI6MTU2MDU5MzAyOCwiaWF0IjoxNTYwNTg5NDI4LCJ1c2VySWQiOjIyNjU3ODYwNTI0ODY2MjczMjh9.kcnENXdEXhAvp291yFxKbPiPikzQSLRsN2_CdAtJUBQ"
    };
  },
  mounted() {
    let query = {
      id: this.policyId,
      token: this.token
    };
    // console.log(query)
    // return
    this.getData(query);
    // 留给Android/IOS
    window.VueSubmit = this.submit;
  },
  methods: {
    getData(query) {
      getInformDetail(query).then(res => {
        // debugger
        console.log(res);
        if (!res) { return }
        this.id = res.id;
        let tellInfo = JSON.parse(res.tellInfo);
        this.healthTell = tellInfo.healthTell;
        this.otherTell = tellInfo.otherTell;
        this.agentTell = tellInfo.agentTell;
        if (
          !relationList.includes(
            this.agentTell[0].answers[0].agentContent.relation
          )
        ) {
          this.relation = this.agentTell[0].answers[0].agentContent.relation;
          this.agentTell[0].answers[0].agentContent.relation = "其他";
        }
        this.healthSpecialExplain = JSON.parse(res.healthSpecialExplain);
        this.otherSpecialExplain = JSON.parse(res.otherSpecialExplain);
        // console.log(res.agentTell);
      });
      getIsSelf(query).then(res => {
        console.log(res);
        this.isSelf = res;
      });
      getIsImmunity(query).then(res => {
        this.isImmunity = res;
        console.log(JSON.stringify(res));
      });
    },
    slide(index) {
      if (this.showIndex === index) {
        this.showIndex = 0;
      } else {
        this.showIndex = index;
      }
    },
    submit(type) {
      if (!this.isAgree) {
        this.Toast("请先同意《投保人声明》");
        return;
      }
      if (this.agentTell[0].answers[0].agentContent.relation === "其他") {
        this.agentTell[0].answers[0].agentContent.relation = this.relation;
      }

      if (this.isSelf) {
        // 同人下，投保人和被保人复制
        for (let iterator of this.healthTell) {
          // 第12项只有被保人，无需复制
          if (iterator.index !== 12) {
            for (const item of iterator.answers) {
              item.insured != undefined && (item.applicant = item.insured);
              item.insuredContent != undefined &&
                (item.applicantContent = item.insuredContent);
            }
          }
        }

        for (let iterator of this.otherTell) {
          for (const item of iterator.answers) {
            item.insured != undefined && (item.applicant = item.insured);
            item.insuredContent != undefined &&
              (item.applicantContent = item.insuredContent);
          }
        }

        for (let iterator of this.healthSpecialExplain) {
          if (iterator.index !== 12) {
            iterator.insured != undefined &&
              (iterator.applicant = iterator.insured);
          }
        }

        for (let iterator of this.otherSpecialExplain) {
          iterator.insured != undefined &&
            (iterator.applicant = iterator.insured);
        }
      }
      let data = {
        policyId: this.policyId,
        id: this.id,
        tellInfo: JSON.stringify({
          healthTell: this.healthTell,
          otherTell: this.otherTell,
          agentTell: this.agentTell
        }),
        healthSpecialExplain: JSON.stringify(this.healthSpecialExplain),
        otherSpecialExplain: JSON.stringify(this.otherSpecialExplain)
      };
      // window.webkit.messageHandlers.submitSuccess().postMessage(null)
      // console.log(this.healthTell)
      saveInform(data, this.token).then(res => {
        type === "IOS" ? window.webkit.messageHandlers.submitSuccess.postMessage(null) : window.hello.submitSuccess()
      }).catch(res => {
        type === "IOS" ? window.webkit.messageHandlers.submitFailed.postMessage(null) : window.hello.submitFailed()
      });
    },
  }
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
    overflow: hidden;
  }
  .half {
    display: inline-block;
    width: 50%;
    padding: 0 5%;
    vertical-align: top;
  }
  // .switch-wrap .half:nth-child(2n), .input-wrap .half:nth-child(2n + 1) {
  //   float: right;
  // }
  .input-wrap {
    background-color: #f1f3f5;
    border-radius: 10px;
    padding: 0.3rem;
    margin-bottom: 0.2rem;
    overflow: hidden;
    line-height: 24px;
    > .half:nth-child(n + 4) {
      padding-top: 0.2rem;
    }
    .title2 {
      padding-bottom: 0.3rem;
    }
  }
  .input {
    width: 1rem;
    margin: 0 0.2rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
  .input-width {
    width: auto;
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
  width: 10px;
  height: 10px;
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

.slide-down-enter-active {
  transition: all 0.3s ease;
}
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-down-enter, .slide-down-leave-to
/* .slide-down-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.icon_zhankai {
  transition: all 0.3s ease;
}
.rotate {
  transform: rotate(-180deg);
}
.form {
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  overflow: hidden;
  line-height: 24px;
  border: 1px solid #ddd;
  .input {
    width: 50%;
    float: right;
  }
  .title2 {
    font-weight: 600;
  }
}
</style>
