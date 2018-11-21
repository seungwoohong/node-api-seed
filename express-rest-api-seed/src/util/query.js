/**
 * @fileoverview Wrapper for mysql query method
 */

const pool = require('../config/database.config');

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            
            resolve(results);
        });
    });
}

module.exports = { query };
