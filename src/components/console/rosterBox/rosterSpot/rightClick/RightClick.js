import LastNameInput from "./lastNameInput/LastNameInput";
import styles from "./RightClick.module.css";

//rosterSpot has this



const RightClick = (props) => {
  const pic = props.pic;
  const player = pic.player;
  const rightClicker = props.rightClicker;
  const removePlayerClicker = props.removePlayerClicker;

  const removeClicker = () => {
   removePlayerClicker();
  };

  return (
    <div className={styles.outerContainer}>
      {player ? (
        <button className={styles.button} onClick={removeClicker}>
          Remove Player
        </button>
      ) : (
        <LastNameInput />
      )}
    </div>
  );
};

export default RightClick;
