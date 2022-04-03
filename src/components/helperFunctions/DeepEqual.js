const DeepEqual = (object1, object2) => {
  if (object1 == undefined || object2 == undefined) {
    return null;
  }
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  let flag = true;

  for (let key of object1Keys) {
    if (!object2Keys.includes(key) || object2[key] !== object1[key]) {
      flag = false;
    }
  }
  return flag;
};

export default DeepEqual;
