const fs = require('fs');

const folderPath = '../../bible-notes/src/resources/books/';

fs.readdir(folderPath + 'jsons/', (err, files) => {
  // destination.txt will be created or overwritten by default.
  for (let i = 0; i < files.length; i++) {
    var file = files[i];

    var [ fileName, extension ] = file.split('.');

    fs.copyFile(folderPath + 'jsons/' + file, folderPath + fileName + '.ts', (err) => {
      if (err) throw err;
      console.log(fileName +' was copied');
    });
  }
});
