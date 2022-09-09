
Vue.component('component1', {
    data: function () {
      return {
        count: 0
      };
    },

    template: '<button v-on:click="count++"> Number of items in cart: {{ count }} </button>'
  });


  var component2 = {
    template: '<p>3 by 3 Speed Cube for only 10 Dollars!</p>'
  }

  new Vue({
    el: '#app',
    components: {
      'component-2': component2,
    },
  });