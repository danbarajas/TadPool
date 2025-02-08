"use strict";

const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('sparkhacks.db', (err) => {
    if (err) throw err;
});

module.exports = db;