<template>
  <div id="page">
    <div id="titleframe"><n-text type="primary" id="title">生物实验室人因量化风险评估系统</n-text></div>
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
  background-image: url("https://zhz-1257270135.cos.ap-beijing.myqcloud.com/ren/bg2.jpg");
  background-size: cover;
  opacity: 0.9;
  user-select: none;
}
#titleframe{
  margin-top: 9rem;
  margin-bottom: 12rem;
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
  font-weight: 600;
  font-family: Microsoft YaHei;
  color: black;
  -webkit-text-stroke: 0px white;
  text-shadow: 20px 15px 25px #ffffff, -20px -15px 25px #ffffff;

}
.card{
  margin-left: 8vh;
  margin-right: 8vh;
  height: 8rem;
  width: 20rem;
  border: solid 0px #000000;
  border-radius: 8rem;
  background-color: #5DA0E7;
  box-shadow: 10px -10px 30px #1a61ad, -10px 10px 30px #99c3f0;
  opacity: 1;
  color: black;
}
.card:after{
  box-shadow: 5px -5px 10px #1a61ad, -5px 5px 10px #99c3f0;
}
.cardword{
  border: solid 0px #000000;
  height: 8rem;
  line-height: 8rem;
  font-size: 3rem;
  font-family: NotoSansSC;
}
a:link{
  text-decoration:none;
}

</style>
