(function () {
  'use strict';

  const View = window.View;
  const Form = window.Form;

  function validate(data) {
    if (2 > data.user.length || data.user.length > 12) {
      return {name: 'user', result: false};
    }
    if (data.password.length < 3) {
      return {name: 'password', result: false};
    }
    return {result: true};
  }


  class LoginView extends View {
    constructor(options = {}) {
      super(options);
      this._el = document.querySelector('.js-login');
      console.log(this._el);
      this.hide();
      this.options = options;
      //this.render(options);
      // TODO: дописать реализацию

    }

    setRouter(router) {
      this.router = router;
      this.render(this.options);
    }

    clickOnSignUp() {
      this.router.go('/signup');
    }

    render(options) {


      this._component = new Form({
        el: this._el,
        data: {
          class: 'formLogin',
          title: 'Login',
          fields: [
            {name: 'user', placeholder: 'enter mail', type: 'text'},
            {name: 'password', placeholder: 'enter password', type: 'password'},
          ],
          controls: [
            {
              text: 'SignIn',
              attrs: {
                type: 'submit'
              }
            },
            {
              text: 'SignUp',
              attrs: {
                type: 'button',
                onclick: 'this.clickOnSignUp.bind(this)'
              }
            }
          ]
        }
      });


      this._component.on('submit', event => {
        event.preventDefault();
        let formData = this._component.getFormData();
        let dataCheck = validate(formData);
        if (dataCheck.result === true) {
          this.router.go('/game');
          console.log("Login_Okay");
        } else {
          console.log("Login_false");
        }
      });


      //this._el.appendChild(form._get());
    }

    /*init(options = {}) {
     // TODO: дописать реализацию
     }*/
  }


  // export
  window.LoginView = LoginView;

})();
