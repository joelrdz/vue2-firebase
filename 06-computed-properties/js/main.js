const vm = new Vue({
  el: 'main',
  data: {
    message: 'Hello world!',
    newTodo: null,
    todos: [
      { title: 'Clean playlists', priority: true, antiqueness: 23 },
      { title: 'Search movies', priority: false, antiqueness: 135 },
      { title: 'Empty trash', priority: true, antiqueness: 378 }
    ]
  },
  methods: {
    addTodo() {
      // this, hace referencia a la instancia Vue
      this.todos.unshift({
        title: this.newTodo,
        priority: false,
        antiqueness: 0
      });
      this.newTodo = '';
    }
  },
  computed: {
    messageInverted() {
			return this.message.split('').reverse().join('');
    },
    todosWithPriority() {
      return this.todos.filter(todo => todo.priority);
    },
    todosByAntiqueness() {
      return this.todos.sort((a, b) => b.antiqueness - a.antiqueness);
    }
  }
});