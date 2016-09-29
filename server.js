'use strict'
let express = require('express');
let parser = require('body-parser');
let app = express;
let technoDoc = require('techno-gendoc');
let path = require('path');

let technolibs = require('technolibs');


app.use('/', express.static('public', { maxAge: 1 }));
technoDoc.generate(require('./api'), 'public');

app.use(parser.json());
app.use('/libs', express.static('node_modules'));


app.get('/api/session', (req, res) => {
	res.send(technoDoc.mock(require('./api/scheme/Session')))
});

app.post('/api/messages', (req, res) => {
	technolibs.publish(req.body).then(body => res.json(req.body));
});

app.post('/users', (req, res) => {
	console.log(req.body);
    let email = req.body.email;
    if (!(email in counters)) {
        console.log(email, counters);
	    counters[email] = 0;
    }
    ++counters[email];
    console.log(counters[email]);
    res.send(counters[email] + '');
// TODO: вернуть количество обращений
});

/*
app.get('/api/messages', function (req, res) {
	res.send([
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message'))
	])
});*/

app.listen(process.env.PORT || 3001, () => {
	console.log(`App started on port ${process.env.PORT || 3001}`);
});
