import React, { useState } from "react";
import { Login } from "./Login";
import { Registor } from "./Registor";
import "./Registration.css";

export const Registration = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="authentication-page">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Registor onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
