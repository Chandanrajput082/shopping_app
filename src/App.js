import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState();
  const [fullName, setFullName] = useState();
  const [last, setLast] = useState();
  const [lastName, setLasrName] = useState();

  function upDate(e) {
    e.preventDefault();
    setFullName(data);
    setLasrName(last);
  }
  const InputEvent = (e) => {
    setData(e.target.value);
  };
  const InputEventtwo = (e) => {
    setLast(e.target.value);
  };

  return (
    <>
      <form action="" onSubmit={upDate}>
        <div>
          <h1>
            Hello {fullName} {lastName}
          </h1>
          <input
            type="text"
            onChange={InputEvent}
            placeholder="Enter Your Name"
            value={data}
          />
          <input
            type="text"
            onChange={InputEventtwo}
            placeholder="Enter last name"
          />
          <button type="submit">click 👍</button>
        </div>
      </form>
    </>
  );
}

export default App;
