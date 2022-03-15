import { useContext, useEffect, useState } from "react";

import Horloge from "../../../entryComponents/performanceEntry2/horlage/Horloge";

import PerformanceStateFunctions from "../../../../store/performance-state-functions";

import styles from "./ConcertsEdit.module.css";
import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

const ConcertsEdit = () => {
  const { performance } = useContext(PerformanceStateFunctions);
  const [existingConcerts, setExistingConcerts] = useState([]);

  useEffect(() => {
    const getExistingConcerts = async () => {
      let response = await PushBasic(performance, "get-all-concerts-of-show");
      if (response.ok) {
        let finalList = await response.json();
        if (finalList.length > 0) {
          setExistingConcerts(finalList);
        }
      }
    };

    getExistingConcerts();
  }, []);

  const addConcertClicked = () => {
    let tempList = [...existingConcerts];
    tempList.push(
      <Horloge
        key={existingConcerts.length}
        label={"additional"}
        event={"CONCERT"}
      />
    );
    setExistingConcerts(tempList);
  };


  const displayableConcerts = existingConcerts.map((horloge) => (
    <Horloge
      key={existingConcerts.indexOf(horloge)}
      label={
        existingConcerts.indexOf(horloge) === 0 ? "Primary Date" : "Additional"
      }
      horloge={horloge}
    />
  ));

  return (
    <div>
      <div className={styles.additionalPerfButtonDiv}>
        {displayableConcerts}

        <button
          onClick={addConcertClicked}
          className={styles.button}
          type={"button"}
        >
          Additional Performance Date(s) ?
        </button>
      </div>
    </div>
  );
};

export default ConcertsEdit;
