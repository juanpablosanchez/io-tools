const fs = require('fs');
const readline = require('readline');
const saveService = require('./save');
const fileFormatService = require('./fileFormat');

let streamResources;

const readStreamToArray = (myInterface, fileKey) => {
  streamResources[fileKey] = {
    currentLineNumber: 0,
    json: [],
  };

  myInterface.on('line', function (line) {
    streamResources[fileKey].currentLineNumber++;

    var formatedLine = line.trim();

    if (formatedLine) {
      streamResources[fileKey].json.push(formatedLine);
    }

    if (streamResources[fileKey].currentLineNumber % 1 === 0) {
      console.log(fileKey + ' - Line number: ' + streamResources[fileKey].currentLineNumber);
    }
  });
};

const saveArrayToJson = (fileName, fileKey) => {
  let lineX = -1;

  var myTimer = setInterval(function () {
    if (lineX === streamResources[fileKey].currentLineNumber) {
      console.log('# ' + fileKey + ' - Total lines: ' + streamResources[fileKey].currentLineNumber);

      saveService.json(fileName, streamResources[fileKey].json);

      clearInterval(myTimer);
      return;
    }

    lineX = streamResources[fileKey].currentLineNumber;
  }, 300);
};

const processStreamToArrayJson = (filesPaths) => {
  if (!filesPaths || !filesPaths.length || filesPaths.length <= 0) {
    throw new Error('First parameter is not a list of files');
  }

  streamResources = {};

  filesPaths.forEach((filePath, index) => {
    const fileKey = 'file' + index;
    const fileName = fileFormatService.changeFileExtension(filePath, '.json');

    const myInterface = readline.createInterface({
      input: fs.createReadStream(filePath),
    });

    readStreamToArray(myInterface, fileKey);
    saveArrayToJson(fileName, fileKey);
  });
};

exports.processStreamToArrayJson = processStreamToArrayJson;
