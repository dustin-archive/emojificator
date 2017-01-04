module.exports = {
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    manager: require('../manager/main.vue'),
    palette: require('../palette/main.vue'),
    picker: require('../picker/main.vue'),
    workspace: require('../workspace/main.vue')
  }
}
