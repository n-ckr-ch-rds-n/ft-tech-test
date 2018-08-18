var express = require('express');
var router = express.Router();
const ApiCall = require('../public/javascripts/apicall.js');
const apicall = new ApiCall();

router.get('/', function(req, res, next) {
  res.render('index', {
    articles: [],
    title: 'FT Search'
  });
});

router.post('/', function(req, res, next) {
  apicall.search(req.body.keyword).then((articles) => {
    res.render('index', {
      articles: articles,
      title: 'FT Search'
    });
  });
});

module.exports = router;
