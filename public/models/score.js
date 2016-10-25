(function () {


  const Model = window.Model;


  class Score extends Model {
    constructor(options) {
      super(options);
    }

    fetch() {
      return this.send('GET', {email: this.attributes.email})
        .then(data => JSON.parse(data))
        .then(json => {
          this.attributes = json;
          return this.attributes;
        });
    }


    save() {
      return this.send('POST', {email: this.attributes.email, score: this.attributes.score})
        .then(data => JSON.parse(data))
        .then(thit.attributes.result = result)
        .catch(error => console.log(error));
    }

    remove() {
        return this.send('DELETE', {email: this.attributes.email})
          .then(this.attributes = {})
          .catch(error => console.log(error));
    }
  }



  window.Score = Score;
})();