const ObjectToListHelper = (object, currentList, setListFunction) => {
  let tempList = currentList;

  console.log(tempList);
  tempList = tempList.filter((instr) => instr !== object);

  if (tempList.length === currentList.length) {
    setListFunction((previous) => [...previous, object]);
  } else {
    setListFunction(tempList);
  }
};

export default ObjectToListHelper;
