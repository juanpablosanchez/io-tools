const fs = require('fs');
const fileFormat = require('./fileFormat');

const copyFiles = (originFolder, destinationFolder, newExtension = null) => {
  fs.readdir(originFolder, (err, files) => {
    if (!files || files.length <= 0) {
      throw new Error('files not found');
    }

    fs.mkdirSync(destinationFolder);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const originFile = originFolder + file;
      let destinationFile = destinationFolder + file;

      if (newExtension) {
        destinationFile = fileFormat.changeFileExtension(destinationFile, newExtension);
      }

      fs.copyFile(originFile, destinationFile, (err) => {
        if (err) throw err;
        console.log(file + ' was copied');
      });
    }
  });
};

exports.copyFiles = copyFiles;
