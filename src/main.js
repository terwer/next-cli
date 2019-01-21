import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export default ({ router, store }) => {
  return new Vue({
    store,
    router,
    render: h => h(App)
  });
}
