(function () {


  const Model = window.Model;

  class User extends Model {

    constructor(attributes) {
      super(attributes);
    }

    fetch() {
      //todo написать загрузку юзера по имени и паролю
    }

  }

  window.UserModel = User;

}());