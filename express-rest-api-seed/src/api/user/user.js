'use strict';

const query = require('../../util/query').query;
const sql = require('./user.data');

module.exports = async (req, res, next) => {
    try {
        const rows = await query(sql.INSERT_USER);
        
        if (rows) {
            res.status(200).json({});
            return;
        }

        res.status(400).end();
    } catch(error) {
        return next(error);
    }
}
