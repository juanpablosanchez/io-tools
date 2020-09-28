var readline = require('readline');
var fs = require('fs');

function save(name, data) {
  const stringifyData = JSON.stringify(data, null, 2);
  fs.writeFile(name, stringifyData, (error) => {
    if (error) throw error;
    console.log('Data written to file');
  });
}

var myInterface = readline.createInterface({
  input: fs.createReadStream('bible.txt'),
});

var lineX = -1
var lineno = 0;
var json = [];
myInterface.on('line', function (line) {
  lineno++;

  var l = line.trim();

  if(l) {
      json.push(l);
  }

  if (lineno % 100 === 0) {
    console.log('Line number ' + lineno);
  }
});


var myTimer = setInterval(function() {
    if (lineX === lineno) {
        console.log('line number ' + lineno);
        console.log('----- End');

        save('bible.json', json);

        clearInterval(myTimer);
        return;
    }

    lineX = lineno;
}, 5000);