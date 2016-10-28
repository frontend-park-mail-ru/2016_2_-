(function () {

  const Model = window.Model;


  class Session extends Model {

    constructor(user, attributes) {
      super(attributes);
      this.user = user;
      //this.data = attributes.data;
    }


    get url() {
      return (this.baseUrl + '/session');
    }

    logout() {
      this.send('DELETE', {}, this.url)
        .then(res => console.log(res))
        .catch(res => console.log(res));

    }


    is_authenticated() {
      if (this.id) {
        this.send('GET', null, this.url)
          .then(res => JSON.parse(res))
          .then(id => {
            return (id == this.id)
          });
      } else {
        return false;
      }
    }

    login() {
      return this.send('POST', this.user.attributes, this.url)
        .then(data => {
          console.log('JSON_parse');
          console.log(data);
          return JSON.parse(data);
        })
        .then(data => {
          this.id = data.userId;
        })
        .catch(response => console.log(response));
    }

    /* TODO сделать фунцкию создания пользователя, редактирования, удаления*/
  }


  window.SessionModel = Session;
})();
