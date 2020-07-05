const widget = Vue.component('widget', {
  data: function () {
    return {
      src: 'https://www.placecage.com/c/200/300'
    }
  },
  template: `
    <div class="widget"><img v-if="src" :src="src"></div>
  `
  
})
const stat = Vue.component('stat', {
  template: '<div>Stata</div>'
})

const routes = [
  { path: '/widget', component: widget },
  { path: '/stat', component: stat }
]

const router = new VueRouter({
  routes
})
const app = new Vue({
  router
}).$mount('#root');