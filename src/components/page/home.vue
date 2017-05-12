<template>
  <div class="home">
    <my-sider></my-sider>

    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Sider from '@/components/layout/sider'

Vue.component('my-sider', Sider)

export default {
  name: 'home',
  data: function () {
    return {
      msg: 'This is home page'
    }
  }
}
</script>

<style>

</style>
