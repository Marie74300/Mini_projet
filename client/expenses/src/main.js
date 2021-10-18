import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'

//imports components
import HelloWorld from './components/HelloWorld.vue'
import Newcompo from './components/Newcompo.vue'
import Restaurant from './components/Restaurant.vue'
import GoogleMap from './components/GoogleMap.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDXwoI_V9Nfd57uZs_T6AInx23xrpNiCT4',
    libraries:'places',// a remplacer par le nom des restos 
  }
});

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

    },
    {
      path:'/GoogleMap',
      component:GoogleMap,
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



