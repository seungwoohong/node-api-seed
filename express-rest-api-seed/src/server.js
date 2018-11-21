/**
 * @fileoverview Server runner
 */
'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const responseHeader = require('./middleware/response-setting');
const fs = require('fs');
const _api = __dirname + '/api/';
let routerModule = [];

app.use(bodyParser.json());
app.use(responseHeader());
app.use(bodyParser.urlencoded({ extended: false }));

fs.readdirSync(_api).forEach(path => {
    routerModule = routerModule.concat(require(_api + path));
});

routerModule.forEach(route => {
    app[route.method](route.url, route.handler);
});

module.exports = app;
