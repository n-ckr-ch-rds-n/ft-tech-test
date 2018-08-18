const requestmodule = require("request");
const datahandler = require("./datahandler.js")
require('dotenv').config()

module.exports = class ApiCall {
  constructor(request = requestmodule) {
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
        articles.push(datahandler.processArticle(article))
      })
      resolve(articles);
      });
    });
  }

}
