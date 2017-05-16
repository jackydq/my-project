// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;


/*加载组件模块*/
import Header from '@/components/layout/header'
import Sider from '@/components/layout/sider'


/*全局注册组件*/
Vue.component('my-header', Header);
Vue.component('my-sider', Sider);


/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
