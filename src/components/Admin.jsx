import React from "react";
import Slidebar from "./Slidebar";

import { Routes, Route, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const goOnAddItems = () => {
    navigate("/additems");
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary btn-lg "
     
          onClick={goOnAddItems}
        >
          Add Items
        </button>
      </div>

  
    </>
  );
}
export default Admin;
