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
  modalCloser
) => {
  const performanceToSendUp = {
    ...performance,
    performanceDates: concertDates,
    rehearsalDates: rehearsalDatez,
  };

  let response1 = await PushBasic(performanceToSendUp, "add-performance");

  if (response1.ok) {
    let newlySavedShow = await response1.json();

    for (let clickedPiece of clickedPiecesList) {
      let showPieceToSendUp = {
        piece: clickedPiece,
        show: newlySavedShow,
        orderNum: clickedPiecesList.indexOf(clickedPiece),
      };

      let response2 = await PushBasic(showPieceToSendUp, "add-show-piece");
      if (response2.ok) {
        let newlySavedShowPiece = await response2.json();
        let titleToFindHere = newlySavedShowPiece.piece.title;

        for (let title in stringNumbers) {
          if (title === titleToFindHere) {
            let listOfStrings = [];
            for (let partNum in stringNumbers[title]) {
              listOfStrings.push({
                stringPart: partNum,
                number: +stringNumbers[title][partNum],
              });
            }

            console.log(listOfStrings);

            let response3 = await PushBasic(
              listOfStrings,
              "make-string-player-in-chairs/" + newlySavedShowPiece.id
            );
          }
        }
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
