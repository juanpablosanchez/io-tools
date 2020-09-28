const fs = require('fs');

const json = (fileName, data) => {
  const stringifyData = JSON.stringify(data, null, 2);
  fs.writeFile(fileName, stringifyData, (error) => {
    if (error) throw error;
    console.log('Data written to "' + fileName + '" file');
  });
};

exports.json = json;
