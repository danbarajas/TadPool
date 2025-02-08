const cors = require('cors');
const express = require('express');

const userDao = require('./dao-users');
const eventsDao = require('./dao-events');

const app = new express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/users', (req, res) => {
    userDao.getAllUsers().then((users) => {
        res.json(users);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
    )});

    app.get('/events', (req, res) => {
        eventsDao.getAllEvents().then((events) => {
            res.json(events);
        }).catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
    });

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});