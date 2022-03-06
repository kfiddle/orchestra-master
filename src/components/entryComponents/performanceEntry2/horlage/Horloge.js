import EditingHorloge from "./EditingHorloge";
import NewHorloge from "./NewHorloge";

const Horloge = (props) => {
  if (props.horloge) {
    return <EditingHorloge horloge={props.horloge} />;
  } else {
    return <NewHorloge />;
  }
};

export default Horloge;
