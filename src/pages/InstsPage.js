import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Insts from "../components/insts-manager/Insts";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";
import useRequestMapping from "../hooks/useRequestMapping";
import { instsActions } from "../redux/Insts";

const InstsPage = () => {
  const [reloadFlag, setReloadFlag] = useState(false);
  const { allInsts } = useSelector((state) => state.insts);

  const requester = useRequestMapping();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllInsts = async () => {
      const allInsts = await requester("get-all-instruments");
      dispatch(instsActions.refresh(allInsts));
      setReloadFlag(false);
    };
    getAllInsts();
  }, [reloadFlag]);

  let isLoading = !allInsts.length;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ReloadFlagStore.Provider value={{ setReloadFlag }}>
      <Insts />
    </ReloadFlagStore.Provider>
  );
};

export default InstsPage;
