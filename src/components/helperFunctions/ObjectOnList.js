import DeepEqual from "./DeepEqual";

const ObjectOnList = (list, object) => {
  if (object === undefined || list.length === 0) {
    return false;
  }

  for (let j = 0; j < list.length; j++) {
    if (DeepEqual(list[j], object)) {
      return { index: j };
    }
  }
  return false;
};

export default ObjectOnList;
