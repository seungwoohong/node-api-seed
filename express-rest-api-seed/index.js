'use strict';

const server = require('./src/server');
const CONFIG = require('./src/config/server.config');

server.listen(CONFIG.port, () => {
   console.log(`App listening on port ${CONFIG.port}!!`);
});
