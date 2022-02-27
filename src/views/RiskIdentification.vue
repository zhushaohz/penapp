<template>
  <div id="page1">
    <t-layout>
      <t-header height="30%">
        <t-head-menu value="item1" height="150px" style="border-bottom: 1px solid var(--td-gray-color-3)">
          <template #logo>
            <img width="240" class="logo" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/logo3.png" alt="logo" />
          </template>
          <t-menu-item value="item1"> 风险识别 </t-menu-item>
          <t-menu-item value="item2" to="/riskanalysis"> 风险分析 </t-menu-item>

          <template #operations>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="#"><t-icon class="t-menu__operations-icon" name="home" /></a>
          </template>
        </t-head-menu>
        <div class="title">
          风险识别
        </div>
        <div class="word">
          为确定生物安全实验室泄漏途径及风险因素，采用事故树方法完成生物安全实验室风险识别。首先通过调研国内外生物安全实验室泄漏事件，确定事故发生原因及主要影响因素；结合生物安全实验室管理制度及“四流”防护理论，确定病原微生物可能泄漏的途径；最后根据泄漏途径及对应的风险因素，完成生物安全实验室泄漏事故树构建。
        </div>
      </t-header>
      <t-layout>
        <t-aside style="border-top: 1px solid var(--td-gray-color-3)">
          <t-menu theme="light" value="casestudy" style="margin-right: 50px;" height="550px">
            <t-menu-item value="casestudy" to="/riskidentification/casestudy">
              <template #icon>
                <t-icon name="view-module" />
              </template>
              案例调研
            </t-menu-item>
            <t-menu-item value="risklist" to="/riskidentification/risklist">
              <template #icon>
                <t-icon name="bulletpoint" />
              </template>
              风险清单
            </t-menu-item>
            <t-menu-item value="accidenttree" to="/riskidentification/accidenttree">
              <template #icon>
                <t-icon name="fork" />
              </template>
              构建事故树
            </t-menu-item>
          </t-menu>
        </t-aside>
        <t-layout style="border: solid 1px var(--td-gray-color-3);background: #fff;">
          <t-content>
            <div>
              <router-view class="childpage"></router-view>
            </div>
          </t-content>
        </t-layout>
      </t-layout>
    </t-layout>
  </div>
</template>

<script>

import {h, ref} from "vue";
import {RouterLink} from "vue-router";


export default {
  name: "RiskIdentification",
  setup () {
    return {

    }
  },

}
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
  width: 70%;
}
a:link{
  text-decoration:none;
}
.router-link-active {
  text-decoration: none;
}
#page1{
  height: 100vh;
}
.childpage{
  height: 68vh;
  overflow-y: auto;
}
</style>
