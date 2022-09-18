import React, { useState } from "react";
import Navbar from "./Navbar";
import Product from "./ProductData";

function Products() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="fs-2  ">
          <span>All Products</span>
        </div>
        <Product />
      </div>
    </>
  );
}
export default Products;
