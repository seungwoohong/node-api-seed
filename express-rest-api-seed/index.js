/**
 * @fileoverview Server runner
 */
'use strict';

const express = require('express');
const app = express();
const bodyParser = requier('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function() {
   console.log('App listening on port 3000!!');
});
