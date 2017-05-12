<template>
  <div class="home">
    <div class="sider-box">
       <ul>
            <li>
               <router-link to="/acount">我的账户</router-link>
            </li>
            <li>
               <router-link to="/order">我的订单</router-link>
            </li>
       </ul>
    </div>
    <div class="main-box">
      <router-view></router-view>
      <!--main-box-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'This is hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
