const express = require("express");
const server = express();
const cors = require("cors");
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
////////////////
// set routes //
////////////////
const routes = require('./src/routes/index');
/////////////////////
// set middlewares //
/////////////////////
server.use(bodyParser.json());
server.use(cors());
server.use('/', routes);
server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
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