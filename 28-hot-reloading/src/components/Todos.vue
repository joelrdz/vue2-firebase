<template>
  <div>
    <h2>Todos pending:</h2>
    <ul>
      <li v-for="todo in todosPending" :key="todo.id">
        <a href="#" @click="updateTodo(todo)" v-text="todo.title"></a>
      </li>
    </ul>

    <h2>Todos completed:</h2>
    <ul>
      <li v-for="todo in todosCompleted" :key="todo.id">
        <a href="#" @click="updateTodo(todo)" v-text="todo.title"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { title: 'Clean playlists', completed: false },
        { title: 'Search movies', completed: false },
        { title: 'Empty trash', completed: false },
        { title: 'Design website', completed: false },
        { title: 'Write script', completed: false }
      ],
      completed: []
    }
  },
  methods: {
    updateTodo(todo) {
      todo.completed = !todo.completed;
    }
  },
  computed: {
    todosPending() {
      return this.todos.filter(todo => !todo.completed);
    },
    todosCompleted() {
      return this.todos.filter(todo => todo.completed);
    }
  }
}
</script>

<style>
  li a {
    color: darkgoldenrod;
    font-weight: bold;
  }
</style>
