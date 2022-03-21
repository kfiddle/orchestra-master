const ObjectToListHelper = (object, currentList, setListFunction) => {
  let tempList = currentList;
  
  tempList = tempList.filter((element) => element !== object);

  if (tempList.length === currentList.length) {
    setListFunction((previous) => [...previous, object]);
  } else {
    setListFunction(tempList);
  }
};

export default ObjectToListHelper;
