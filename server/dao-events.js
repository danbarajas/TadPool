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
        db.all('SELECT * FROM events WHERE organizer = ?', [organizer], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}