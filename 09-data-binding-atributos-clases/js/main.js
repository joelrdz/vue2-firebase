new Vue({
  el: 'main',
  data: {
    todos: [
      { title: 'Clean playlists', completed: false },
      { title: 'Search movies', completed: false },
      { title: 'Empty trash', completed: false },
      { title: 'Design website', completed: false },
      { title: 'Write script', completed: false }
    ]
  },
  methods: {
    completeTodo(todo) {
      return todo.completed = !todo.completed;
    }
  },
  computed: {
    todosCompleted() {
      return this.todos.filter(todo => todo.completed);
    }
  }
});