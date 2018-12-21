import Vue from 'vue'

import App from './App.vue'

import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'


import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'



Vue.use(Vuetify, {
  theme: {
    primary: '#263238', // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base, // #3F51B5
    forbutton: '#1DE9B6',
    bluebutton: '#1E88E5'
  },

  iconfont: 'fa'
})
const app  = new Vue({

el: '#app',
template: '<app></app>',
components: {App},
router


});
