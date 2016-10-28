(function () {


  const Model = window.Model;


  class Score extends Model {
    constructor(options) {
      super(options);
    }


    get url() {
      return this.baseUrl() + '/score';
    }

    fetch() {
      return this.send('GET', {email: this.attributes.email}, this.url)
        .then(data => JSON.parse(data))
        .then(json => {
          this.attributes = json;
          return this.attributes;
        });
    }


    save() {
      return this.send('POST', {email: this.attributes.email, score: this.attributes.score}, this.url)
        .then(data => JSON.parse(data))
        .then(data => this.attributes.result = result)
        .catch(error => console.log(error));
    }

    remove() {
        return this.send('DELETE', {email: this.attributes.email}, this.url)
          .then(data => this.attributes = {})
          .catch(error => console.log(error));
    }
  }



  window.Score = Score;
})();