(function
  () {
  'use strict';

  const View = window.View;
  const Form = window.Form;
  const User = window.UserModel;
  const Session = window.SessionModel;

  function validate(data) {
    if (2 > data.user.length || data.user.length > 12) {
      return {name: 'user', result: false};
    }
    if (data.password.length < 3) {
      return {name: 'password', result: false};
    }
    return {result: true};
  }


  class SignupView extends View {
    constructor(options = {}) {
      super(options);
      this.class = 'js-signup';
      // '.${options.name}' || .js-login
      this._el = document.querySelector('.' + this.class);
      this.hide();
      this.options = options;
      // TODO: дописать реализацию

    }

    setRouter(router) {
      this.router = router;
      this.render(this.options);
    }

    render(options) {
      this._createComponents();
      this._initListeners();

    }

    _createComponents() {
      this._component = new Form({
        el: this._el,
        data: {
          class: this.class + '__formsignup',
          title: 'SignUp',
          fields: [
            {name: 'user', placeholder: 'enter username', type: 'text', required: 'true'},
            {name: 'password', placeholder: 'enter password', type: 'password', required: 'true'},
            {name: 'email', placeholder: 'enter email', type: 'email', required: 'true'}
          ],
          controls: [
            {
              text: 'signup',
              attrs: {
                type: 'submit',
                name: 'aaa'
              }
            },
            {
              text: 'singin',
              attrs: {
                type: 'button'
              }
            }
          ]
        }
      });
    }


    _initListeners() {
      this._component.on('submit', event => {
        event.preventDefault();
        let formData = this._component.getFormData();
        let dataCheck = validate(formData);
        if (dataCheck) {
          this.user = new User(dataCheck);
          this.user.save();
          //this.user.save(); пока нет java-серва, считаем что логин удался
          this.session = new Session(this.user);
          this.router.go('/game');
          /* if (this.session.login()) {
           this.router.go('/game');
           console.log("SignUp_Okay");
           } else {
           alert('не удалось зарегаться');
           }*/
        } else {
          console.log("SignUp_false");
        }
      });

      this._component.addEventListenerOnChild('click', this.class + '__formsignup__js-controls__singin', event => {
        event.preventDefault();
        this.router.go('/');
      });
    }

  }


  // export
  window.SignupView = SignupView;

})();
