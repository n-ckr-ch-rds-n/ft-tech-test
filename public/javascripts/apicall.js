var request = require("request");
var chunker = require("./chunkdata.js")
require('dotenv').config()

module.exports = class ApiCall {
  constructor() {
    this._apikey = process.env.X_API_KEY
  }

  search(keyword) {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'POST',
      url: 'http://api.ft.com/content/search/v1',
      json: true,
      headers: { 'X-Api-Key': this._apikey },
      body: {
      "queryString": keyword,
      "resultContext": {
        "aspects" :[ "title", "lifecycle", "location", "summary", "editorial"]}
      }
    };

    var articles = [];

    request(options, function (error, response, body) {
      if (error) {reject(new Error(error))};
      body.results[0].results.forEach((article) => {
        var item = {};
        item.title = article.title.title;
        item.url = article.location.uri;
        item.date = article.lifecycle.initialPublishDateTime.slice(0,10);
        articles.push(item)
      })
      resolve(chunker.chunkdata(articles, 50));
      });
    });
  }

}
