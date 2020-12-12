const config = require('../config/config');
const server = require('express').Router();

//const url = `https://api.mercadolibre.com/sites/MLA/search?q={query}`;

server.get('/search', (req, res) => {

    
    return res.send();
});

module.exports = server;