/**
 * @fileoverview Response header configuration
 */

const configs = {
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': true
};

module.exports = () => {
    return (req, res, next) => {
        let header = req.header;
        let origin = header.origin || header.host;
        
        if (origin) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        Object.keys(configs).forEach(key => {
            res.setHeader(key, configs[key]);
        });

        next();
    }    
}
