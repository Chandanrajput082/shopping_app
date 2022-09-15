import React from "react";
import {} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

function Navbar() {
  const navigate = useNavigate();
  function handlechange() {
    navigate("/shoppingitems");
    // setCount(0);
  }
  const { count } = useContext(CartContext);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li>
                  <i
                    className="fa-solid fa-cart-shopping"
                    onClick={handlechange}
                  ></i>
                  {count}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
