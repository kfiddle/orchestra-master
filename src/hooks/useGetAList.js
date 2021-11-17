import { useEffect, useState } from "react";

import GetAList from "../components/helperFunctions/GetAList";

const useGetAList = (whichList) => {
    const [ourList, setOurList] = useState([]);

  useEffect(() => {
    const getTheList = async () => {
      const allItems = await GetAList(whichList);
      setOurList(allItems);
    };

    getTheList();
  }, []);

    return ourList;
};

export default useGetAList;
