(function () {


  const Model = window.Model;

  class User extends Model {

    constructor(attributes) {
      super(attributes);
    }

    get url() {
      return this.baseUrl + '/user';
    }

    save() {
      this.send('POST', this.attributes, this._url())
        .then(data => JSON.parse(data))
        .then(result => {
          this.attributes.id = result.id;
        })
        .catch(error => console.log(error));
    }

    remove() {
      this.send('DELETE', {id: this.attributes.id}, this.url)
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    fetch() {
      this.send('GET', {id: this.attributes.id}.this, url)
        .then(data => JSON.parse(data))
        .then(attrs => {
          this.attributes = attrs;
        })
        .catch(error => console.log(error));

      //todo написать загрузку юзера по имени и паролю
    }

    update() {
      this.send('PUT', this.attributes, this.url)
        .then(data => JSON.parse(data))
        .then(id => {
          this.attributes.id = id;
        })
        .catch(error => console.log(error));
    }

  }

  window.UserModel = User;


}());