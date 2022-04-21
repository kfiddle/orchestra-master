import LastNameInput from "./lastNameInput/LastNameInput";
import styles from "./RightClick2.module.css";

//rosterSpot has this

const RightClick2 = (props) => {
  const pic = props.pic;
  const player = pic.player;
  const removeClicker = () => {
    player ? console.log(player) : console.log("dont got one");
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

export default RightClick2;
