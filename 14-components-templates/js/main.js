Vue.component('choose-winner', {
  props: ['list'],
  template: '#choose-winner-template',
  methods: {
    chooseWinner() {
      let qty = this.players.length;
      let index = Math.floor((Math.random() * qty));
      this.winner = this.players[index -1];
    }
  },
  data() {
    return {
      winner: false,
      players: this.list
    }
  }
});

new Vue({
  el: 'main',
  data: {
    people: [
      'Tony', 'Elias', 'Tomy', 'Henkka', 'Pasi'
    ]
  },
});