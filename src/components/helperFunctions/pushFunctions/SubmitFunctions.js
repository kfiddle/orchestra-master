import PushBasic from "./PushBasic";

const SubmitPiece = async (piece, modalCloser) => {
  const pieceToSendUp = { ...piece };
  let response = await PushBasic(pieceToSendUp, "add-piece");
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
  const performanceToSendUp = {
    ...performance,
    performanceDates: concertDates,
    rehearsalDates: rehearsalDatez,
  };

  let adderToGo = {
    show: performanceToSendUp,
    piecesToAdd: clickedPiecesList,
  };

  let response = await PushBasic(adderToGo, "add-performance");
  response.ok && modalCloser();
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

export { SubmitPlayer, SubmitPiece, SubmitPerformance };
