<style>

</style>

<template>
  <div class="page-container page-home">
    <!--调用组件 左侧菜单-->
    <my-sider :data="sideMenu"></my-sider>

    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topmenu from '../json/component.json';

export default {
  name: 'home',
  data: function () {
    return {
      sideMenu: topmenu[0]['sideMenu']
    }
  }
}
</script>
