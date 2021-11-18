import { OutTable, ExcelRenderer } from "react-excel-renderer";

const LibraryUploader = () => {
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {

        console.log(resp.cols)
        console.log(resp.rows)

        // this.setState({
        //   cols: resp.cols,
        //   rows: resp.rows,
        // });
      }
    });
  };
  return (
    <div>

      <input
        type="file"
        onChange={(event) => fileHandler(event)}
        style={{ padding: "10px" }}
      />
      <input
        type={"button"}
        value={"Upload"}
        onClick={() => console.log("hey")}
      />
    </div>
  );
};

export default LibraryUploader;
