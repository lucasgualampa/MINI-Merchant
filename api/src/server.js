const express = require("express");
const server = express();
const cors = require("cors");
////////////////
// set routes //
////////////////
const routes = require('./routes/index');
/////////////////////
// set middlewares //
/////////////////////
server.use(cors());
server.use('/', routes);
////////////////////////////
// Error catching endware //
////////////////////////////
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
////////////////////
// DECLARING PORT //
////////////////////
server.listen(3001);
console.log("Express levanto la api en el puerto 3001");