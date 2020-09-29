const fs = require('fs');
const fileFormatService = require('./fileFormat');
const readService = require('./read');

const copyFiles = (originFolder, destinationFolder, newExtension = null) => {
  readService.readFolderFiles(originFolder, (files) => {
    fs.mkdirSync(destinationFolder);

    files.forEach((file) => {
      const originFile = originFolder + file;
      let destinationFile = destinationFolder + file;

      if (newExtension) {
        destinationFile = fileFormatService.changeFileExtension(destinationFile, newExtension);
      }

      fs.copyFile(originFile, destinationFile, (err) => {
        if (err) throw err;
        console.log(file + ' was copied');
      });
    });
  });
};

exports.copyFiles = copyFiles;
