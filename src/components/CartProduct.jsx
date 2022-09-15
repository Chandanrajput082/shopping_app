import axios from "axios";
import React, { useState } from "react";

const CartProduct = ({ curEle }) => {

  console.log(curEle,"curEle");
  
  const [qty, setQty] = useState(+curEle.count);
  

  let [totalPrice, setTotalPrice] = useState(curEle.price);

  const handleAddQty = async() => {
    setQty((prevState) => prevState + 1);
    await axios.patch(`http://localhost:5000/orders/${curEle.id}`,{ count: qty+1 } );

    setTotalPrice(totalPrice * qty);
  };

  const handleReduceQty = () => {
    setQty((prevState) => {
      if (prevState !== 1) return prevState - 1;
      else return prevState;
    });
  };

  return (
    <div>
      <ul>
        <li className="mt-5">
          <div className="d-flex gap-5">
            <div>
              <img
                src={curEle.img}
                alt=""
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <div>
              <h5>product:{curEle.productname}</h5>
              <h5>
                price:{curEle.price}
                {curEle.quantityname}
              </h5>
            </div>
            <div>
              <i
                className="fa-sharp fa-solid fa-minus"
                onClick={handleReduceQty}
              ></i>
                
              {qty}

              <i className="fa-solid fa-plus" onClick={handleAddQty}></i>
            </div>

            {qty * curEle.price}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartProduct;
