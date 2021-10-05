import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'

//imports components
import HelloWorld from './components/HelloWorld.vue'
import Newcompo from './components/Newcompo.vue'
import Restaurant from './components/Restaurant.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:HelloWorld,
    },
    {
      path:'/Newcompo',
      component:Newcompo,
      props:{
        msg:"Coucou guys"
      }
    },
    {
      path:'/Restaurant/:id',
      component:Restaurant,
      props:{

      }
    }
  ],
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



