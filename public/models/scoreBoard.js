(function () {

  const Collection = window.Collection;
  const Model = window.Model;
  const Score = window.Score;


  class ScoreBoard extends Model {
    constructor(options) {
      super(options);
      this.scores = new Collection({
        comparator: (a, b) => {
          if (a.score < b.score) {
            return 1;
          } else {
            return -1;
          }
        }
      });
    }

    save() {
      this.scores.saveAll();
    }

    remove() {
      this.scores.removeAll();
    }

    fetch(attrs) {
      let {useremails = []} = attrs;
      useremails.forEach(email => {
        let score = new Score({email: email}).fetch();
        this.scores.push_back(score, false);
      });
      this.scores._sort();
    }

    add(element) {
      if (element.score || element.email) {
        this.scores.push_back(element);
      } else if (element.email) {
        this.fetch(element);
      } else {
        return {error: 'нельзя добавить запись без идентификатора email'}
      }
    }
  }


  window.ScoreBoard = ScoreBoard;
})();