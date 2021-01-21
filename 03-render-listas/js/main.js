const vm = new Vue({
  el: 'main',
  data: {
    workdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    todos: [
      { title: 'Comprar caldero de peltre', priority: 'low' },
      { title: 'Aprender magia oscura', priority: 'high' },
      { title: 'Entrenar quidditch', priority: 'high' },
    ],
    person: {
      name: 'Severus',
      role: 'mage',
      city: 'London'
    }
  },
});