import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

export const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pass);
  };

  return (
    <div className="auth-form-container">
      <h2 className="title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* first name */}
        <label htmlFor="first_name" className="subtitle">First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Your First Name"
          name="first_name"
          id="first_name"
        ></input>
        {/* last name */}
        <label htmlFor="last_name" className="subtitle">Last Name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Your last Name"
          name="last_name"
          id="last_name"
        ></input>
        {/* email */}
        <label htmlFor="email" className="subtitle">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="abc123@gmail.com"
          name="email"
          id="email"
        ></input>
        {/* password */}
        <label htmlFor="password" className="subtitle">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          name="password"
          id="password"
        ></input>
        {/* submit */}
        <button type="submit" onClick={() => navigate("/")} className="subtitle">
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login Here
      </button>
    </div>
  );
};
