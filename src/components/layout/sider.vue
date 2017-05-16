<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

<template>
  <div class="sider-box">
     <ul>
        <template v-for = "item in data">
          <li>
             <router-link :to="item.path">{{item.title}}</router-link>
          </li>
        </template>
     </ul>
  </div>
</template>

<script>

export default {
  name: 'sider',
  props:{
    data:Array
  }
}
</script>
