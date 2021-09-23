

const InstrumentToListHelper = (instrument, currentList, setListFunction) => {
    let tempList = currentList;
    tempList = tempList.filter((instr) => instr !== instrument);
  
    if (tempList.length === currentList.length) {
      setListFunction((previous) => [...previous, instrument]);
    } else {
      setListFunction(tempList);
    }
  };
  
  export default InstrumentToListHelper;
  