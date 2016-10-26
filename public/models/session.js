(function () {

  const Model = window.Model;


  class Session extends Model {

    constructor(attributes) {
      super(attributes);
      //this.data = attributes.data;
    }


    url() {

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
            return(id == this.id)
          });
      } else {
        return false;
      }
    }

    login() {
      const method = 'POST';
      let result = false;
      this.send(method, this.user.attributes, baseUrl() + '/session')
        .then((response => JSON.parse(response)))
        .then(data => {
          this.id = data.id;
          console.log(data);
          result = true;
        })
        .catch(response => console.log(response));
      //return result;
      return true;
    }

    /* TODO сделать фунцкию создания пользователя, редактирования, удаления*/

  }


  window.SessionModel = Session;
})();
