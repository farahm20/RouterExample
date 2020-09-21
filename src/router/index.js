//setting up our routes here
//Pros---- no made to make additional request. 
//Vuejs and view Router is taking care of this at teh 
//frontend.

import Vue from 'vue' //vue library
import VueRouter from 'vue-router' //plugin used below
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ViewProfile from '../components/ViewProfile.vue'

Vue.use(VueRouter) //set up vue to sue plugin

const routes = [ //route instance
  {
    path: '/',
    name: 'Home',
    component: Home //the component that wil load when the user visits route
  },  //component loaded in <routerview/> in app
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  { //to use a interchangeable route parameter
    path: '/profile/:user_id',
    name: 'ViewProfile',
    component: ViewProfile
  }
]

const router = new VueRouter({ //function with a route object. each route is as object
  routes
})

export default router
