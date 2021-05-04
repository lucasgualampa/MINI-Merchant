const config = require('../config/config');
const server = require('express').Router();
const axios = require('axios');
const fetch = require("node-fetch");

var cache = {};

/* GET home page. */
server.get("/", function (req, res, next) {
  // #swagger.ignore = true
  res.render("index", { title: "Express" });
});

server.get("/search", (req, res) => {
  /*
    #swagger.tags = ['search']
    #swagger.summary = 'return a json of the object searched'
    #swagger.description = 'Complete documentation of MELI API: https://api.mercadolibre.com/sites/MLA/search?q=iphone'
  */

  var { query, page, category } = req.query;
  console.log(req.query)

  !page && (page = 1);
  if (cache[query] && cache[query][page]) {
    console.log("entró al caché");
    return res.json(cache[query][page]);
  }
  var offset = (page - 1) * 30;

  if(query){
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=30&offset=${offset}`
    )
      .then((res) => res.json())
      .then((json) => {
        !cache[query] && (cache[query] = {});
        cache[query][page] = json;
        return res.status(200).json(json);
      })
      .catch((err)=>{
        return res.status(404).send(err);
      });
 
  }

  if(category){
    fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`)
    .then((res) => res.json())
    .then((cat) => {
      res.status(200).json(cat.results)
    })
    .catch((err) =>{
      res.status(404).send(err);
    });
  }

});

server.get('/categories', (req,res) => {
  // #swagger.ignore = true
  fetch(
    `https://api.mercadolibre.com/sites/MLA/categories`
  )
  .then((cat) => cat.json())
  .then((cat) => {res.json(cat)})
})


server.get("/test", (req, res) => {
  // #swagger.ignore = true
  res.json({ test: "OK" });
});

module.exports = server;