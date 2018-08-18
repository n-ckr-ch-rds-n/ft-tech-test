module.exports.processArticle = function(article) {
  let item = {};
  item.title = article.title.title;
  item.url = article.location.uri;
  item.date = article.lifecycle.initialPublishDateTime.slice(0,10);
  return item;
}
