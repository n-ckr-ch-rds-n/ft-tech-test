const request = require("request");
require('dotenv').config()

module.exports = class ApiCall {
  constructor(request = request) {
    this._request = request;
    this._apikey = process.env.X_API_KEY;
  }

  search(keyword) {
  return new Promise((resolve, reject) => {
    let options = {
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

    let articles = [];

    this._request(options, function (error, response, body) {
      if (error) {reject(new Error(error))};
      body.results[0].results.forEach((article) => {
        let item = {};
        item.title = article.title.title;
        item.url = article.location.uri;
        item.date = article.lifecycle.initialPublishDateTime.slice(0,10);
        articles.push(item)
      })
      resolve(articles);
      });
    });
  }

}
