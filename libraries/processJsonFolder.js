const processJsonFilesService = require('./processJsonFiles');
const readService = require('./read');

const overrideFolder = (folderPath, process) => {
  if (!folderPath) {
    throw new Error('Folder path is invalid');
  }

  if (!process) {
    throw new Error('Second parameter is invalid');
  }

  readService.readFolderFiles(folderPath, (files) => processJsonFilesService.overrideFiles(files, process));
};

exports.overrideFolder = overrideFolder;
