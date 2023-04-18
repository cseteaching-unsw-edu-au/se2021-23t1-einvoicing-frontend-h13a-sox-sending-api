import React, { useState, useEffect } from "react";
import "./Registration.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    try {
      // Post Request
      const response = await Axios.post("http://127.0.0.1:5000/auth/login", {
        email: email,
        password: pass,
      });
      // Handle response {200}
      console.log(response);
      //setReport(response.data);
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      navigate("/", { state: { report: "HelloWorld" } });
    } catch (err) {
      // Handle error
      if (err.response.data.message == "<p>Invalid Email</p>") {
        //console.log(err);
        console.log(err);
        alert("Invalid Email, Please Registor First");
      } else if (err.response.data.message == "<p>Incorrect Password</p>") {
        console.log(err);
        alert("Incorrect Password");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email */}
        <label htmlFor="email" className="subtitle">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        ></input>

        {/* Password */}
        <label htmlFor="password" className="subtitle">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        ></input>

        {/* Submit */}
        <button type="submit" onClick={() => navigate("Home")}>
          Log In
        </button>
      </form>

      {/* New User*/}
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Dont have an account? Register here.
      </button>
    </div>
  );
};
