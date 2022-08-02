import { useState } from "react";

import Insts from "../components/insts-manager/Insts";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";

const InstsPage = () => {
  const [reloadFlag, setReloadFlag] = useState(false);

  let allInstruments = useGetAList2(
    "get-all-instruments",
    reloadFlag,
    setReloadFlag
  );

  let isLoading = allInstruments.length < 1;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ReloadFlagStore.Provider value={{ setReloadFlag }}>
      <Insts insts={allInstruments} />
    </ReloadFlagStore.Provider>
  );
};

export default InstsPage;
