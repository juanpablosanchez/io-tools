const fs = require('fs');
const readline = require('readline');
const saveService = require('./save');

var myInterface = readline.createInterface({
  input: fs.createReadStream('bible.txt'),
});

var lineX = -1;
var lineno = 0;
var json = [];
myInterface.on('line', function (line) {
  lineno++;

  var l = line.trim();

  if (l) {
    json.push(l);
  }

  if (lineno % 100 === 0) {
    console.log('Line number ' + lineno);
  }
});

var myTimer = setInterval(function () {
  if (lineX === lineno) {
    console.log('line number ' + lineno);
    console.log('----- End');

    saveService.json('bible.json', json);

    clearInterval(myTimer);
    return;
  }

  lineX = lineno;
}, 3000);
