// Automation.js
// index.js

var async = require('async');

var Smoke = require('./SmokePython');
var Request = require('./Request');

var Automation = exports;

var payload = {};
var result;

payload.values = [];
payload.timestamps = [];

function updatePayload(newPayload, appId) {
  payload.appId = appId;
  payload.latestValue = Number(newPayload.value);
  payload.latestTimestamp = newPayload.timestamp;
  payload.values.push(payload.latestValue);
  payload.timestamps.push(payload.latestTimestamp);
}

Automation.automate = function(appId, intervalAmount) {
  var isSending = false;
  payload.latitude = -6.8738563 + Math.random()*0.01;
  payload.longitude = 107.5813764 + Math.random()*0.01;
  setInterval(function() {
    Smoke.getSmoke(function(err, res) {
      // console.log(res);
      result = res;
      updatePayload(result, appId);
      // console.log(payload);

      if (!isSending) {
        async.series([
          function(callback) {
            isSending = true;
            Request.sendSmokeData(appId, payload, function() {
              callback(null);
            });
          },

          function(callback) {
            console.log('Data has been sent.');
            isSending = false;
            callback(null);
          }

        ], function(err) {
          // console.log(err);
        });

      } else {
        console.log('Another payload is being sent.');
      }

      // Request.sendSmokeData(appId, payload);

    });
  }, intervalAmount);
}
