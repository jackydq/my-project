<style>

</style>

<template>
  <header>
    <div class="logo-box">
      <img src="../../assets/logo.png">
    </div>
    <div class="nav-box">
      <template v-for="item in topMenu">
        <router-link :to="item.path">{{item.name}}</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import topmenu from '../json/component.json';

export default {
  name: 'header',
  data: function(){
     return {
        topMenu:topmenu
     }
  }
}
</script>


