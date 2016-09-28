(function () {
    'use strict';

    function hello (text) {
    return 'Привет, ' + text;
    }


    function plural (n) {
        switch(n) {
        case 0: return 'Здравствуй, дух';
        case 1: return 'Рады приветствовать на нашем курсе!';
        case 2: return 'Кликай дальше!! Еще осталось 13 раз(а)';
        case 13: return 'Кликай дальше!! Еще осталось 2 раз(а)';
        case 15: return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
        case 100: return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
        }
    }
    function filter(str) {
        let rules = window.rules;


        /*rules = rules.map(rule=>{
            return {
                regexp : new RegExp(`\\b${rule}\\b`,'g'),
                length: rule.length
            };
        });*/
        rules.forEach(rule=>{
            str = str.replace(rules, (new Array(rule.length+1)).join('*'))
        });
        return(str);
    }

    if (typeof exports === 'object') {
        exports.hello = hello;
        exports.plural = plural;
        exports.filter = filter;
    } else {
    //window.onSubmit = onSubmit;
    }

})();
