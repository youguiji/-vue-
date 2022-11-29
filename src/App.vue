<!--
 * @Description: 
 * @Version: 
 * @Autor: Austral
 * @Date: 2022-10-21 21:26:09
 * @LastEditors: Austral
 * @LastEditTime: 2022-11-19 09:32:35
-->
<script setup>
import { RouterLink, RouterView } from "vue-router";
// HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
</template>


<style >
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#nprogress .bar {
  /*自定义进度条颜色*/
  background: #d9393b !important;
}
</style>
