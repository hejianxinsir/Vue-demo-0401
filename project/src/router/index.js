import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

Vue.use(router)

export default new router({
  routes: [{
    path: '/helloworld',
    component: HelloWorld
  },{
    path: '/helloearth',
    component: HelloEarth
  }]
})

