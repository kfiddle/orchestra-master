import { useContext, useEffect, useState } from "react";

import HorlogeAddTo from "../horloges/HorlogeAddTo";
import HorlogeEdit from "../horloges/HorlogeEdit";

import PerformanceStateFunctions from "../../../../store/performance-state-functions";

import useFetch from "../../../../hooks/useFetch";

import styles from "./ConcertsEdit.module.css";

const ConcertsEdit = () => {
  const { performance } = useContext(PerformanceStateFunctions);
  const [existingConcerts, setExistingConcerts] = useState([]);
  const [addedConcerts, setAddedConcerts] = useState([]);

  const pusher = useFetch();

  useEffect(() => {
    const getExistingConcerts = async () => {
      let concertsList = await pusher(performance, "get-all-concerts-of-show");
      if (concertsList !== "phoey") {
        setExistingConcerts(concertsList);
      }
    };

    getExistingConcerts();
  }, []);


  const addConcertClicked = () => {
    let tempList = [...addedConcerts];
    tempList.push(
      <HorlogeAddTo
        key={addedConcerts.length}
        label={"additional"}
        event={"CONCERT"}
      />
    );
    setAddedConcerts(tempList);
  };

  const displayableExistingConcerts = existingConcerts.map((horloge) => (
    <HorlogeEdit
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
        {displayableExistingConcerts}
        {addedConcerts}

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
