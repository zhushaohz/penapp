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
          <t-row>
            <t-col span="7">
              <div>
                <t-tabs v-model="value" theme="normal" placement="top">
                  <t-tab-panel :value="1" label="人流途径">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiren.png" />
                    </div>
                  </t-tab-panel>
                  <t-tab-panel :value="2" label="物流途径">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiwu.png" />
                    </div>
                  </t-tab-panel>
                  <t-tab-panel :value="3" label="水流途径">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiwater.png" />
                    </div>
                  </t-tab-panel>
                  <t-tab-panel :value="4" label="气流途径">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beiair.png" />
                    </div>
                  </t-tab-panel>
                  <t-tab-panel :value="5" label="固态废弃物途径">
                    <div class="treepic">
                      <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/beigu.png" />
                    </div>
                  </t-tab-panel>
                </t-tabs>
              </div>
            </t-col>
            <t-col span="5">
              <div class="subtitle">
                概率分析
              </div>
              <div>
                <n-form
                  inline
                  :model="formValue"
                  :rules="rules"
                  ref="formRef"
                  style="padding: 10px"
                >
                  <n-form-item label="节点" path="value1">
                    <n-select class="selectitem" placeholder="请选择" v-model:value="formValue.value1" :options="options"/>
                  </n-form-item>
                  <n-form-item label="状态" path="value2">
                    <n-radio-group v-model:value="formValue.value2" name="radiogroup">
                      <n-radio-button
                        v-for="yorn in yorns"
                        :key="yorn.value"
                        :value="yorn.value"
                      >
                        {{ yorn.label }}
                      </n-radio-button>
                    </n-radio-group>
                  </n-form-item>
                  <n-form-item>
                    <t-button @click="handleValidateClick">分析</t-button>
                  </n-form-item>
                  <n-form-item label="概率">
                    <div class="restext" v-if="result === 'e1y'">50%</div>
                    <div class="restext" v-if="result === 'e1n'">50%1f</div>
                    <div class="restext" v-if="result === 'e2y'">50%2y</div>
                    <div class="restext" v-if="result === 'e2n'">50%2f</div>
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
        </t-content>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(1);

const formRef = ref( null)
const formValue = ref( {
  value1: null,
  value2: null
})
const result = ref(null)
const handleValidateClick = async () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      const { value1, value2} = formValue
      //message.success('分析成功')
      result.value = formValue.value.value1 + formValue.value.value2
      console.log(result)
    } else {
      console.log(errors)
      //message.error('请选择选项')
    }
  })
}
const rules =  {
  value1: {
    required :true,
    message: '请选择a',
    trigger: ['blur', 'change'],
  },
  value2: {
    required: true,
    message: '请选择b',
    trigger: 'change',
  }
}
const options = [
  {
    label: '风险评估失误，未要求消毒灭菌',
    value: 'e1'
  },
  {
    label: '拿错',
    value: 'e2'
  }
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
  width: 15rem;
}.restext{
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
