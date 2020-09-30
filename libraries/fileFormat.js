const getFileName = (filePath) => {
  const splitedPath = filePath.split('/');
  const fileName = splitedPath[splitedPath.length - 1];

  return fileName;
}

const changeFileExtension = (fileName, newExtension) => {
  if (!fileName) {
    throw new Error('invalid format file name');
  }

  if (!newExtension) {
    throw new Error('invalid extension');
  }

  const splitedFile = (fileName + '').split('.');
  splitedFile[splitedFile.length - 1] = newExtension;

  return splitedFile.join('.');
};

const addSuffix = (fileName, suffix) => {
  if (!fileName) {
    throw new Error('invalid format file name');
  }

  if (!suffix) {
    throw new Error('invalid extension');
  }

  const splitedFile = (fileName + '').split('.');
  splitedFile[splitedFile.length - 2] += suffix;

  return splitedFile.join('.');
};

exports.getFileName = getFileName;
exports.changeFileExtension = changeFileExtension;
exports.addSuffix = addSuffix;
