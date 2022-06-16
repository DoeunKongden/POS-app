import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

import router from '../imports/ui/routes/index'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
    router,
  })
})
