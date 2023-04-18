import React, { useState, useEffect } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignButton = () => {
  const navigate = useNavigate();

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  function logOut() {
    userDetails === null
      ? navigate("/")
      : localStorage.removeItem("userDetails");
    navigate("/");
  }

  return (
    <>
      <div className="user-info">
        <p>{userDetails === null ? "" : userDetails.first_name}</p>
      </div>

      <div className="user-log">
        <button className="link-btn" onClick={() => logOut()}>
          {userDetails === null ? "Sign In" : "Sign Out"}
        </button>
      </div>
    </>
  );
};
