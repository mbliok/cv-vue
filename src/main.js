
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

import Home from './components/Home'
import Works from './components/Works'
import Bio from './components/Bio'
import ProjectDetail from './components/ProjectDetail'
import List from './components/List'

import { apiAccountsDomain } from './config'
// Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(VueRouter)

// Create router object
const router = new VueRouter({
  mode: 'history', // Remove hash tag in url /#/
 // base:__dirname,
  routes: [
    { path: '/', component: Home, name: 'Home'},
    { path: '/works', component: Works, name: 'Works' },
     { path: '/works/:id', component: ProjectDetail, name: 'ProjectDetail' },
    { path: '/bio', component: Bio, name: 'Bio' }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
        <nav class="navbar">
          <div class="container">
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/works">works</router-link></li>
                <li><router-link to="/bio">bio</router-link></li>
              </ul>
            </div>
          </div>
        </nav>

          <div class="main-content">
            <router-view></router-view>
          </div>
    </div>
  `
}).$mount('#app')

