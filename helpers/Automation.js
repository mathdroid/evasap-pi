// Automation.js
// index.js

var Smoke = require('./SmokePython');
var Request = require('./Request');

var Automation = exports;

var payload = {};
var result;

payload.values = [];
payload.timestamps = [];

Automation.automate = function() {
  setInterval(function() {
    Smoke.getSmoke(function(err, res) {
      // console.log(res);
      result = res;
      payload.latestValue = result.value;
      payload.latestTimestamp = result.timestamp;
      payload.values.push(result.value);
      payload.timestamps.push(result.timestamp);
      payload.latitude = -6.8758563;
      payload.longitude = 107.5833764;
      console.log(payload);
      // Request.sendSmokeData(payload);

    });
  }, 1000);
}
