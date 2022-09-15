import React from "react";
import react, { useState } from "react";
import ButtonField from "./base/ButtonField";
import AddItems from "./AddItems";
import { v4 as uuidv4 } from 'uuid';


const Items = ({ number, handleChange, value, handle, item }) => {
  // console.log("item in times ", item);
  return (
    <>
    
      <div   className="mt-2 "
          style={{ display: "flex" }}>
        <input
          type="file"
          id={`img-${number}`}
          name="img"
          onChange={handle}
          value={item[number]?.finalimg}
          
         
        />
        <input
          type="text"
          id={`productname-${number}`}
          name={`productname-${number}`}
          onChange={handleChange}
          value={item.productname}
          placeholder={"product Name"}
        />
        <input
          type="text"
          id={`flavourname-${number}`}
          name="flavorname"
          onChange={handleChange}
          value={item[number]?.flavourname}
          placeholder={"Description"}
        />
        <input
          type="number"
          id={`price-${number}`}
          onChange={handleChange}
          name="price"
          value={item[number]?.price}
          placeholder="price"
        />
        <select
          onChange={handleChange}
          id={`quantityname-${number}`}
          value={item[number]?.quantityname}
          name="quantityname"
          >
          <option>Select</option>
          <option value={"/kg"}>kg </option>
          <option value={"/liters"}>liters</option>
          <option value={"/Quantity"}>Quantity</option>
     </select>
        {/* <img src={} /> */}
     
      </div>
    </>
  );
};
export default Items;
