var request = require("request");
require('dotenv').config()

var options = { method: 'POST',
  url: 'http://api.ft.com/content/search/v1',
  json: true,
  headers:
   { 'X-Api-Key': process.env.X_API_KEY },
  body: {
  "queryString": "banks",
  "resultContext": {
    "aspects" :[ "title", "lifecycle", "location", "summary", "editorial"]
  }
 }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  body.results[0].results.forEach((article) => {
    console.log(article.title.title)
  })
  console.log(body.results[0].results[0].title.title);
});
