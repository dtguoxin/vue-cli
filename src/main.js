import Vue from 'vue'
import App from './App.vue'
import router from './router'
import EventBus from './event-bus'

Vue.config.productionTip = false;
Vue.use(EventBus)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')