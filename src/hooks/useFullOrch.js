import { useEffect, useState } from "react";
import useRequestMapping from "./useRequestMapping";

const useFullOrch = () => {
  const [orch, setOrch] = useState({});
  const orchGetter = useRequestMapping("get-orchestra");

  useEffect(() => {
    const getOrch = async () => {
      const reply = await orchGetter();
      setOrch({
        FL: reply.fluteDbs,
        OB: reply.oboeDbs,
        CL: reply.clarinetDbs,
        BSN: reply.bassoonDbs,
        HN: reply.hornDbs,
        TPT: reply.trumpetDbs,
        TBN: reply.tromboneDbs,
        TBA: reply.tubaDbs,
      });
    };

    getOrch();
  }, []);

  return orch;
};

export default useFullOrch;
