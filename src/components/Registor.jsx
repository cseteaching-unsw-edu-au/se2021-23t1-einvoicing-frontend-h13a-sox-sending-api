import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registor = (props) => {
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
      <h2>Registor</h2>
      <form className="registor-form" onSubmit={handleSubmit}>
        {/* first name */}
        <label htmlFor="first_name">First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Your First Name"
          name="first_name"
          id="first_name"
        ></input>
        {/* last name */}
        <label htmlFor="last_name">Last Name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Your last Name"
          name="last_name"
          id="last_name"
        ></input>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="abc123@gmail.com"
          name="email"
          id="email"
        ></input>
        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          name="password"
          id="password"
        ></input>
        {/* submit */}
        <button type="submit" onClick={() => navigate("/")}>
          Registor
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login Here
      </button>
    </div>
  );
};
