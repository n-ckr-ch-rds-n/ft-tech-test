const request = require('request');
const datahandler = require('./datahandler.js');

require('dotenv').config();

module.exports = class ApiCall {
  constructor() {
    this._apikey = process.env.X_API_KEY;
  }

  search(keyword) {
  return new Promise((resolve, reject) => {
    const options = {
      body: { 'queryString': keyword,
      'resultContext': { 'aspects': [
          'title',
          'lifecycle',
          'location',
          'summary',
          'editorial'
        ] } },
      headers: { 'X-Api-Key': this._apikey },
      json: true,
      method: 'POST',
      url: 'http://api.ft.com/content/search/v1'
    };
    const articles = [];

    request(options, function (error, response, body) {
      if (error) {
        reject(new Error(error));
      }
      if (body.results[0].results != null) {
        body.results[0].results.forEach((article) => {
          articles.push(datahandler.processArticle(article));
        });
        resolve(articles);
      } else {
        resolve(articles);
      }
      });
    });
  }
};
