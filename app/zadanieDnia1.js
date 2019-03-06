//Twój kod

const express = require('express');
const srv = express();
let votes_yes = 0;
let votes_no = 0;
let votes_maybe = 0;

srv.use(express.static('./public/zadanieDnia'));

srv.get('/vote/:choice', (req, res) => {
    switch(req.params.choice) {
        case 'yes':
            votes_yes++;
            console.log('Received a "yes" vote');
            res.sendStatus(200);
            break;
        case 'no':
            votes_no++;
            console.log('Received a "no" vote');
            res.sendStatus(200);
            break;
        case 'maybe':
            votes_maybe++;
            console.log('Received a "maybe" vote');
            res.sendStatus(200);
            break;
        default:
            break;
    }
});

srv.get('/votes/check', (req, res) => {
    res.send(`<p style="display: block; margin: 0 auto; font-size: 2em; text-align: center;">So far we have:<br>${votes_yes} 'yes' votes<br>${votes_no} 'no' votes<br>${votes_maybe} 'maybe' votes</p>`);
});

srv.listen(3000, () => {
    console.log("server listening on 3000");
});