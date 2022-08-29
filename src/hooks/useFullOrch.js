import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useRequestMapping from "./useRequestMapping";

const initialOrch = {
  flute: ["piccolo", "alto flute", "bass flute", "flute d'amore"],
  oboe: ["english horn", "oboe d'amore", "bass oboe"],
  clarinet: ["eb clarinet", "bass clarinet", "sax"],
  bassoon: ["contra"],
  horn: ["wagner tuba"],
  trumpet: ["cornet", "flugelhorn", "picc trumpet"],
  trombone: ["bass trombone"],
  tuba: ["euphonium"],
};

const useFullOrch = () => {
  const [orch, setOrch] = useState({});
  const requester = useRequestMapping();
 

  const findInst = async (name) => {
    let reply = await requester(`get-inst-by-name/${name}`);
    if (reply) {
      return reply;
    }
    return false;
  };

  useEffect(() => {
    const putItTogether = async () => {
      const tempOrch = {};
      for (let [primary, dbs] of Object.entries(initialOrch)) {
        const primaryInst = await findInst(primary);
        const dbsList = [];
        for (let db of dbs) {
          const dbInst = await findInst(db);
          dbsList.push(dbInst);
        }

        tempOrch[primaryInst.abbreviation] = dbsList;
      }
      setOrch(tempOrch);
    };

    putItTogether();
  }, []);

  return orch;
};

export default useFullOrch;
