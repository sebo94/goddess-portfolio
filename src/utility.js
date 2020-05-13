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

const assignHeight = (height) => {
  switch (height) {
    case "xs":
      return "element-item-xs";
    case "x":
      return "element-item-s";
    case "m":
      return "element-item-m";
    case "l":
      return "element-item-l";
    case "xl":
      return "element-item-xl";
    default:
      return;
  }
};

export { arraysEqual, shallowCompare, assignHeight };
