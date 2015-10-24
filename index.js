var Request = require('./helpers/Request');
var Automation = require('./helpers/Automation');

var intervalAmount = 15000
var appId = 0;

console.log('Starting app.');
console.log('Getting latest Smoke Network index.');
Request.getLatestSmokeNetworkIndex(function(err, res) {
  var result = JSON.parse(res);
  // res is compared to a String with value null because it is what firebase will send when there is no data.
  if (res == 'null') {
    appId = 0;
  } else {
    appId = result.length;
  }
  // the weakness of this method of getting the latest index is that
  // indexes may clash compared to server-side ID delegation
  console.log('Smoke Network index for this device is: ', appId);
  Automation.automate(appId, intervalAmount);
});
