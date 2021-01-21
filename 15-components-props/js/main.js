Vue.component('autor', {
  props: ['nombre', 'edad'],
  mounted() {
    // Las props son accesibles desde this (proxy)
    console.log(this.nombre)
  },
  template: `<h1>{{ nombre }}</h1>`
});

new Vue({
  el: 'main',
  data: {
    autor: 'Joel Rdz'
  },
});