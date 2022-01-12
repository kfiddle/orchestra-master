import RosterSpot from "./RosterSpot";

const Roster = (props) => {

  const chairsToFill = props.pp.chairsToFill;

  const displayableSlots = chairsToFill.map((chair) => (
    <RosterSpot key={Math.random()} pp={props.pp} chair={chair}/>
  ));

  return <div>{displayableSlots}</div>;
};

export default Roster;
