/**
 * @fileoverview Database connection and export 
 */

const mysql = require('mysql');
const env = require('./server.config');

const pool = mysql.createPool({
    host: env.dbServer,
    port: env.dbPort,
    user: env.dbUser,
    password: env.dbPassword,
    database: env.dbUseSchema
});

module.exports = pool;
