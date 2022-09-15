import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonField from "./base/ButtonField";
import InputField from "./base/InputField";

function Login() {
  const [email, setemail] = useState("");
  const [passward, setpassward] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    passward: "",
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setFormData((prevData) => {
      return {...prevData, [name]: value };
    });
  };

  
 const navigate = useNavigate();

  const goOnAdmin = () => {
    navigate("/admin");
  };

  const goOnUser = () => {
    navigate("/user");
  };

  const handleClick = () =>{

if(formData.email == "admin@gmail.com" && formData.passward === "12345" ){
  goOnAdmin();

} else if (formData.email === "user@gmail.com" && formData.passward === "123456") {
      goOnUser();
    } else {
      alert("you are not admin nor user");
    }

  }

  // const check = (e) => {
  //   e.preventDefault();
  //   if (email === "admin@gmail.com" && passward === "12345") {
  //     goOnAdmin();
  //   } else if (email === "user@gmail.com" && passward === "123456") {
  //     goOnUser();
  //   } else {
  //     alert("you are not admin nor user");
  //   }
  // };

  return (
    <>
      <div>
        <h1
          className="text-white-50 bg-dark"
          style={{
            textAlign: "center",
          }}
        >
          WEL COME
        </h1>
      </div>

      <div class="col-lg-6 mx-lg-auto card shadow mt-5">
        <div class="card-header">
          <h3 class="card-title text-center">LOGIN</h3>
        </div>
        <div class="card-body">
          <h1>Enter Your Gmail and Passward</h1>

          <div class="form-group mb-2">
            <label forhtml="email">Email address</label>
            <InputField
              type={email}
              value={email.email}
              name={"email"}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </div>

          <div class="form-group mb-2">
            <label forhtml="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={handleChange}
              value={formData.passward}
              name={"passward"}
            />
          </div>
          <ButtonField label={"Login"} handleClick={handleClick} />
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Login;
