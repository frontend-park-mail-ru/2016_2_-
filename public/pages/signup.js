'use strict'

function checkUserData(data) {
    return true;
}

function createSignUp() {
    let Form = window.Form;
    // находим элемент входа
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

    // вещаем обработчик submit
    signUpForm.on('submit', event => {
        event.preventDefault();
        let formData = signUpForm.getFormData();
        // валидицая
        if (checkUserData(formData)) {
            signUpPage.hidden = true;
            let mainElem = document.querySelector('.mainElem');
            mainElem.hidden = false;
            console.log("Registration_Okay");
        } else {
            console.log("Registration_false");
            // сообщения об ошибках
        }
    });

    /* signInForm.on('click', event => {
     //event.preventDefault();
     console.log("ON_CLICL");
     });*/


    signUpPage.hidden = false;
    signUpPage.appendChild(signUpForm.el);
}

(function () {
    //exports
    window.SIGN_UP = createSignUp;
})();/**
 * Created by valera on 29.09.16.
 */
