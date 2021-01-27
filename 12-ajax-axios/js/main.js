// Si quieres usar la sintaxis de vue-resource
// Vue.prototype.$http = axios;

new Vue({
  el: 'main',
  mounted() {
    this.loadUsers();
  },
  data: {
    users: []
  },
  methods: {
    loadUsers() {
      // Con vue-resource
      // this.$http.get('https://randomuser.me/api/?results=50')
      //   .then(response => {
      //     this.users = response.data.results;
      //   });

      axios.get('https://randomuser.me/api/?results=50')
      .then(response => {
        this.users = response.data.results;
      });
    }
  }
});