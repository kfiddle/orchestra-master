import PushBasic from "./PushBasic";

const SubmitPiece = async (piece, modalCloser) => {

  const pieceToSendUp = { ...piece};
  let response = await PushBasic(pieceToSendUp, "add-piece");
  if (response.ok) {
    modalCloser();
  }
};

const SubmitInstrument = async (instrumentNameRef, modalCloser) => {
  const instrumentToSendUp = {
    name: instrumentNameRef,
  };

  let response = await PushBasic(instrumentToSendUp, "add-instrument");
  if (response.ok) {
    modalCloser();
  }
};

const SubmitPerformance = async (
  performance,
  clickedPiecesList,
  concertDates,
  rehearsalDatez,
  modalCloser
) => {
  console.log(concertDates);
  console.log(rehearsalDatez);

  const performanceToSendUp = {
    ...performance,
    performanceDateTimes: concertDates,
    rehearsalDateTimes: rehearsalDatez,
  };

  let response = await PushBasic(performanceToSendUp, "add-performance");
  if (response.ok) {
    let newId = await response.json();
    let flag = true;
    for (let piece of clickedPiecesList) {
      response = await PushBasic(piece, "add-performance-piece/" + newId);
      if (!response.ok) {
        flag = false;
      }
    }
    flag && modalCloser();
  }
};

const SubmitPlayer = async (player, modalCloser) => {
  // let flag = true;
  // let pushFunction = !props.player ? "add-player" : "edit-player";
  // let mainPlayerResponse = await PushBasic(playerToSend, pushFunction);
  // if (mainPlayerResponse.ok) {
  //   let playerToSendBack = await mainPlayerResponse.json();
  //   clickedInstrumentList.forEach(async (instrument, index) => {
  //     let ip = {
  //       player: playerToSendBack,
  //       instrument: instrument,
  //       rank: index,
  //     };
  //     let playerInstrumentResponse = await PushBasic(ip, "add-instruments");
  //     if (!playerInstrumentResponse.ok) {
  //       flag = false;
  //     }
  //   });
  //   if (flag) {
  //     modalCloser();
  //   }
  // };
};

export { SubmitPlayer, SubmitPiece, SubmitInstrument, SubmitPerformance };
