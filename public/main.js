(function () {

    'use strict';

    let userData = {};

    function filter(str, rules = ['КЕК']) {
        var posA = 0;
        var posB = 0; // начало строки rules
        var result = "";
        while (posB !== -1) {
            posB = str.indexOf(rules, posA)
            console.log(posB);
            if (posB !== -1) {
                result = result + str.substring(posA, posB);
                for (var i = 0; i < str.length; i++) {
                    result = result + '*'; // добавим нужное количетсво звездочек
                }
                posA = posB + rules.length;
            }
            console.log(result);
        }
        result = result + str.substring(posA);

        return result;
        `//TODO: реализовать filter`;
    }

    function onLogin(form, block) {
        userData = {
            user: form.elements['user'].value,
            email: form.elements['email'].value
        };

        jsLogin.hidden = true;
        jsChat.hidden = false;

        if (userData.user) {
            userData.user = filter(userData.user);
            jsTitle.innerHTML = jsTitle.innerHTML.replace('%username%', userData.user);
        }

        subscribe();
    }

    function createMessage(opts, isMy = false) {
        let message = document.createElement('div');
        let email = document.createElement('div');

        message.classList.add('chat__message');
        email.classList.add('chat__email');

        if (isMy) {
            message.classList.add('chat__message_my');
        } else {
            message.style.backgroundColor = `#${technolibs.colorHash(opts.email || '')}`;
        }
        message.innerHTML = opts.message;
        email.innerHTML = opts.email;
        message.appendChild(email);


        return message;
    }

    function onChat(form) {
        let data = {
            message: form.elements['message'].value,
            email: userData.email
        };

        let result = technolibs.request('/api/messages', data);
        form.reset();
    }

    function renderChat(items) {
        jsMessages.innerHTML = '';
        items.forEach(item => {
            let message = createMessage(item, item.email === userData.email);
            jsMessages.appendChild(message);
        });
        jsMessages.scrollTop = jsMessages.scrollHeight;
    }

    function subscribe() {
        technolibs.onMessage(data => {
            renderChat(Object.keys(data).map(key => data[key]));
        });
    }

    function hello(text) {
        return 'Привет, ' + text;
    }

    function plural(n) {
        if (12 <= n && n <= 14)
            return (n + ' раз!');
        if (n % 10 === 2 || n % 10 === 3 || n % 10 === 4)
            return (n + ' раза!');
        return (n + ' раз!');
    }

    function onSubmit(form) {
        let data = {
            user: form.elements['user'].value,
            email: form.elements['email'].value
        };

        let result = request('/users', data);

        if (result === '100') {
            form.hidden = true;
            window.helloWorld.innerHTML = hello(data.user);
        }

        console.log(data, result);
    }

    if (typeof exports === 'object') {
        exports.hello = hello;
        exports.filter = filter;
        exports.plural = plural;
    } else {
        window.onLogin = onLogin;
        window.onChat = onChat
    }


})();