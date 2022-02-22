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
  stringNumbers,
  stringHashMaps,
  modalCloser
) => {
  console.log(stringNumbers);

  const performanceToSendUp = {
    ...performance,
    performanceDates: concertDates,
    rehearsalDates: rehearsalDatez,
  };

  let response1 = await PushBasic(performanceToSendUp, "add-performance");

  if (response1.ok) {
    let newlySavedShow = await response1.json();
    let chairsToSendUp = [];

    for (let clickedPiece of clickedPiecesList) {
      let showPieceToSendUp = {
        piece: clickedPiece,
        show: newlySavedShow,
        orderNum: clickedPiecesList.indexOf(clickedPiece),
      };

      let response2 = await PushBasic(showPieceToSendUp, "add-show-piece");
      if (response2.ok) {
        let jsonified = await response2.json();
        let titleToFind = jsonified.piece.title;

      }
    }
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

export { SubmitPlayer, SubmitPiece, SubmitPerformance };
