const Roster = (props) => {
  const {
    firstViolins,
    secondViolins,
    violas,
    cellos,
    basses,
    flutes,
    oboes,
    clarinets,
    ebClarinets,
    bassoons,
    horns,
    trumpets,
    trombones,
    tubas,
    timpanis,
    percussions,
    harps,
    pianos,
  } = props.roster;

  console.log(props.roster)

  return (
    <div>
      {basses} basses and {ebClarinets} eBClarinets
    </div>
  );
};

export default Roster;
