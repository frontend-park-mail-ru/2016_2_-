(function () {
  'use strict';

  const View = window.View;
  const Form = window.Form;

  function validate(data) {
    if (3 > data.user.length || data.user.length > 12) {
      return {name: 'user', result: false};
    }
    if (data.password.length < 6) {
      return {name: 'password', result: false};
    }
    return {result: true};
  }

  class SignupView extends View {
    constructor(options = {}) {
      super(options);
      this._el = document.querySelector('.js-singup');
      console.log(this._el);
      this.hide();
      this.render(options);
      // TODO: дописать реализацию

    }

    render(options) {
      this._component = new Form({
        el: this._el,
        data: {
          title: 'Signup',
          fields: [
            {name: 'user', placeholder: 'enter username', type: 'text'},
            {name: 'email', placeholder: 'enter mail', type: 'email'},
            {name: 'password', placeholder: 'enter password', type: 'password'},
          ],
          controls: [
            {
              text: 'SignUp',
              attrs: {
                type: 'submit'
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
          console.log("Signup_Okay");
        } else {
          console.log("Signup_false");
        }
      });



      //this._el.appendChild(form._get());
    }

    /*init(options = {}) {
     // TODO: дописать реализацию
     }*/
  }


  // export
  window.SignupView = SignupView;

})();
