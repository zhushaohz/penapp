<template>
  <div id="page">
    <div id="titleframe"><n-text type="primary" id="title">生物安全实验室外环境泄漏定量风险评估</n-text></div>
    <div id="frame">
      <t-row justify="center">
        <router-link to="/riskidentification"><div class="card" hoverable><div class="cardword">风险识别</div></div></router-link>
        <router-link to="/riskanalysis"><div class="card" hoverable><div class="cardword">风险分析</div></div></router-link>
      </t-row>

    </div>
  </div>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'


export default {
  name: "Home",
  setup () {
    return {

    }
  },
}
</script>

<style scoped>
#page{
  padding-top: 1rem;
  border: solid 0px #000;
  height: 100vh;
  background-image: url("https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/bg.jpg");
  background-size: cover;
}
#titleframe{
  margin-top: 9rem;
  margin-bottom: 9rem;
  border: solid 0px #000000;
  text-align: center;
}
#frame{
  width: 70%;
  margin: auto;
  text-align: center;
}
#title{
  font-size: 5rem;
  color: black;
}
.card{
  margin-left: 4vh;
  margin-right: 4vh;
  height: 6rem;
  width: 12rem;
  border: solid 0px #000000;
  border-radius: 1.5rem;
  background-color: #5DA0E7;
  box-shadow: 20px -20px 30px #1a61ad, -20px 20px 30px #99c3f0;
  opacity: 0.6;
  color: black;
}
.card:after{
  box-shadow: 5px -5px 10px #1a61ad, -5px 5px 10px #99c3f0;
}
.cardword{
  border: solid 0px #000000;
  height: 6rem;
  line-height: 6rem;
  font-size: 2rem;
  font-family: NotoSansSC;
}
a:link{
  text-decoration:none;
}

</style>
