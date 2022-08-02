import Insts from "../components/insts-manager/Insts";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import useGetAList2 from "../hooks/useGetAList2";

const InstsPage = () => {
  let allInstruments = useGetAList2("get-all-instruments");

  let isLoading = allInstruments.length < 1;

  return isLoading ? <LoadingSpinner /> : <Insts insts={allInstruments} />;
};

export default InstsPage;
