import Modal from "../../UI/modal/Modal";

import PerformanceStateFunctions from "../../../store/performance-state-functions";
import styles from "./PerformanceEdit2.module.css";

const PerformanceEdit2 = (props) => {
  const [performance, setPerformance] = useState(props.performance);

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <Modal styleObject={perfEntryModalStyles} closeModal={props.closeModal}>
      <PerformanceStateFunctions.Provider
        value={{ setPerformance, performance }}
      />
      <div className={classes.outerContainer}>
        <form>



            
        </form>
      </div>
      <PerformanceStateFunctions />
    </Modal>
  );
};

export default PerformanceEdit2;
