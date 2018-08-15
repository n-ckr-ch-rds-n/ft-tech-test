var request = require("request");
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

    var titles = [];

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      body.results[0].results.forEach((article) => {
        titles.push(article.title.title)
      })
      resolve(titles);
      });
    });
  }

}
