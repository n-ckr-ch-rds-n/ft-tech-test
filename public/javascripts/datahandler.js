module.exports.processArticle = (article) => {
  const item = {};

  item.title = article.title.title;
  item.url = article.location.uri;
  item.date = article.lifecycle.initialPublishDateTime.slice(0, 10);

  return item;
};
