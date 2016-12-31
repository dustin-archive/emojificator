var Vue = require('vue'),
    Vuex = require('vuex')

Vue.use(Vuex)

new Vue({
  el: '#root',
  store: new Vuex.Store({
    modules: {
      test: require('./store/test')
    }
  }),
  render: function (h) {
    return h(require('./components/app/main.vue'))
  }
})
