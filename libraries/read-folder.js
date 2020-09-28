'use strict';

const fs = require('fs');
const saveService = require('./save');

const folderPath = '../../bible-notes/src/resources/books/jsons/';

// fs.readdir(testFolder, (err, files) => {
//   files.forEach((...file) => {
//     console.log(file);
//   });
// });

function process(data) {
  var chapters = [];

  for (let i = 0; i < data.length; i++) {
    const e1 = data[i];

    var verses = [];

    for (let j = 0; j < e1.length; j++) {
      const e2 = e1[j];

      verses.push({
        verse: j + 1,
        title: '',
        text: e2,
      });
    }

    chapters.push({
      chapter: i + 1,
      verses: verses,
    });
  }

  return {
    id: '',
    chapters: chapters,
  };
}

fs.readdir(folderPath, (err, files) => {
  files.forEach((file) => {
    fs.readFile(folderPath + file, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const parsedData = JSON.parse(data);
      saveService.json(folderPath + 'backup/' + file, parsedData);

      const processData = process(parsedData);
      saveService.json(folderPath + file, processData);
    });
  });
});
