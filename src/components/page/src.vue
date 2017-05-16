<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<template>
  <div class="page-container page-src">
    <my-sider :data="sideMenu"></my-sider>

    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topmenu from '../json/component.json';

export default {
  name: 'src',
  data: function () {
    return {
      sideMenu: topmenu[1]['sideMenu']
    }
  }
}
</script>


