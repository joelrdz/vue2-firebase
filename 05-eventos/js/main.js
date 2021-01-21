const vm = new Vue({
  el: 'main',
  data: {
    newTodo: null,
    todos: [
      'Clean playlists',
      'Search movies',
      'Empty trash'
    ]
  },
  methods: {
    addTodo() {
      // this, hace referencia a la instancia Vue
      this.todos.unshift(this.newTodo);
      this.newTodo = '';
    }
  }
});

// Vanilla JavaScript
// function addTodo() {
//   console.log('a')
//   const input = document.querySelector('input[type=text]');
//   vm.todos.unshift(input.value);
//   input.value = '';
// }