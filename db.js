/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://rachel:&pwd0@localhost/lunchly");

db.connect();

module.exports = db;
