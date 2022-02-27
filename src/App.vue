<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default {
  name: 'app',
  mounted() {
    let windowwith = window.innerWidth
    console.log(windowwith)
    let fontsize = windowwith/1920*20;
    var html = document.getElementsByTagName("html")[0];
    html.style.fontSize = fontsize +'px'
    window.onresize = () => {
      let windowwith = window.innerWidth
      console.log(windowwith)
      let fontsize = windowwith/1920*20;
      var html = document.getElementsByTagName("html")[0];
      html.style.fontSize = fontsize +'px'
    }
  }
};
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import './common/font/font.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100vh;
}
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3x);
  transition: color 0.2s ease;
}
</style>
