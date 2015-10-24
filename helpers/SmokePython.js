// python-caller.js

var SmokePython = exports;
var PythonShell = require('python-shell');
var options = {
  mode: 'text',
  pythonPath: '/usr/bin/python2',
  // pythonOptions: ['-u'],
  // scriptPath: 'path/to/my/scripts',
  // args: ['value1', 'value2', 'value3']
};



SmokePython.getSmoke = function(callback) {
  var smokeResult = {}
  PythonShell.run('smoke.py', options, function (err, results) {
    if (err) throw err;
    smokeResult.value = results[0];
    smokeResult.timestamp = Date.now();
    callback(err, smokeResult);
  });

}
