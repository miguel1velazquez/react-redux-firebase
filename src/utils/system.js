const tmp = require('tmp');

// Dict
export const OS = {
  DARWIN: 'darwin',
  WIN: 'win32'
};

export const isUNIX = () => {
  return checkOS() === OS.DARWIN;
};
export const isWin = () => {
  return checkOS() === OS.WIN;
};
export const isMac = () => {};

export const checkOS = () => {
  const osvar = process.platform;
  if (osvar === OS.DARWIN) {
    return OS.DARWIN;
  }
  if (osvar === OS.WIN) {
    return OS.WIN;
  }
  return OS.DARWIN;
};

export const getTempFolder = async () => {
  const ret = await new Promise(resolve => {
    tmp.dir((err, path) => {
      if (err) {
        resolve(null);
      }
      resolve(path);
    });
  });
  return ret;
};