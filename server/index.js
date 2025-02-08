const cors = require('cors');
const express = require('express');

const userDao = require('./dao-users');
const eventsDao = require('./dao-events');
const businessesDao = require('./dao-businesses');
const organizersDao = require('./dao-organizers');

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

app.get('/events/organizer/:organizer', (req, res) => {
    eventsDao.getEventByOrganizer(req.params.organizer).then((events) => {
        res.json(events);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/events/date/:date', (req, res) => {
    eventsDao.getEventByDate(req.params.date).then((events) => {
        res.json(events);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/events/address/:address', (req, res) => {
    eventsDao.getEventByAddress(req.params.address).then((events) => {
        res.json(events);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/businesses', (req, res) => {
    businessesDao.getAllBusinesses().then((businesses) => {
        res.json(businesses);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/businesses/:business', (req, res) => {
    businessesDao.getEventByBusiness(req.params.business).then((events) => {
        res.json(events);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/organizers', (req, res) => {
    organizersDao.getAllOrganizers().then((organizers) => {
        res.json(organizers);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/random/organizers', (req, res) => {
    organizersDao.getAllOrganizers().then((organizers) => {
        const randomIndex = Math.floor(Math.random() * organizers.length);
        res.json(organizers[randomIndex]);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/random/businesses', (req, res) => {
    businessesDao.getAllBusinesses().then((businesses) => {
        const randomIndex = Math.floor(Math.random() * businesses.length);
        res.json(businesses[randomIndex]);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.get('/random/users', (req, res) => {
    userDao.getAllUsers().then((users) => {
        const randomIndex = Math.floor(Math.random() * users.length);
        res.json(users[randomIndex]);
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});