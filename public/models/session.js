(function () {

  const Model = window.Model;


  class Session extends Model {

    constructor(user, attributes) {
      super(attributes);
      this.user = user;
      //this.data = attributes.data;
    }


    url() {
      return this.baseUrl() + '/session';
    }

    logout() {
      this.send('DELETE', {}, baseUrl() + '/session')
        .then(res => console.log(res))
        .catch(res => console.log(res));

    }


    is_authenticated() {
      if (this.id) {
        this.send('GET', {id: this.id}, baseUrl() + '/session')
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
        .then((response => JSON.parse(response)))
        .then(data => {
          this.id = data.id;
        })
        .catch(response => console.log(response));
    }

    /* TODO сделать фунцкию создания пользователя, редактирования, удаления*/
  }


  window.SessionModel = Session;
})();
