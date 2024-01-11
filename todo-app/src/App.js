// import logo from './logo.svg';
import "./App.css";
import Head from "./Head";
import AddData from "./Adddata";
import { useState } from "react";
import React from "react";
import Tasks from "./Tasks";

function App() {
  const [unique, setunique] = useState(0);
  const [data, setdata] = useState([{ id: 0, title: "", description: "" }]);
  function Addtask(newtask) {
    setunique(unique + 1);
    newtask.id = unique + 1;
    setdata([...data, newtask]);
  }
  function deleteTask(newtitle) {
    const newdata = data.filter((task) => task.id !== newtitle.id);
    setdata(newdata);
    setunique(unique + 1);
  }
  console.log(data);
  return (
    <div>
      <Head />
      <AddData Addtask={Addtask} />
      <br />
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 p-2">
        {data.map((d) =>
          d.id !== 0 ? (
            <Tasks
              key={d.id}
              note={d}
              deleteTask={deleteTask}
              unique={unique}
            ></Tasks>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
