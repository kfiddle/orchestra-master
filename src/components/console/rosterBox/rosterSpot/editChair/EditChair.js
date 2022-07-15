import useFetch from "../../../../../hooks/useFetch";

import Modal from "../../../../UI/modal/Modal";

import styles from "./EditChair.module.css";
import SinglePartAdjuster from "./singlePartAdjuster/SinglePartAdjuster";

const EditChair = ({ closeModal, pic }) => {
  const { chair } = pic;
  const { parts } = chair;

  const pusher = useFetch();

  const deleteChair = async () => {
    const response = await pusher(pic, "delete-pic");
    if (response !== "phoey") {
      closeModal();
    }
  };

  const displayableParts = parts.map((part) => (
    <SinglePartAdjuster key={parts.indexOf(part)} part={part} />
  ));

  const styleObject = { height: "15rem" };

  return (
    <Modal closeModal={closeModal} styleObject={styleObject}>
      <div>{displayableParts}</div>
      <button className={styles.button} onClick={deleteChair}>
        Remove Chair
      </button>
    </Modal>
  );
};

export default EditChair;
