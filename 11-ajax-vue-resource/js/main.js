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
      this.$http.get('https://randomuser.me/api/?results=500')
        .then(response => {
          this.users = response.body.results;
        });
    }
  }
});