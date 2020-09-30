// copy

const copyService = require('./libraries/copy');

const copyServiceExample = () => {
  copyService.copyFiles('./libraries/', './lib/', 'ts');
};

// processJsonFiles

const processJsonFilesService = require('./libraries/processJsonFiles');

const processJsonFilesServiceExample = () => {
  processJsonFilesService.overrideFiles(['./example/file.json'], (json) => {
    for (let i = 0; i < json.data.length; i++) {
      const element = json.data[i];

      json['data' + element] = element;
    }

    return json;
  });
};

// processJsonFolder

const processJsonFolderService = require('./libraries/processJsonFolder');

const processJsonFolderServiceExample = () => {
  processJsonFolderService.overrideFolder('./example/', (json) => {
    for (let i = 0; i < json.data.length; i++) {
      const element = json.data[i];

      json['data' + element] = element;
    }

    return json;
  });
};

// processStreamFiles

const processStreamFilesService = require('./libraries/processStreamFiles');

const processStreamFilesServiceExample = () => {
  processStreamFilesService.processStreamToArrayJson(['./example/stream.txt', './example/stream copy.txt']);
};

// copyServiceExample();
// processJsonFilesServiceExample();
// processJsonFolderServiceExample();
processStreamFilesServiceExample();
