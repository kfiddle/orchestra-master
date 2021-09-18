import RosterSpot from "./RosterSpot";

const Roster = (props) => {
  const displayableRosterSpots = [];

  for (const key in props.roster) {
    for (let i = 0; i < props.roster[key]; i++) {
      if (key !== "id") {
            let printableKey = '';
            key === 'basses'? printableKey = 'bass' : printableKey = key.slice(0, -1);


        displayableRosterSpots.push(
          <RosterSpot key={Math.random()} instrument={printableKey} />
        );
      }
    }
  }

  return <div>{displayableRosterSpots}</div>;
};

export default Roster;
