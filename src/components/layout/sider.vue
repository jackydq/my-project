<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

<template>
    <div class="sider-box">
       <ul>
            <!--

            <template v-for = "item in items">
            <li>
               <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </template>
          -->
            <li>
               <router-link to="/order"></router-link>
            </li>
       </ul>
    </div>
  </div>
</template>

<script>
import topmenu from '../json/component.json';

export default {
  name: 'sider',
  props:{
    data:String
  },
  computed:{
      topMenu(){
        return topmenu;
      }
  }
}
</script>
