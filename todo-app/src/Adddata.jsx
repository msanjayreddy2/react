import React, { useState } from "react";

function AddData(props) {
  const [task, settask] = useState("");
  const [date, setdate] = useState("");

  // console.log(date);
  function Handletext(event) {
    settask(event.target.value);
  }
  function Handledesc(event) {
    setdate(event.target.value);
  }
  function HandleClick() {
    if (task === "") {
      return;
    }

    props.Addtask({
      id: props.unique + 1,
      title: task,
      description: date,
    });
  }
  return (
    <center>
      <div className="Container-fluid text-center">
        <div className="row justify-content-md-center">
          <div className="col-4 ">
            <input
              className="data"
              type="text"
              placeholder="Enter tasks"
              onChange={Handletext}
            ></input>
          </div>
          <div className="col-4 ">
            <input
              className="data"
              type="text"
              placeholder="Enter description"
              onChange={Handledesc}
            ></input>
          </div>
          <div className="col-2">
            <button
              className="data btn btn-success mt-2 "
              onClick={HandleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </center>

    // <div className="Container ">
    //   <div className="row">
    //     <div className="col">hi</div>
    //     <div className="col ">hello</div>
    //   </div>
    // </div>
  );
}
export default AddData;
