const ApiCall = require('../public/javascripts/apicall.js')

let mockRequest = jest.fn();

let apicall = new ApiCall(mockRequest);

describe('#search', function() {
  it('makes an api request', function() {
    apicall.search("brexit")
    expect(mockRequest).toHaveBeenCalled();
  })
})
