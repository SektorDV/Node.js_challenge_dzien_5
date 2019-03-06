//Twój kod

const express = require('express');
const app = express();

app.get('/:num1/:num2', (req, res) => {
    let result = Number(req.params.num1) + Number(req.params.num2);
    res.send(`Wynik: ${result}`);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})