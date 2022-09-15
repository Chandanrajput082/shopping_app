import React from "react";
import Cards from "./Cards";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { CartContext } from "../App";
import { useContext } from "react";

function Allproducts(props) {
  const location = useLocation();
  const [ordersData, setOrdersData] = useState();
  const cartContext = useContext(CartContext);
  const { count, setCount } = cartContext;
  const compare = async () => {
    const response = await fetch("http://localhost:5000/orders");
    setOrdersData(await response.json());
  };

  useEffect(() => {
    compare();
  }, []);

  const Addtocard = async (img, pro, fla, pri, id) => {
    const postorderdata = {
      productname: pro,
      flavourname: fla,
      img: img,
      price: pri,
      productId: id,
      count: "1",
    };

    let updateData = ordersData.filter((e1) => {
      if (e1.productId === postorderdata.productId) {
        return true;
      } else {
        return false;
      }
    });

    if (updateData.length > 0) {
      alert("Plz Check Your Card");
    } else {
      setCount(count + 1);
      ordersData.push(postorderdata);

      await axios.post("http://localhost:5000/orders", postorderdata);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {[...Array(location.state.NoOfVariation - 0)].map((data, i) => (
          <div
            className="card "
            key={i}
            style={{ width: 700, padding: 30, textAlign: "center" }}
          >
            <img
              src={location.state.variation[i].img}
              className="card-img-top "
              style={{ height: "100px", width: "100px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                productname:{location.state.variation[i].productname}
              </h5>
              <h5>Description:{location.state.variation[i].flavourname}</h5>
              <h5>
                Price:{location.state.variation[i].price}{" "}
                {location.state.variation[i].quantityname}
              </h5>
            </div>
            <button
              onClick={() =>
                Addtocard(
                  location.state.variation[i].img,
                  location.state.variation[i].productname,
                  location.state.variation[i].flavourname,
                  location.state.variation[i].price,
                  location.state.variation[i].id,
                  location.state.variation[i].quantityname
                )
              }
            >
              Add To Card
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Allproducts;
