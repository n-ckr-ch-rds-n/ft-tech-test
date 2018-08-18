const ApiCall = require('../public/javascripts/apicall.js');
const request = require("request");

jest.mock('request');

let apicall = new ApiCall();

describe('#search', function() {
  it('calls the api', function() {
    apicall.search("brexit")
    expect(request).toHaveBeenCalled();
  })

  it('passes data to callback', function() {
    request.mockResolvedValue('data')
    apicall.search('brexit').then(function(data) {
      expect(data).toEqual('data')
    })
  })

  it('catches api errors', function() {
    request.mockImplementation(() => {throw 'error'});
    apicall.search('brexit').catch(function(error) {
      expect(error).toEqual('error')
    })
  })
})
