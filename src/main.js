var Vue = require('vue'),
    Vuex = require('vuex'),
    app = require('./components/app/main.vue')

Vue.use(Vuex)

new Vue({
  el: '#root',
  store: new Vuex.Store({ modules: {
    test: require('./store/test')
  }}),
  render: function (h) {
    return h(app)
  }
})
