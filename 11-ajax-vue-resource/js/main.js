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
      this.$http.get('https://randomuser.me/api/?results=50')
        .then(response => {
          this.users = response.body.results;
        });
    }
  }
});