import React, { useState } from "react"; /* Capture User Data */
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        ></input>

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        ></input>

        {/* Submit */}
        <button type="submit" onClick={() => navigate("/")}>
          Log In
        </button>
      </form>

      {/* New User*/}
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("registor")}
      >
        Dont have an account? Registor here.
      </button>
    </div>
  );
};
