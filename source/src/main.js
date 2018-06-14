import Vue from 'vue'
import App from './App.vue'

import './css/bootstrap.min.css'
import './css/fonts.css'
import './css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
