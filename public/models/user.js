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
      return this.send('POST', this.attributes, this.url)
        .then(data => JSON.parse(data))
        .then(data => {
          this.attributes.id = data.id;
          console.log(this);
          console.log('aaa'); //mbotteam
        })
        .catch(error => console.log(error));
    }

    remove() {
      this.send('DELETE', {id: this.attributes.id}, this.url)
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    fetch() {
      let result = false;
      this.send('GET', null, this.url + '?id=' + this.attributes.id)
        .then(data => JSON.parse(data))
        .then(attrs => {
          this.attributes = attrs;
          result = true;
        })
        .catch(error => console.log(error));
      return result;
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