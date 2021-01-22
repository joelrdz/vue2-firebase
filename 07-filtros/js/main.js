const vm = new Vue({
  el: 'main',
  data: {
    search: '',
    minScore: 5,
    games: [
      {
        title: 'The Last of Us',
        genre: 'Story',
        score: 9
      },
      {
        title: 'Breath of the Wild',
        genre: 'Adventure',
        score: 10
      },
      {
        title: 'Destiny',
        genre: 'FPS',
        score: 7
      }
    ]
  },
  computed: {
    bestGames() {
      return this.games.filter(game => game.score >= this.minScore);
    },
    searchGame() {
      return this.games.filter(game => game.title.includes(this.search));
    }
  }
});