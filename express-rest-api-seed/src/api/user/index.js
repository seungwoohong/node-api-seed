/**
 * @fileoverview Router setting
 */

'use strict';

const userHandler = require('./user'); 

const ROUTER = [
    {
        method: 'get',
        handler: userHandler,
        url: '/user'
    },
];

module.exports = ROUTER;
