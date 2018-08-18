const datahandler = require('../public/javascripts/datahandler.js')

describe('processArticle', function() {
    it('fillets the appropriate data from an object', function() {
      let article = {
        'title': {'title': 'headline'},
        'location': {'uri': 'www.uri.com'},
        'lifecycle': {'initialPublishDateTime': '2018-07-06OTHERDATEINFO'}
      };
      expect(datahandler.processArticle(article)).toEqual({
        'title': 'headline',
        'url': 'www.uri.com',
        'date': '2018-07-06'
      })
    })
})
