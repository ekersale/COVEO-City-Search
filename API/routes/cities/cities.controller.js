var express = require('express');
var router = express.Router();
var cities = require("../../models/cities/search.model");

/* GET home page. */
router.get('/suggestions', function(req, res, next) {
  cities.search(req.query.q, 
                req.query.latitude, 
                req.query.longitude, 
                function(searchRes)
                {
                  res.send(searchRes);
                });
});


module.exports = router;
