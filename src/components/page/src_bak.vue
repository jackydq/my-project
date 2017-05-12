<template>
  <div class="home">
    <div class="sider-box">
       <ul>
            <li>
               <router-link to="/src">我的账户</router-link>
            </li>
            <li>
               <router-link to="/src/order">我的订单</router-link>
            </li>
       </ul>
    </div>
    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
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
