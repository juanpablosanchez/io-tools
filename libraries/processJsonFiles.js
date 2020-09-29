const fs = require('fs');
const saveService = require('./save');
const fileFormatService = require('./fileFormat');
const readService = require('./read');

const processFile = (filePath, process) => {
  readService.readJsonFile(filePath, (data) => {
    const backupFileName = fileFormatService.addSuffix(filePath, '-backup');

    saveService.json(backupFileName, data);

    const processedData = process(data);
    saveService.json(filePath, processedData);

    console.log(filePath + ' was processed');
  });
};

const overrideFiles = (filesPaths, process) => {
  if (!filesPaths || !filesPaths.length || filesPaths.length <= 0) {
    throw new Error('First parameter is not a list of files');
  }

  if (!process) {
    throw new Error('Second parameter is invalid');
  }

  filesPaths.forEach((filePath) => processFile(filePath, process));
};

exports.overrideFiles = overrideFiles;
