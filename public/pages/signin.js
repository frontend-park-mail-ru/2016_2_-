'use strict';

function validate(data) {
    if (3 > data.user.length || data.user.length > 12) {
        return {name: 'user', result: false};
    }
    if (data.password.length < 6) {
        return {name: 'password', result: false};
    }
    return {result: true};
}

function clickOnSignUp() {
    let signInPage = document.querySelector('.js-login');
    signInPage.hidden = true;
    document.querySelector('.mainElem').hidden = true;
    window.signUp();
}

function createSignIn() {
    let Form = window.Form;
    // находим элемент входа
    let signInPage = document.querySelector('.js-login');

    // создаем форму входа
    let signInForm = new Form({
        el: document.createElement('div'),
        data: {
            title: 'Вход',
            fields: [
                {
                    name: 'user',
                    type: 'text',
                    label: 'Логин'
                },
                {
                    name: 'password',
                    type: 'password',
                    label: 'Пароль'
                }
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
        let dataCheck = validate(formData);
        // валидицая
        if (dataCheck.result === true) {
            // скрываем форму логина
            signInPage.hidden = true;
            let mainElem = document.querySelector('.mainElem');
            // показываем основную страницу
            mainElem.hidden = false;
            console.log("Login_Okay");
        } else {

            console.log("Login_false");
            // сообщения об ошибках
        }
    });


    signInPage.hidden = false;
    signInPage.appendChild(signInForm.el);
}

(function () {
    // тестовый вариант

    //


    // exports
    window.signIn = createSignIn;
})();

