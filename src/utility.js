const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const shallowCompare = (newObj, prevObj) => {
  for (let key in newObj) {
    if (newObj[key] !== prevObj[key]) return true;
  }
  return false;
};

const assignHeight = (height, classes) => {
  switch (height) {
    case "xs":
      return classes.XSmall;
    case "s":
      return classes.Small;
    case "m":
      return classes.Medium;
    case "l":
      return classes.Large;
    case "xl":
      return classes.XLarge;
    default:
      return;
  }
};

const importAllImages = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
};

const createFormElement = (elType, type, placeholder, value, validation) => ({
  elType,
  elementConfig: {
    type,
    placeholder,
  },
  value,
  validation,
  valid: false,
  touched: false,
});

export {
  arraysEqual,
  shallowCompare,
  assignHeight,
  importAllImages,
  createFormElement,
};
