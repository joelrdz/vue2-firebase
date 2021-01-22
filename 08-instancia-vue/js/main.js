const vm1 = new Vue({
  el: 'main',
  data: {
    message: 'Instancia Vue 1',
  },
  beforeUpdate() {
    console.log('BeforeUpdate: ', this.message);
  },
  updated() {
    console.log('Updated: ', this.message);
  },
  methods: {
    backwards(){
      this.message = this.message.split('').reverse().join('');
    }
  },
  computed: {
    messageUppercase(){
      return this.message.toUpperCase();
    }
  }
});

const vm2 = new Vue({
  el: '#app',
  data: {
    message: 'Instancia Vue 2',
  }
});