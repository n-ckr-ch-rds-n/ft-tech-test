var express = require('express');
var router = express.Router();
const ApiCall = require('../public/javascripts/apicall.js')
const apicall = new ApiCall();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'FT Search' });
});

router.post('/', function(req, res, next) {
  apicall.search(req.body.keyword).then((articles) => {
    res.render('index', { title: 'FT Search', articles: articles });
  })
})

module.exports = router;
