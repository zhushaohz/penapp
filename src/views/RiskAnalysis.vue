<template>
  <div>
    <t-layout>
      <t-header height="30%">
        <t-head-menu value="item2" height="150px" style="border-bottom: 1px solid var(--td-gray-color-3)">
          <template #logo>
            <img width="240" class="logo" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/logo3.png" alt="logo" />
          </template>
          <t-menu-item value="item1" to="/riskidentification"> 风险识别 </t-menu-item>
          <t-menu-item value="item2"> 风险分析 </t-menu-item>

          <template #operations>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="#"><t-icon class="t-menu__operations-icon" name="home" /></a>
          </template>
        </t-head-menu>
        <div class="title">
          风险分析
        </div>
        <div class="word">
          基于贝叶斯理论方法，通过映射关系将事故树结构转换成贝叶斯网络结构，利用贝叶斯网络对各个泄漏途径进行诊断分析、敏感性分析和情景分析。诊断分析指的是通过基本事件先验概率和后验概率数据对比，可以分析变动较大的节点；敏感性分析指的是运用敏感性分析来量化某一节点的若干原因对该节点发生与否的影响高低，找出该节点的关键影响因素；情景分析指的是基于历史事故经验，确定典型生物安全实验室泄漏场景，对事故后果进行预测。
        </div>
      </t-header>
      <t-layout style="border: solid 1px var(--td-gray-color-3);background: #fff">
        <t-content>
          <div>
            <t-tabs v-model="value" theme="normal" placement="top">
              <t-tab-panel :value="1" label="人流途径">
                <t-row>
                  <t-col span="7">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiren.png" />
                    </div>
                  </t-col>
                  <t-col span="5">
                    <div class="subtitle">
                      概率分析
                    </div>
                    <div>
                      <n-form
                        inline
                        :model="formValue1g"
                        :rules="rules"
                        ref="formRef"
                        style="padding: 10px"
                      >
                        <n-form-item label="节点" path="value1">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue1g.value1"
                            :options="options1"
                            @update:value="handleUpdateValue1"
                          />
                        </n-form-item>
                        <n-form-item label="状态" path="value2">
                          <n-radio-group v-model:value="formValue1g.value2" name="radiogroup" @update:value="handleUpdateValue1">
                            <n-radio-button
                              v-for="yorn in yorns"
                              :key="yorn.value"
                              :value="yorn.value"
                            >
                              {{ yorn.label }}
                            </n-radio-button>
                          </n-radio-group>
                        </n-form-item>
                        <n-form-item label="概率(%)">
                          <n-input
                            readonly="true"
                            placeholder=""
                            v-model:value="probability1"
                            autosize="true"
                            style="min-width: 90px"
                          >
                          </n-input>
                        </n-form-item>
                      </n-form>

                    </div>
                    <div class="subtitle">
                      敏感性分析
                    </div>
                    <div>
                      <n-form
                        inline
                        :model="formValue1m"
                        :rules="rules2"
                        ref="formRef2"
                        style="padding: 10px"
                      >
                        <n-form-item label="节点" path="value1">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue1m.value1"
                            :options="options12"
                            @update:value="handleUpdateValue12"
                            style="width: 11rem"
                          />
                        </n-form-item>
                        <n-form-item label="相关节点" path="value2">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue1m.value2"
                            :options="options13"
                            @update:value="handleUpdateValue12"
                          />
                        </n-form-item>
                        <n-form-item label="敏感度(%)">
                          <n-input
                            readonly="true"
                            placeholder=""
                            v-model:value="sensitivity1"
                            autosize="true"
                            style="min-width: 90px"
                          >
                          </n-input>
                        </n-form-item>
                      </n-form>

                    </div>
                    <div class="subtitle">
                      情景分析
                    </div>
                  </t-col>
                </t-row>
              </t-tab-panel>
              <t-tab-panel :value="2" label="物流途径">
                <t-row>
                  <t-col span="7">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiwu.png" />
                    </div>
                  </t-col>
                  <t-col span="5">
                    <div class="subtitle">
                      概率分析
                    </div>
                    <div>
                      <n-form
                        inline
                        :model="formValue2g"
                        :rules="rules"
                        ref="formRef"
                        style="padding: 10px"
                      >
                        <n-form-item label="节点" path="value1">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue2g.value1"
                            :options="options2"
                            @update:value="handleUpdateValue2"
                          />
                        </n-form-item>
                        <n-form-item label="状态" path="value2">
                          <n-radio-group v-model:value="formValue2g.value2" name="radiogroup" @update:value="handleUpdateValue2">
                            <n-radio-button
                              v-for="yorn in yorns"
                              :key="yorn.value"
                              :value="yorn.value"
                            >
                              {{ yorn.label }}
                            </n-radio-button>
                          </n-radio-group>
                        </n-form-item>
                        <n-form-item label="概率(%)">
                          <n-input
                            readonly="true"
                            placeholder="" v-model:value="probability2"
                            autosize="true" style="min-width: 90px"></n-input>
                        </n-form-item>
                      </n-form>

                    </div>
                    <div class="subtitle">
                      敏感性分析
                    </div>
                    <div>
                      <n-form
                        inline
                        :model="formValue2m"
                        :rules="rules2"
                        ref="formRef2"
                        style="padding: 10px"
                      >
                        <n-form-item label="节点" path="value1">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue2m.value1"
                            :options="options22"
                            @update:value="handleUpdateValue22"
                            style="width: 11rem"
                          />
                        </n-form-item>
                        <n-form-item label="相关节点" path="value2">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue2m.value2"
                            :options="options23"
                            @update:value="handleUpdateValue22"
                          />
                        </n-form-item>
                        <n-form-item label="敏感度(%)">
                          <n-input
                            readonly="true"
                            placeholder=""
                            v-model:value="sensitivity2"
                            autosize="true"
                            style="min-width: 90px"
                          >
                          </n-input>
                        </n-form-item>
                      </n-form>

                    </div>
                    <div class="subtitle">
                      情景分析
                    </div>
                  </t-col>
                </t-row>
              </t-tab-panel>
              <t-tab-panel :value="3" label="水流途径">
                <t-row>
                  <t-col span="7">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiwater.png" />
                    </div>
                  </t-col>
                  <t-col span="5">
                    <div class="subtitle">
                      概率分析
                    </div>
                    <div>
                      <n-form
                        inline
                        :model="formValue3g"
                        :rules="rules"
                        ref="formRef"
                        style="padding: 10px"
                      >
                        <n-form-item label="节点" path="value1">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue3g.value1"
                            :options="options3"
                            @update:value="handleUpdateValue3"
                          />
                        </n-form-item>
                        <n-form-item label="状态" path="value2">
                          <n-radio-group v-model:value="formValue3g.value2" name="radiogroup" @update:value="handleUpdateValue3">
                            <n-radio-button
                              v-for="yorn in yorns"
                              :key="yorn.value"
                              :value="yorn.value"
                            >
                              {{ yorn.label }}
                            </n-radio-button>
                          </n-radio-group>
                        </n-form-item>
                        <n-form-item label="概率(%)">
                          <n-input readonly="true" placeholder="" v-model:value="probability3"
                                   autosize="true" style="min-width: 90px"></n-input>
                        </n-form-item>
                      </n-form>

                    </div>
                    <div class="subtitle">
                      敏感性分析
                    </div>
                    <div class="subtitle">
                      情景分析
                    </div>
                  </t-col>
                </t-row>
              </t-tab-panel>
              <t-tab-panel :value="4" label="气流途径">
                <t-row>
                  <t-col span="7">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiair.png" />
                    </div>
                  </t-col>
                  <t-col span="5">
                    <div class="subtitle">
                      概率分析
                    </div>
                    <div>
                      <n-form
                        inline
                        :model="formValue4g"
                        :rules="rules"
                        ref="formRef"
                        style="padding: 10px"
                      >
                        <n-form-item label="节点" path="value1">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue4g.value1"
                            :options="options4"
                            @update:value="handleUpdateValue4"
                          />
                        </n-form-item>
                        <n-form-item label="状态" path="value2">
                          <n-radio-group v-model:value="formValue4g.value2" name="radiogroup" @update:value="handleUpdateValue4">
                            <n-radio-button
                              v-for="yorn in yorns"
                              :key="yorn.value"
                              :value="yorn.value"
                            >
                              {{ yorn.label }}
                            </n-radio-button>
                          </n-radio-group>
                        </n-form-item>
                        <n-form-item label="概率(%)">
                          <n-input readonly="true" placeholder="" v-model:value="probability4"
                                   autosize="true" style="min-width: 90px"></n-input>
                        </n-form-item>
                      </n-form>

                    </div>
                    <div class="subtitle">
                      敏感性分析
                    </div>
                    <div class="subtitle">
                      情景分析
                    </div>
                  </t-col>
                </t-row>
              </t-tab-panel>
              <t-tab-panel :value="5" label="固态废弃物途径">
                <t-row>
                  <t-col span="7">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beigu.png" />
                    </div>
                  </t-col>
                  <t-col span="5">
                    <div class="subtitle">
                      概率分析
                    </div>
                    <div>
                      <n-form
                        inline
                        :model="formValue5g"
                        :rules="rules"
                        ref="formRef"
                        style="padding: 10px"
                      >
                        <n-form-item label="节点" path="value1">
                          <n-select
                            class="selectitem"
                            placeholder="请选择"
                            v-model:value="formValue5g.value1"
                            :options="options5"
                            @update:value="handleUpdateValue5"
                          />
                        </n-form-item>
                        <n-form-item label="状态" path="value2">
                          <n-radio-group v-model:value="formValue5g.value2" name="radiogroup" @update:value="handleUpdateValue5">
                            <n-radio-button
                              v-for="yorn in yorns"
                              :key="yorn.value"
                              :value="yorn.value"
                            >
                              {{ yorn.label }}
                            </n-radio-button>
                          </n-radio-group>
                        </n-form-item>
                        <n-form-item label="概率(%)">
                          <n-input readonly="true" placeholder="" v-model:value="probability5"
                                   autosize="true" style="min-width: 90px"></n-input>
                        </n-form-item>
                      </n-form>

                    </div>
                    <div class="subtitle">
                      敏感性分析
                    </div>
                    <div class="subtitle">
                      情景分析
                    </div>
                  </t-col>
                </t-row>
              </t-tab-panel>
            </t-tabs>
          </div>
        </t-content>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(1);

const formRef = ref( null)

const formRef2 = ref( null)
const formValue1g = ref( {
  value1: null,
  value2: null
})
const formValue2g = ref( {
  value1: null,
  value2: null
})
const formValue3g = ref( {
  value1: null,
  value2: null
})
const formValue4g = ref( {
  value1: null,
  value2: null
})
const formValue5g = ref( {
  value1: null,
  value2: null
})
const formValue1m = ref( {
  value1: null,
  value2: null
})
const formValue2m = ref( {
  value1: null,
  value2: null
})
const result = ref(null)
const probability1 = ref( null)
const probability2 = ref( null)
const probability3 = ref( null)
const probability4 = ref( null)
const probability5 = ref( null)
const sensitivity1 = ref( null)
const sensitivity2 = ref( null)
const handleUpdateValue1 = async () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue1g
      //message.success('分析成功')
      result.value = value.value + formValue1g.value.value1 + formValue1g.value.value2
      console.log(result.value)
      switch (result.value) {
        case '1A21y':probability1.value = '35';
          break;
        case '1A21n':probability1.value = '23.5';
          break;
        case '1a1y':probability1.value = '28.2';
          break;
        case '1a1n':probability1.value = '23.5';
          break;
        case '1a6y':probability1.value = '26.7';
          break;
        case '1a6n':probability1.value = '23.5';
          break;
        case '1a7y':probability1.value = '26';
          break;
        case '1a7n':probability1.value = '23.5';
          break;
        case '1a31y':probability1.value = '25.1';
          break;
        case '1a31n':probability1.value = '23.5';
          break;
        case '1a32y':probability1.value = '25';
          break;
        case '1a32n':probability1.value = '23.5';
          break;
        case '1a23y':probability1.value = '25.9';
          break;
        case '1a23n':probability1.value = '23.5';
          break;
        default:probability1.value = '';
      }
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const handleUpdateValue2 = async () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue2g
      //message.success('分析成功')
      result.value = value.value + formValue2g.value.value1 + formValue2g.value.value2
      console.log(result.value)
      switch (result.value) {
        case '2B11y':probability2.value = '41.2';
          break;
        case '2B11n':probability2.value = '28.4';
          break;
        case '2b2y':probability2.value = '31.4';
          break;
        case '2b2n':probability2.value = '28.4';
          break;
        case '2b11y':probability2.value = '29.2';
          break;
        case '2b11n':probability2.value = '28.4';
          break;
        case '2b12y':probability2.value = '29';
          break;
        case '2b12n':probability2.value = '28.4';
          break;
        case '2b13y':probability2.value = '29.1';
          break;
        case '2b13n':probability2.value = '28.4';
          break;
        default:probability2.value = '';
      }
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const handleUpdateValue3 = async () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue3g
      //message.success('分析成功')
      result.value = value.value + formValue3g.value.value1 + formValue3g.value.value2
      console.log(result.value)
      switch (result.value) {
        case '3d7y':probability2.value = '22.9';
          break;
        case '3d7n':probability2.value = '18.1';
          break;
        case '3d8y':probability2.value = '22.2';
          break;
        case '3d8n':probability2.value = '18.1';
          break;
        case '3D31y':probability3.value = '31.7';
          break;
        case '3D31n':probability3.value = '18.1';
          break;
        case '3D11y':probability3.value = '30.6';
          break;
        case '3D11n':probability3.value = '18.1';
          break;
        case '3D12y':probability3.value = '29.7';
          break;
        case '3D12n':probability3.value = '18.1';
          break;
        case '3D13y':probability3.value = '28.3';
          break;
        case '3D13n':probability3.value = '18.1';
          break;
        default:probability3.value = '';
      }
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const handleUpdateValue4 = async () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue4g
      //message.success('分析成功')
      result.value = value.value + formValue4g.value.value1 + formValue4g.value.value2
      console.log(result.value)
      switch (result.value) {
        case '4e1y':probability4.value = '42.4';
          break;
        case '4e1n':probability4.value = '34.9';
          break;
        case '4e2y':probability4.value = '42.7';
          break;
        case '4e2n':probability4.value = '34.9';
          break;
        case '4E12y':probability4.value = '45.5';
          break;
        case '4E12n':probability4.value = '34.9';
          break;
        case '4e3y':probability4.value = '39';
          break;
        case '4e3n':probability4.value = '34.9';
          break;
        case '4e4y':probability4.value = '38.9';
          break;
        case '4e4n':probability4.value = '34.9';
          break;
        case '4F1y':probability4.value = '35.4';
          break;
        case '4F1n':probability4.value = '34.9';
          break;
        case '4F2y':probability4.value = '35.4';
          break;
        case '4F2n':probability4.value = '34.9';
          break;
        case '4e52y':probability4.value = '35.9';
          break;
        case '4e52n':probability4.value = '34.9';
          break;
        case '4e61y':probability4.value = '38';
          break;
        case '4e61n':probability4.value = '34.9';
          break;
        case '4e62y':probability4.value = '38.4';
          break;
        case '4e62n':probability4.value = '34.9';
          break;
        default:probability4.value = '';
      }
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const handleUpdateValue5 = async () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue5g
      //message.success('分析成功')
      result.value = value.value + formValue5g.value.value1 + formValue5g.value.value2
      console.log(result.value)
      switch (result.value) {
        case '5c1y':probability5.value = '30.7';
          break;
        case '5c1n':probability5.value = '25.9';
          break;
        case '5c2y':probability5.value = '34';
          break;
        case '5c2n':probability5.value = '25.9';
          break;
        case '5C12y':probability5.value = '48.1';
          break;
        case '5C12n':probability5.value = '25.9';
          break;
        case '5c3y':probability5.value = '30.7';
          break;
        case '5c3n':probability5.value = '25.9';
          break;
        default:probability5.value = '';
      }
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const handleUpdateValue12 = async () => {
  formRef2.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue1m
      //message.success('分析成功')
      result.value = value.value + formValue1m.value.value1 + formValue1m.value.value2
      console.log(result)
      switch (result.value) {
        case '1renA':sensitivity1.value = '100';
          break;
        case '1renA1':sensitivity1.value = '8.08';
          break;
        case '1renA2':sensitivity1.value = '2.76';
          break;
        case '1renA11':sensitivity1.value = '0.692';
          break;
        case '1renA12':sensitivity1.value = '0.537';
          break;
        case '1renA22':sensitivity1.value = '0.208';
          break;
        case '1rena4':sensitivity1.value = '0.0557';
          break;
        case '1rena3':sensitivity1.value = '0.0452';
          break;
        case '1rena2':sensitivity1.value = '0.0398';
          break;
        case '1rena5':sensitivity1.value = '0.0395';
          break;
        case '1rena52':sensitivity1.value = '0.006';
          break;
        case '1rena42':sensitivity1.value = '0.00503';
          break;
        case '1rena51':sensitivity1.value = '0.00471';
          break;
        case '1renA21':sensitivity1.value = '0.00305';
          break;
        case '1rena41':sensitivity1.value = '0.00141';
          break;
        case '1rena1':sensitivity1.value = '0.00114';
          break;
        case '1rena6':sensitivity1.value = '0.000202';
          break;
        case '1rena7':sensitivity1.value = '0.000164';
          break;
        case '1rena31':sensitivity1.value = '0.0000968';
          break;
        case '1rena32':sensitivity1.value = '0.0000787';
          break;
        default:sensitivity1.value = '';
      }
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const handleUpdateValue22 = async () => {
  formRef2.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue2m
      //message.success('分析成功')
      result.value = value.value + formValue2m.value.value1 + formValue2m.value.value2
      console.log(result)
      switch (result.value) {
        case '2wuB':sensitivity2.value = '100';
          break;
        case '2wuB1':sensitivity2.value = '8.08';
          break;
        case '1renA2':sensitivity1.value = '2.76';
          break;
        case '1renA11':sensitivity1.value = '0.692';
          break;
        case '1renA12':sensitivity1.value = '0.537';
          break;
        case '1renA22':sensitivity1.value = '0.208';
          break;
        case '1rena4':sensitivity1.value = '0.0557';
          break;
        case '1rena3':sensitivity1.value = '0.0452';
          break;
        case '1rena2':sensitivity1.value = '0.0398';
          break;
        case '1rena5':sensitivity1.value = '0.0395';
          break;
        case '1rena52':sensitivity1.value = '0.006';
          break;
        case '1rena42':sensitivity1.value = '0.00503';
          break;
        case '1rena51':sensitivity1.value = '0.00471';
          break;
        case '1renA21':sensitivity1.value = '0.00305';
          break;
        case '1rena41':sensitivity1.value = '0.00141';
          break;
        case '1rena1':sensitivity1.value = '0.00114';
          break;
        case '1rena6':sensitivity1.value = '0.000202';
          break;
        case '1rena7':sensitivity1.value = '0.000164';
          break;
        case '1rena31':sensitivity1.value = '0.0000968';
          break;
        case '1rena32':sensitivity1.value = '0.0000787';
          break;
        default:sensitivity1.value = '';
      }
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const rules =  {
  value1: {
    required :true,
    message: '请选择节点',
    trigger: ['blur', 'change'],
  },
  value2: {
    required: true,
    message: '请选择状态',
    trigger: 'change',
  }
}
const rules2 =  {
  value1: {
    required :true,
    message: '请选择节点',
    trigger: ['blur', 'change'],
  },
  value2: {
    required: true,
    message: '请选择节点',
    trigger: ['blur', 'change'],
  }
}
const options1 = [
  {
    label: '防护装备未全脱导致沾染携出',
    value: 'A21'
  },
  {
    label: '未正确识别出风险并采取相应的防护措施',
    value: 'a1'
  },
  {
    label: '未洗澡或清洁',
    value: 'a6'
  },
  {
    label: '洗澡或清洁不彻底',
    value: 'a7'
  },
  {
    label: '样本溢洒、飞溅',
    value: 'a31'
  },
  {
    label: '气溶胶暴露',
    value: 'a32'
  },
  {
    label: '防护用品使用不恰当',
    value: 'a23'
  },
  {
    label: '选用了不合适的防护用品',
    value: 'a21'
  },
  {
    label: '长时间/疲劳工作等个人原因',
    value: 'e1'
  },
  {
    label: '环境和工作原因导致绊倒等',
    value: 'e2'
  },
  {
    label: '隔离措施不当',
    value: 'e5'
  },
  {
    label: '隔离措施意外失效1',
    value: 'e6'
  },
  {
    label: '隔离措施意外失效2',
    value: 'e8'
  },
  {
    label: '缺少有效隔离措施',
    value: 'e7'
  },
  {
    label: '各种实验操作',
    value: 'e3'
  },
  {
    label: '实验室内其他活动',
    value: 'e4'
  },
  {
    label: '防护用品性能不达标',
    value: 'a22'
  },
]
const options2 = [
  {
    label: '设备未消毒',
    value: 'B11'
  },
  {
    label: '只消毒部分部位，未全面消毒',
    value: 'b2'
  },
  {
    label: '方法不当（不正确的设备/消毒剂）',
    value: 'b11'
  },
  {
    label: '性能不当（设备性能不达标/消毒剂性能失效等）',
    value: 'b12'
  },
  {
    label: '参数不当（剂量/温度、时间等）',
    value: 'b13'
  },
  {
    label: '包装不完整导致泄露',
    value: 'b31'
  },
  {
    label: '包装被破坏导致泄露',
    value: 'b32'
  },
  {
    label: '方法不当（不正确的设备/消毒剂）',
    value: 'E1'
  },
  {
    label: '性能不当（设备性能不达标/消毒剂性能失效等）',
    value: 'E2'
  },
  {
    label: '参数不当（剂量/温度、时间等）',
    value: 'E3'
  },
  {
    label: '混入同种病原',
    value: 'E4'
  },
  {
    label: '混入异种活病原',
    value: 'E5'
  },
  {
    label: '未消毒',
    value: 'b5'
  },
  {
    label: '方法不当（不正确的设备/消毒剂）',
    value: 'b61'
  },
  {
    label: '性能不当（设备性能不达标/消毒剂性能失效等）',
    value: 'b62'
  },
  {
    label: '参数不当（剂量/温度、时间等）',
    value: 'b63'
  },
  {
    label: '节肢动物',
    value: 'b7'
  },
  {
    label: '非节肢动物',
    value: 'b8'
  },
  {
    label: '节肢动物',
    value: 'b9'
  },{
    label: '非节肢动物',
    value: 'b10'
  },

]
const options3 = [
  {
    label: '意外事件导致水污染',
    value: 'd7'
  },
  {
    label: '风险评估未识别出水污染需处理',
    value: 'd8'
  },
  {
    label: '正常需要处理但未执行',
    value: 'D31'
  },
  {
    label: '管道破裂、泄漏',
    value: 'D11'
  },
  {
    label: '罐体破裂、泄漏',
    value: 'D12'
  },
  {
    label: '连接部位渗漏',
    value: 'D13'
  },
  {
    label: '方法不当（种类、浓度、时间）',
    value: 'd11'
  },
  {
    label: '性能不当（过期、失效、不合格）',
    value: 'd12'
  },
  {
    label: '使用不当（剂量、时间等）',
    value: 'd13'
  },
  {
    label: '选择不合适的消毒设备/运行参数',
    value: 'd2'
  },
  {
    label: '验证合格，实际消毒灭菌效果不合格',
    value: 'd4'
  },
  {
    label: '未进行验证',
    value: 'd31'
  },
  {
    label: '验证已过期',
    value: 'd32'
  },
  {
    label: '验证结果不可靠',
    value: 'd33'
  },
  {
    label: '未定期维护',
    value: 'd51'
  },
  {
    label: '正常维护条件下的偶发性故障',
    value: 'd52'
  },
  {
    label: '不正确操作',
    value: 'd6'
  },

]
const options4 = [
  {
    label: 'HEPA本身泄漏',
    value: 'e1'
  },
  {
    label: 'HEPA安装问题导致周边泄漏',
    value: 'e2'
  },
  {
    label: '与滤器不相关的其他泄漏',
    value: 'E12'
  },
  {
    label: '自然破坏',
    value: 'e3'
  },
  {
    label: '人为破坏',
    value: 'e4'
  },
  {
    label: '墙体密封失效',
    value: 'F1'
  },
  {
    label: '穿墙设备及等管道丧失气密性',
    value: 'F2'
  },
  {
    label: '无气密性要求房间发生泄漏',
    value: 'e52'
  },
  {
    label: '主备电源电力故障',
    value: 'e61'
  },
  {
    label: '排风系统及自控系统故障',
    value: 'e62'
  },
]
const options5 = [
  {
    label: '风险评估失误，未要求消毒灭菌',
    value: 'c1'
  },
  {
    label: '拿错',
    value: 'c2'
  },
  {
    label: '故意携出',
    value: 'C12'
  },
  {
    label: '消毒剂问题',
    value: 'c3'
  },
  {
    label: '选择不合适的消毒设备/运行参数',
    value: 'c4'
  },
  {
    label: '验证合格，实际消毒灭菌效果不合格',
    value: 'c6'
  },
  {
    label: '未进行验证',
    value: 'c51'
  },
  {
    label: '验证已过期',
    value: 'c52'
  },
  {
    label: '验证结果不可靠',
    value: 'c53'
  },
  {
    label: '未定期维护',
    value: 'c71'
  },
  {
    label: '正常维护条件下的偶发性故障',
    value: 'c72'
  },
  {
    label: '不正确操作',
    value: 'c8'
  },
]
const options12 = [
  {
    label: '人流途径泄漏',
    value: 'ren'
  },
]
const options13 = [
  {
    label: '人流途径泄漏',
    value: 'A'
  },
  {
    label: '人员暴露',
    value: 'A1'
  },
  {
    label: '人员表面沾染带出病原',
    value: 'A2'
  },
  {
    label: '个人防护出现问题',
    value: 'A11'
  },
  {
    label: '病原暴露',
    value: 'A12'
  },
  {
    label: '脱去防护装备后未清洁干净',
    value: 'A22'
  },
  {
    label: '损伤暴露',
    value: 'a4'
  },
  {
    label: '粘膜暴露',
    value: 'a3'
  },
  {
    label: '防护措施未达效果',
    value: 'a2'
  },
  {
    label: '呼吸道暴露',
    value: 'a5'
  },
  {
    label: '未经识别的气溶胶风险',
    value: 'a52'
  },
  {
    label: '锐器/机械创伤',
    value: 'a42'
  },
  {
    label: '已经识别的气溶胶风险',
    value: 'a51'
  },
  {
    label: '防护装备未全脱导致沾染携出',
    value: 'A21'
  },
  {
    label: '不慎跌倒',
    value: 'a41'
  },
  {
    label: '未正确识别出风险并采取相应的防护措施',
    value: 'a1'
  },
  {
    label: '未洗澡或清洁',
    value: 'a6'
  },
  {
    label: '洗澡或清洁不彻底',
    value: 'a7'
  },
  {
    label: '样本溢洒、飞溅',
    value: 'a31'
  },
  {
    label: '气溶胶暴露',
    value: 'a32'
  },
]
const options22 = [
  {
    label: '物流途径泄漏',
    value: 'wu'
  },
]
const options23 = [
  {
    label: '物流途径泄露',
    value: 'B'
  },
  {
    label: '仪器设备携出',
    value: 'B1'
  },
  {
    label: '样本携出',
    value: 'B2'
  },
  {
    label: '感染/污染昆虫逃逸导致扩散',
    value: 'B3'
  },
  {
    label: '包装内样本泄露',
    value: 'B21'
  },
  {
    label: '仪器设备消毒不彻底',
    value: 'B12'
  },
  {
    label: '样本包装表面污染',
    value: 'B22'
  },
  {
    label: '包装不完整导致泄露',
    value: 'B31'
  },
  {
    label: '包装被破坏导致泄露',
    value: 'B32'
  },
  {
    label: '可以暴露的样本混入病原导致泄露',
    value: 'b4'
  },
  {
    label: '消毒不彻底',
    value: 'b6'
  },
  {
    label: '包装失效导致样本泄露',
    value: 'b3'
  },
  {
    label: '全面消毒但未彻底杀灭',
    value: 'b1'
  },
  {
    label: '消毒不彻底',
    value: 'b41'
  },
  {
    label: '混入活病原',
    value: 'b42'
  },
  {
    label: '只消毒部分部位，未全面消毒',
    value: 'b2'
  },
  {
    label: '设备未消毒',
    value: 'B11'
  },
  {
    label: '节肢动物',
    value: 'b7'
  },
  {
    label: '参数不当（剂量/温度、时间等）',
    value: 'b13'
  },
  {
    label: '节肢动物',
    value: 'b9'
  },
  {
    label: '方法不当（不正确的设备/消毒剂）',
    value: 'b11'
  },
  {
    label: '方法不当（不正确的设备/消毒剂）',
    value: 'b61'
  },
  {
    label: '参数不当（剂量/温度、时间等）',
    value: 'b63'
  },
  {
    label: '设备未消毒',
    value: 'b5'
  },
  {
    label: '非实验用动物/昆虫感染/污染并逃逸',
    value: 'b32'
  },
  {
    label: '非节肢动物',
    value: 'b8'
  },
  {
    label: '参数不当（剂量/温度、时间等）',
    value: 'E3'
  },
  {
    label: '混入同种病原',
    value: 'E4'
  },
  {
    label: '性能不当（设备性能不达标/消毒剂性能失效等）',
    value: 'b62'
  },
  {
    label: '仪器设备消毒不彻底',
    value: 'b12'
  },
  {
    label: '实验动物/昆虫逃逸',
    value: 'b31'
  },
  {
    label: '性能不当（设备性能不达标/消毒剂性能失效等）',
    value: 'E2'
  },
  {
    label: '方法不当（不正确的设备/消毒剂）',
    value: 'E1'
  },
  {
    label: '非节肢动物',
    value: 'b10'
  },
  {
    label: '混入异种活病原',
    value: 'E5'
  },
]
const yorns = [
  {
    value: "y",
    label: "是"
  },
  {
    value: "n",
    label: "否"
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})

</script>

<style scoped>
.logo{
  margin-left: 20px;
  margin-right: 10px;
}
.title{
  margin-top: 1vh;
  font-family: NotoSansSC;
  font-size: 2rem;
  font-weight: 500;
}
.word{
  margin: 0 auto;
  margin-top: 1vh;
  margin-bottom: 2vh;
  padding-left: 1vh;
  padding-right: 1vh;
  height: 12vh;
  line-height: 4vh;
  width: 80%;
  display: grid;
  place-items: center;
  border: solid 1px #000000;
  border-radius: 1rem;
  font-size: 1.1rem;
  text-align: justify;
  text-indent: 2.2rem;
}
.treepic img{
  height: 40vh;
}
.subtitle{
  background: #15559a;
  color: white;
  font-size: 1.2rem;
}
.selectitem{
  width: 20rem;
}
.restext{
   border: solid 1px #dddddd;
   border-radius: 3px;
   padding-left: 1rem;
   width: 6rem;
   height: 32px;
   line-height: 32px;
   font-size: 14px;
   text-align: left;
 }

</style>
