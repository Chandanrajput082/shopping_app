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
      return { ...prevData, [name]: value };
    });
  };

  const navigate = useNavigate();

  const goOnAdmin = () => {
    navigate("/admin");
  };

  const goOnUser = () => {
    navigate("/user");
  };

  const handleClick = () => {
    if (formData.email == "admin@gmail.com" && formData.passward === "12345") {
      goOnAdmin();
    } else if (
      formData.email === "user@gmail.com" &&
      formData.passward === "123456"
    ) {
      goOnUser();
    } else {
      alert("you are not admin nor user");
    }
  };

  return (
    <>
      <div className="container">
        <div className="text-center m-5 bg-warning p-2">
          <strong className="display-6 font-weight-bolder">Shopping App</strong>
        </div>
        <div class="col-lg-6 mx-lg-auto card shadow mt-5">
          <div class="card-body">
            <p className="fs-2 font-weight-bolder text-center">Login</p>
            <div class="form-group mb-2 mt-2">
              <label forhtml="email">Email address</label>
              <InputField
                type={email}
                value={email.email}
                name={"email"}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group mb-2 mt-4">
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

            <div className="text-center mt-5">
              <ButtonField label={"Login"} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
