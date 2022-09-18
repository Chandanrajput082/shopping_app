import React from "react";
import { useEffect, useState } from "react";
import {} from "react-icons/fa";
import CartProduct from "./CartProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Cart() {
  const [addToCarddata, setaddToCarddata] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const getCartItems = async () => {
    const response = await fetch("http://localhost:5000/cart");
    const data = await response.json();
    setaddToCarddata(data);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {}, [totalPrice]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/cart/${id}`);
    getCartItems();
  };

  const handlePlaceOrder = async () => {
    const res = await fetch("http://localhost:5000/cart");
    const data = await res.json();
    await axios.post(" http://localhost:5000/orders", data);
    //await axios.delete("http://localhost:5000/cart");
    navigate("/admin");
  };

  return (
    <>
      <Navbar />
      <div className="bg-warning text-center m-5 bg-warning p-2 display-4 font-weight-bolder">
        Your Cart
      </div>
      {addToCarddata.length !== 0 ? (
        <div className="container">
          {addToCarddata.map((curEle, i) => {
            return (
              <CartProduct
                key={i}
                curEle={curEle}
                getCartItems={getCartItems}
                setTotalPrice={setTotalPrice}
                totalPrice={totalPrice}
                handleDelete={handleDelete}
              />
            );
          })}
          <div>
            <div className="border border-2 mt-5"></div>
            <div className="mt-5 text-center">
              <div className="btn btn-warning m-4">
                <strong>Total Price: </strong>
                {totalPrice}
              </div>
              <button
                className="btn btn-warning ml-2"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5 display-6">Cart is Empty!</div>
      )}
    </>
  );
}

export default Cart;
