const fs = require('fs');

const readFolderFiles = (folderPath, callback) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      throw err;
    }

    if (!files || !files.length || files.length <= 0) {
      throw new Error('files not found');
    }

    callback(files);
  });
};

const readJsonFile = (filePath, callback) => {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    const parsedData = JSON.parse(data);

    callback(parsedData);
  });
};

exports.readFolderFiles = readFolderFiles;
exports.readJsonFile = readJsonFile;
