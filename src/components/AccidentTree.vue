<template>
  <div class="treepage">
    <t-tabs v-model="value">
      <t-tab-panel :value="1" label="人流途径">
        <div class="treepic">
          <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/treeren.png" />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="2" label="物流途径">
        <div class="treepic">
          <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/treewu.png" />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="3" label="水流途径">
        <div class="treepic">
          <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/treewater.png" />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="4" label="气流途径">
        <div class="treepic">
          <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/treeair.png" />
        </div>
      </t-tab-panel>
      <t-tab-panel :value="5" label="固态废弃物途径">
        <div class="treepic">
          <img src="https://zhz-1257270135.cos.ap-beijing.myqcloud.com/pen/treegu.png" />
        </div>
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(1);

</script>

<style scoped>
.treepage{
  background: white;
  height: 70%;
}
.treepic img{
  height: 65vh;
}

</style>
