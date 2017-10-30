const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo app v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Andres',
        age: 23
    }, {
        name: 'Leonardo',
        age: 23
    }, {
        name: 'Juanda',
        age: 28
    }]); 
});

// GET /users
// give users a name property and age prop.


app.listen(3000);
module.exports.app = app;

