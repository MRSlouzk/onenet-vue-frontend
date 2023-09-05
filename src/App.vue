<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <ECharts :id="'customChart' + option.id"></ECharts>-->
  <ECharts></ECharts>
</template>

<script setup>
import ECharts from './components/ECharts.vue'
import {provide} from "vue";
import * as echarts from "echarts"
provide("echarts", echarts)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
