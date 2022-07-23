const express = require('express');

const app = express();

app.use(express.json());

const people = [];
let count = 0;

app.post('/users',(req, res) => {

    const you = req.body;
    you.id = ++count;
    people.push(you);

    res.json(you);   

});

app.get('/users/:id', (req, res) => {
    const idUser = +req.params.id;
    const user = people.find(el => el.id === idUser);
    res.json(user || 'user not found');

});

app.delete('/users/:id', (req, res) => {
    const idUser = +req.params.id;
    let num = people.findIndex(el => el.id === idUser);
    people.splice(num, 1);
    res.status(204).end();
});


app.get('/users', (req, res) => {
    res.json(people);
});

















app.listen(4000);
