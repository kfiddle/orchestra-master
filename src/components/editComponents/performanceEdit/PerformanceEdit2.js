import { useState } from "react";

import Modal from "../../UI/modal/Modal";

import BigInput3 from "../../input/BigInput3";

import ConcertsEdit from "./concertsEdit/ConcertsEdit";

import PerformanceStateFunctions from "../../../store/performance-state-functions";
import styles from "./PerformanceEdit2.module.css";
import Horloge from "../../entryComponents/performanceEntry2/horlage/Horloge";

const PerformanceEdit2 = (props) => {
  const [performance, setPerformance] = useState(props.performance);

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <PerformanceStateFunctions.Provider value={{ setPerformance, performance }}>
      <Modal styleObject={perfEntryModalStyles} closeModal={props.closeModal}>
        <div className={styles.outerContainer}>
          <form>
            <BigInput3 label="Performance Title" keyName="title" />

            <ConcertsEdit />
          </form>
        </div>
      </Modal>
    </PerformanceStateFunctions.Provider>
  );
};

export default PerformanceEdit2;
