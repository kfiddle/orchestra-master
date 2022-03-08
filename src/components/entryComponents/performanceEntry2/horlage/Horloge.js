import HorlogeEdit from "./HorlogeEdit";
import NewHorloge from "./NewHorloge";

const Horloge = (props) => {


  if (props.horloge) {
    return <HorlogeEdit horloge={props.horloge} label={props.label}/>;
  } else {
    return <NewHorloge label={props.label} event={props.event} />;
  }
};

export default Horloge;
