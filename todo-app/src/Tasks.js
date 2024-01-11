import React from "react";

function Tasks(props) {
  function HandleClick() {
    console.log(props.note);
    props.deleteTask(props.note);
  }
  return (
    <div className="col" lg={100}>
      <center>
        <div className="col-auto ">
          <div className="border border-success rounded shadow mb-3 p-2">
            <h3>{props.note.title}</h3>
            <br />
            <h5>description</h5>
            <p>{props.note.description}</p>
            <button
              className="lead data btn btn-danger  "
              onClick={HandleClick}
            >
              delete
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}
export default Tasks;
