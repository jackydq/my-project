<template>
  <div id="app">
    <!--调用组件 头部导航-->
    <my-header></my-header>

    <!--页面主体-->
    <div class="main-cnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/layout/header'

Vue.component('my-header', Header)

export default {
  name: 'app',
  data: function (){
      return {

      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:14px;
}
#app a{ text-decoration:none; }
#app header{
  position:fixed; top:0; left:0; right:0; height:60px; background-color:#404552;
  transition:all 0.3s;
  z-index:101;
}

header .logo-box{ float:left; width: 100px; height:100%; }
header .nav-box { float:left; width: -webkit-calc( 100% - 100px) ; height:100%; line-height:60px; font-size:0; }

.logo-box img{ width: 100px; height:100%; }
.nav-box a{
  display:inline-block; width: 100px; height:100%; text-align:center; border-left:1px solid #b3b3b3; color:#f4f4f4;
  font-size:16px; background-color:#535762;
}
.nav-box a:hover{ background-color:#6f7279; }

.nav-box a.router-link-exact-active{ background-color:#165a77;}

.main-cnt{ position:absolute; top:60px; bottom:0; left:0; right:0; z-index:100;}

.sider-box{ position: fixed; top:60px; bottom:0; left:0; width:100px; background-color:#333; color:#fff;}
.main-box {
  position: absolute; top:0; bottom:0; left:100px; right:0; box-sizing: border-box; overflow: hidden;
  overflow-y: auto; background-color:#fff;  border:20px solid #eaedf1;
}

.sider-box ul  { list-style:none; padding:0 20px;  }
.sider-box ul li{ margin:20px 0;  }
.sider-box ul li a{  color:#fff; }
.sider-box ul li a.router-link-exact-active{ background-color:#3681cb;}
</style>
