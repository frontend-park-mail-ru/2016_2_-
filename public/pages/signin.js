'use strict'

function validate(data) {
    return true;
}

function clickOnSignUp()
{
    let signInPage = document.querySelector('.js-login');
    signInPage.hidden = true;
    document.querySelector('.mainElem').hidden = true;
   // alert(123);
    window.SIGN_UP();
}

function createSignIn() {
    let Form = window.Form;
    // находим элемент входа
    let signInPage = document.querySelector('.js-login');

    // создаем форму входа
    let signInForm = new Form({
        el: document.createElement('div'),
        data: {
            title: 'Вход kek',
            fields: [
                {
                    name: 'Логин',
                    type: 'text',
                    placeholder: "azaza",
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
                    text: 'SignIn',
                    attrs: {
                        type: 'submit'
                        //onclick: "document.querySelector('.js-login').hidden = true"
                    }
                },
                {
                    text: 'SignUp',
                    attrs: {
                        type: 'click',
                        onclick: "clickOnSignUp()"
                    }
                }
            ]
        }
    });

    // вещаем обработчик submit
    signInForm.on('submit', event => {
        event.preventDefault();
        let formData = signInForm.getFormData();
        // валидицая
        if (validate(formData)) {
            signInPage.hidden = true;
            let mainElem = document.querySelector('.mainElem');
            mainElem.hidden = false;
            console.log("Login_Okay");
        } else {
            console.log("Login_false");
            // сообщения об ошибках
        }
    });

   /* signInForm.on('click', event => {
        //event.preventDefault();
        console.log("ON_CLICL");
    });*/


    signInPage.hidden = false;
    signInPage.appendChild(signInForm.el);
}

(function () {
    // тестовый вариант

    //


    // exports
    window.SIGN_IN = createSignIn;
})();

