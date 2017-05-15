<template>
  <div class="page-container page-src">
    <my-sider></my-sider>

    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Sider from '@/components/layout/sider'

export default {
  name: 'src',
  data () {
    return {
      msg: 'This is src page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
