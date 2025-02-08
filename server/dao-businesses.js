"use strict";

const db = require('./db');

exports.getAllBusinesses = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM small_businesses', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

exports.getEventByBusiness = (business) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM events WHERE list_of_attendees LIKE ?', [`%${business}%`], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}