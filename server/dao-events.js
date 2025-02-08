"use strict";

const db = require('./db');

exports.getAllEvents = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM events', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

exports.getEventByOrganizer = (organizer) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM events WHERE organizer LIKE ?', [organizer], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

exports.getEventByDate = (date) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM events WHERE date LIKE ?', [date], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

exports.getEventByAddress = (address) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM events WHERE address LIKE ?', [address], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}