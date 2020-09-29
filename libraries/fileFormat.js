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

  if (!newExtension) {
    throw new Error('invalid extension');
  }

  const splitedFile = (fileName + '').split('.');
  splitedFile[splitedFile.length - 2] += suffix;

  return splitedFile.join('.');
};


exports.changeFileExtension = changeFileExtension;
exports.addSuffix = addSuffix;
