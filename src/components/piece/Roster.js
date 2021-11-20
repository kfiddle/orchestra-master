import RosterSpot from "./RosterSpot";

const Roster = (props) => {
  // const displayableRosterSpots = props.roster.map(chair => (
  //   <RosterSpot key={ppp.id} instrument={ppp.instrumentEnum} player={ppp.player? ppp.player.lastName: ''} />
  // ))

  const displayableSlots = props.roster.map((chair) => (
    <RosterSpot key={Math.random()} instrument={chair.part} player={chair.player? chair.player.lastName: ''}/>
  ));

  return <div>{displayableSlots}</div>;
};

export default Roster;
