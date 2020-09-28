const fs = require('fs');
const saveService = require('./save');

const fileName = '1_corintios';
const extemsionFile = '.json';
const readExtemsionFile = '.json';

const folderPath = '../../bible-notes/src/resources/books/jsons/';

function process(data) {
  var reg = /^\d+$/;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].caps.length; j++) {
      const element = data[i].caps[j];

      for (let x = 0; x < element.data.length; x++) {
        const element2 = element.data[x];

        if (!(element2 + '').startsWith(x + 1 + '')) {
          console.log(element2);
          return data;
        }
      }
    }
  }

  return data;
}

fs.readFile(folderPath + fileName + readExtemsionFile, (err, data) => {
  if (err) throw err;

  const parsedData = JSON.parse(data);
  console.log(parsedData);
  saveService.json(folderPath + fileName + '-backup' + extemsionFile, parsedData);

  const processData = process(parsedData);
  saveService.json(folderPath + fileName + extemsionFile, processData);
});
