import React from "react";
import { useEffect, useState } from "react";
import {} from "react-icons/fa";
import CartProduct from "./CartProduct";

function Shoppingitems() {
  const [addToCarddata, setaddToCarddata] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/orders");
    const data = await response.json();
    console.log(data.length);
    setaddToCarddata(data);
  };
  console.log(addToCarddata);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <header
        className="bg-black text-white "
        style={{
          textAlign: "center",
        }}
      >
        <h1>Your Card</h1>
      </header>
      <div className="row row-cols-1 row-cols-md-1 ">
        {addToCarddata.map((curEle, i) => {
          return <CartProduct key={i} curEle={curEle} />;
          
        })}
      </div>
    </>
  );
}

export default Shoppingitems;
