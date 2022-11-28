import React, { useState } from "react";
import { authSliceActions } from "./authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { login } = authSliceActions;
  const dispatch = useDispatch();
  const validate = () => {
    const returnVal =
      inputEmail === "paulrishi164@gmail.com" && inputPassword === "HITHERE908"
        ? true
        : false;

    return returnVal;
  };

  const submitHandler = () => {
    if (validate) {
      console.log("Auth succeed");
      dispatch(login());
      navigate("/dashboard");
    }
  };
  return (
    <form
      className="contianer "
      style={{
        maxWidth: "300px",
        margin: "50px auto",
        border: "1px solid lightgrey",
        padding: "10px 20px",
        borderRadius: "0.25rem",
        boxShadow: "0px 2px 5px lightgrey",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <div className="form-group my-3">
        <label htmlFor="email" className="mb-2">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => setInputEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};

export default Auth;
