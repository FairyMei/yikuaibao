// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../style/css/base.css'
import '../style/css/importContent.css'
import '../style/css/travel.css'
//三级联动
import VueAreaLinkage from 'vue-area-linkage'
Vue.use(ElementUI);
Vue.use(VueAreaLinkage)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
