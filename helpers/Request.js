// Request.js
var request = require('request');
var async = require('async');
var Request = exports;

Request.baseApiUrl = 'https://bantu-asap.firebaseio.com/';
Request.smokeDataUrl = 'smoke-network/1.json';

// TODO: Finish this
Request.sendSmokeData = function(data) {
  var payload = JSON.stringify(data);
  var header = {
    'Content-Type': 'application/json'
  };
  var options = {
    url: Request.baseApiUrl + Request.smokeDataUrl,
    method: 'PUT',
    headers: header,
    body: payload
  }
  async.series([function(callback) {
    request(options, function(error, response, body) {
      console.log(response);
      callback(null);
      // var dataResult = JSON.parse(body);
      // console.log(dataResult);
    });
  },
  ], function(err, data) {

  });


}
