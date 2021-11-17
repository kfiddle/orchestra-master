import classes from "./PlayerInfoBox.module.css";

const PlayerInfoBox = (props) => {
  const {
    firstNameArea,
    lastName,
    email,
    homePhone,
    cellPhone,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,

    unions,
  } = props.player;

  return <div className={classes.infoContainer}>
      <div className={classes.nameDiv}>{firstNameArea} {lastName}</div>
      <div className={classes.cellPhone}>{cellPhone}</div>
      <div className={classes.email}>{email}</div>
      <div></div>
      <div></div>
      </div>;
};

export default PlayerInfoBox;
