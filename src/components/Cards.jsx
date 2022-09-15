import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "./pagination";
import { CartContext } from "../App";

function Cards() {
  const [users, setUsers] = useState([]);
  const cartContext = useContext(CartContext);
  const { count, setCount } = cartContext;
  const [ordersData, setOrdersData] = useState();
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const navigate = useNavigate();

  // console.log("count :-", count);

  useEffect(() => {
    getUsers();
    cartDetails();
  }, []);

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/products");
    setUsers(await response.json());
  };

  console.log(users);
  const cartDetails = async () => {
    const response = await fetch("http://localhost:5000/orders");
    setOrdersData(await response.json());
  };

  const subProducts = (element) => {
    navigate("/allproducts", { state: element });
  };

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const Addtocard = async (item) => {
    let addordersdata = {
      productname: item.variation[0].productname,
      price: item.variation[0].price,
      img: item.variation[0].img,
      flavourname: item.variation[0].flavourname,
      quantityname: item.variation[0].quantityname,
      productId: item.variation[0].id,
      count: "1",
    };
    // let productData = item.variation[0];
    // productData["count"] = 1;
    let updateData = ordersData.filter((data) => {
      if (data.productId === item.variation[0].id) {
        return true;
      } else {
        return false;
      }
    });
    if (updateData.length > 0) {
      alert("plz check your card");
    } else {
      setCount(count + 1);
      ordersData.push(addordersdata);
      await axios.post("http://localhost:5000/orders",addordersdata );
    }
  };
  return (
    <>
      <div>
        <div className="container mt-5 ">
          <div className="row row-cols-1 row-cols-md-4">
            {users.slice(pagination.start, pagination.end).map((curEle, i) => {
              return (
                <div key={i}>
                  <div className="col mb-4">
                    <div className="card " onClick={() => subProducts(curEle)}>
                      <img
                        src={curEle.variation[0].img}
                        className="card-img-top "
                        style={{ height: 300, width: 200 }}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          product:{curEle.variation[0].productname}
                        </h5>
                        <h5 className="card-title">
                          price:{curEle.variation[0].price}
                          {curEle.variation[0].quantityname}
                        </h5>
                      </div>
                    </div>
                    <button onClick={() => Addtocard(curEle)}>
                      Add To Card
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={users.length}
          />
        </div>
      </div>
    </>
  );
}

export default Cards;
