import Vue from 'vue'

import VueRouter from 'vue-router'


Vue.use(VueRouter)




const router = new VueRouter({



routes: [


{path: '/sponsor', component: require('./components/sponsor.vue')},
{path: '/', component: require('./components/home.vue')}

]








})


export default router
