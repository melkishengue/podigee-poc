import "@babel/polyfill";
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Article1 from './components/Article1.vue'
import Article2 from './components/Article2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/article/1',
      component: Article1,
    },
    {
      path: '/article/2',
      component: Article2,
    }
  ]
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

if (module && module.hot) {
  module.hot.accept(); 
}