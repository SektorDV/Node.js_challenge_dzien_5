//Twój kod

const express = require('express');
const srv = express();

let name = '';

srv.get('/name/set/:name', (req, res) =>{
    name = req.params.name;
    res.send('OK. Name set.');
});

srv.get('/name/show', (req, res) => {
    res.send(`Name is ${name==''?'not set':name}`);
});

srv.get('/name/check', (req, res) => {
    res.send(`Name is ${name==''?'not set':'set'}`);
});

srv.listen(3000, () => {
    console.log('Listening on 3000');
})
