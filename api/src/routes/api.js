const config = require('../config/config');
const server = require('express').Router();
const axios = require('axios');

//const url = `https://api.mercadolibre.com/sites/MLA/search?q={query}`;

//Razonamiento : 
//➡️ Hacer la ruta 
//➡️ llamar a la api con fetch o axios 
//➡️ el dato lo guardo en un array de objetos(cache)
//➡️ agrego una condición al comienzo de si se encuentra la propiedad en el array muestro el dato, sino hago el llamado a la api.

// create an object so i dont have to call api twice for the same search
var cache = {};

server.get('/search', (req, res) => {
    //req.params contains route parameters (in the path portion of the URL),
    //and req.query contains the URL query parameters (after the ? in the URL).
    let searchQuery = req.query.q;

    if (cache.hasOwnProperty(searchQuery)) {
        return res.send(cache[searchQuery]);
    } else {
        axios.get(config.apiMercadoLibre + `/sites/MLA/search?q=${searchQuery}`)
            .then(data => data.json())
            .then(data => {
                // Code for handling the response 
                // the attribute .results is from the documentation of ML api
                let products = data.results.map(product => {
                    return {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        total_price: product.price,
                        currency_id: product.currency_id,
                        available_quantity: product.available_quantity,
                        thumbnail: product.thumbnail,
                        condition: product.condition,
                    }
                });

            cache[searchQuery] = products;
            res.send(products);

            })
            .catch(error => {
                // Code for handling the error 
                console.log(error);
                res.status(404).send("Error");
            });
    }
});

module.exports = server;