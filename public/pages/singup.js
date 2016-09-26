(function () {
    'use strict'

    function checkUserData(data) {
        return true;
    }

    function createSignUp() {
        let Form = window.Form;
        // находим элемент регистрации
        let signUpPage = document.querySelector('.js-signUp');

        // создаем форму входа
        let signUpForm = new Form({
            el: document.createElement('div'),
            data: {
                title: 'Регистрация kek',
                fields: [
                    {
                        name: 'почта',
                        type: 'email',
                        label: 'почта'
                    },

                    {
                        name: 'Логин',
                        type: 'text',
                        label: 'Логин'
                    },
                    {
                        name: 'Пароль',
                        type: 'password',
                        label: 'Пароль'
                    }
                ],
                controls: [
                    {
                        text: 'Зарегистрироваться',
                        attrs: {
                            type: 'submit'
                        }
                    }
                ]
            }
        });

        // вещаем обработчик нажатия
        signUpForm.on('submit', event => {
            event.preventDefault();
            let formData = signUpForm.getFormData();
            // валидицая
            if (checkUserData(formData)) {
                signUpForm.hidden = true;
                let mainElem = document.querySelector('.mainElem');
                mainElem.hidden = false;
            } else {
                // сообщения об ошибках
            }

        });

        signUpForm.hidden = false;
        signUpPage.appendChild(signUpForm.el);
    }

    // exports
    window.SIGN_UP = createSignUp();
})();