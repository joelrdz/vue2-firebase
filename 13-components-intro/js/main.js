// Componente agnóstico
Vue.component('my-todos', {
  props: ['todos'],
  template: `<ul><li v-for="todo in todos" v-text="todo.title"></li></ul>`,
});

const vm1 = new Vue({
  el: 'main',
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.todosAjax = response.data;
      });
  },
  data: {
    todosAjax: [],
    todosLocal: [
      { title: 'Clean playlists' },
      { title: 'Search movies' },
      { title: 'Empty trash' },
    ]
  }
});

// Compontente indepeniente
Vue.component('my-todos-independent', {
  template: `<ul><li v-for="todo in todosAjax" v-text="todo.title"></li></ul>`,
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.todosAjax = response.data;
      });
  },
  data() {
    return {
      todosAjax: [],
    }
  }
});

const vm2 = new Vue({
  el: '#isolated-component',
})