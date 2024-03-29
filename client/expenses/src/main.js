import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'

//imports components
import Restaurant from './components/Restaurant.vue'
import BB from './components/BB.vue'
import DetailRestaurant from './components/DetailRestaurant.vue'


import { Carousel, CarouselItem } from 'element-ui';
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAuWMgnu2rK7rhrgEAIoKWVnqurYAiyQ9M',
    libraries:'places',// a remplacer par le nom des restos 
  }
});




const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:BB,
    },
    {
      path:'/Rechercherestaurant',
      component:Restaurant
    },
    {
      path:'/Restaurant/:id',
      component:DetailRestaurant,
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



