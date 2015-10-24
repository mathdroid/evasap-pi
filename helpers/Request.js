// Request.js
var request = require('request');
var Request = exports;

Request.baseApiUrl = 'https://bantu-asap.firebaseio.com/';
Request.smokeDataUrl = 'smoke-network/';
Request.smokeUrl = 'smoke-network.json';

Request.sendSmokeData = function(appId, data, callback) {
  var payload = JSON.stringify(data);
  var header = {
    'Content-Type': 'application/json'
  };

  var options = {
    url: Request.baseApiUrl + Request.smokeDataUrl + appId + '.json',
    method: 'PUT',
    headers: header,
    body: payload
  }

  request(options, function(error, response, body) {
    console.log(body);
    callback(null);
    // var dataResult = JSON.parse(body);
    // console.log(dataResult);
  });

}

Request.getLatestSmokeNetworkIndex = function(callback) {
  var options = {
    url: Request.baseApiUrl + Request.smokeUrl,
    method: 'GET'
  }
  request(options, function(error, response, body) {
    callback(error, body);
  });
}
