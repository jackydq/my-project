<template>
    <div class="sider-box">
       <ul>
          <li>
             <router-link to="/">账户管理</router-link>
          </li>
          <li>
             <router-link to="/order">订单管理</router-link>
          </li>
       </ul>
    </div>
  </div>
</template>

<script>
import routerJs from '../../router/index.js'

export default {
  name: 'sider',
  data () {
    return {
      msg: 'This is sider',
      routerJs:routerJs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
