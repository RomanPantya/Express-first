const express = require('express');

const app = express();
app.get((req, res, next) => {
    console.log('========================== HI []]]]]]]]]]]]');
    next();
});

app.use(express.json());

const users = [];
const posts = [];

const guard = (req, res, next) => {
    if (!(req.query.password === 'sim-sim')) {
        
        res.status(403).end('How are you?');

        return;
    }

    next();
};

app.get('/test', guard, (req, res, next) => {
    next();
});

app.get('/ok', guard, (req, res) => {
    res.end('ok');
});

app.post('/test', (req, res) => {
    res.end('test');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res, next) => {
    users.push(req.body);

    return res.end('ok');
});

app.post('/posts', (req, res, next) => {
    posts.push(req.body);

    return res.end('ok');
});



app.listen(4000);
