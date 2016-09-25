(function () {
'use strict';
let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/main').filter;
let plural = require('./public/main').plural;


assert.equal(hello('Test'), 'Привет, Test');

//assert.equal(filter('azazaKEKazaza'), 'azaza***azaza');


assert.equal(plural(0), "0 раз!" );
assert.equal(plural(1), "1 раз!" );
assert.equal(plural(2), "2 раза!" );
assert.equal(plural(13), "13 раз!" );



//TODO: Кейсы для функции filter
// assert.equal(filter('КЕК'), '***');
})