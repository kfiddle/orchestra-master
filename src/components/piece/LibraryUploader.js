import { OutTable, ExcelRenderer } from "react-excel-renderer";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

const LibraryUploader = () => {
  const fileHandler = async (event) => {
    let fileObj = event.target.files[0];

    ExcelRenderer(fileObj, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        for (let row of response.rows) {
          const original = new Date("1899-12-30");
          original.setDate(original.getDate() + row[16]);

          let newPiece = {
            prefix: row[1],
            libNumber: row[2],
            suffix: row[3],
            composerName: row[4],
            arranger: row[5],
            title: row[6],
            otherName: row[7],
            publisher: row[8],
            duration: row[9],
            instrumentation: row[10],
            vocalistSoloist: row[11],
            percBreakdown: row[12],
            notes: row[13],
            status: row[14],
            sign: row[15],
            updated: original,
          };

          const sendItUp = async (pieceToSend) => {
            let response = await PushBasic(pieceToSend, "add-piece");
          };

          sendItUp(newPiece);
        }
      }
    });
  };

  const showDate = () => {
    const original = new Date("1899-12-30");
    original.setDate(original.getDate() + 43647);
    console.log(original);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => fileHandler(event)}
        style={{ padding: "10px" }}
      />
    </div>
  );
};

export default LibraryUploader;
