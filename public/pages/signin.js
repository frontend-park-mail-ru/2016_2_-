'use strict'
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
                    text: 'Войти',
                    attrs: {
                        type: 'submit'
                    }
                },
                {
                    text: 'Зарегестрироваться',
                    attrs: {
                        type: 'submit'
                    }
                }
            ]
        }
    });

    // вещаем обработчик нажатия
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
    signInPage.hidden = false;
    signInPage.appendChild(signInForm.el);
}

(function () {
    // тестовый вариант
    function validate(data) {
        return true;
    }

    //


    // exports
    window.SIGN_IN = createSignIn;
})();

