"use strict"

const db = require('./db');

exports.getAllOrganizers = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM organizers', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}