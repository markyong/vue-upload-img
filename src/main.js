import Vue from 'vue'
import App from './App.vue'
import router from './router'
new Vue({
  el: '#app',
  router,
  data:{
    Bus:new Vue()
  },
  render: h => h(App)
})
