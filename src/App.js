import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import User from "./components/User";
import AddItems from "./components/AddItems";
import Allproducts from "./components/Allproducts";
import Shoppingitems from "./components/Shoppingitems";
import { createContext, useState } from "react";

export const CartContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartContext.Provider value={{ count, setCount }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/additems" element={<AddItems />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/shoppingitems" element={<Shoppingitems />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
