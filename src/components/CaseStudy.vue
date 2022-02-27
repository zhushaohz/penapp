<template>
  <div class="report">
    <div class="content">
      <p>
        在传统生物安全实验室中，潜在病原微生物意外泄漏事故时常发生，未经及时发现或及时报道的实验室获得性感染事故可能会导致更严重的公共疾病传播事故。如果意外泄漏的病原体是潜在的难以预控的高传染性病原体，则有可能导致累及全球的全球灾难，这将造成难以估计的人员伤亡和财产损失。
      </p>
      <p>
        对美国生物安全协会建立的 Laboratory-Acquired Infection Database 中收录的359例可以溯源的实验室获得性感染事故数据进行原因分析，结果表明，人为失误是致使实验室工作人员接触病原体并将病原体携出的主要原因。在所有病原体外环境流出途径中，人流途径外环境携出病原体微生物事故占比为90.25%，其次为物流途径，占比为5.85%、固体废弃物途径，占比为1.67%、水流途径和气流途径均占比为1.39%以及0.83%。
      </p>
      <div class="pic">
        <img width="400" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/penreport1.png" />
      </div>
      <p>
        在人流途径外环境携出病原体微生物事故原因中，占比最高的分别是实验液体飞溅、样品溢洒、防护装备不合适以及动物接种实验注射器刺伤（外伤），在324例人流途径外环境携出病原体微生物事故致因中分别占比为23.7%、18.5%以及16.0%。
      </p>
      <div class="pic">
        <img width="400" style="border: solid 1px var(--td-gray-color-3)" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/penreport2.png" />
      </div>
      <p>
        在物流途径外环境携出病原体微生物事故原因中，占比最高的分别是标记错误、混入其他微生物以及灭活不彻底，在21例物流途径外环境携出病原体微生物事故致因中分别占比为33.3%、14.3%以及14.3%。
      </p>
      <div class="pic">
        <img width="400" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/penreport3.png" />
      </div>
      <p>
        在水流途径外环境携出病原体微生物事故原因中，占比最高的分别是污水处理效果验证不合格、管道腐蚀或机械破坏以及消毒剂过期，在3例水流途径外环境携出病原体微生物事故致因中分别占比为33.3%、33.3%以及33.3%。
      </p>
      <div class="pic">
        <img width="400" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/penreport5.png" />
      </div>
      <p>
        在气流途径外环境携出病原体微生物事故原因中，占比最高的分别是工作窗口气流反向或风速变小以及排水管道通气管HEPA泄漏，在5例气流途径外环境携出病原体微生物事故致因中分别占比为40%以及20%。
      </p>
      <div class="pic">
        <img width="400" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/penreport6.png" />
      </div>
      <p>
        在固体废弃物途径外环境携出病原体微生物事故原因中，占比最高的分别是灭菌SOP不合适、无意识消毒携出以及消毒剂过期，在6例固体废弃物途径外环境携出病原体微生物事故致因中分别占比为50%、33.3%以及16.7%。
      </p>
      <div class="pic">
        <img width="400" src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/penreport4.png" />
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "CaseStudy"
}
</script>

<style scoped>
.report{
  padding: 20px;
  margin: auto;
  text-indent: 2rem;
  text-align: justify;
  font-size: 1rem;
  overscroll-behavior: contain;
}
.content{
  width: 70%;
  margin: auto;
}
.content img{
  margin: auto;
}
.pic{
  text-align: center;
}
</style>
