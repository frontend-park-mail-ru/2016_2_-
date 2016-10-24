(function () {


  const Model = window.Model;

  class User extends Model {

    constructor(attributes) {
      super(attributes);
    }

  }

  window.UserModel = User;

}());