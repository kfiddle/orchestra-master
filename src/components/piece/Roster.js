import RosterSpot from "./RosterSpot";

const Roster = (props) => {

  const displayableRosterSpots = props.roster.map(ppp => (
    <RosterSpot key={ppp.id} instrument={ppp.instrumentEnum} player={ppp.player? ppp.player.lastName: ''} />
  ))

  return <div>{displayableRosterSpots}</div>;
};

export default Roster;
