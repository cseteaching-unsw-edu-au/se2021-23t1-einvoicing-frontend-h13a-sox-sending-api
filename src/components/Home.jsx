import React, { useState, useEffect } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <p>Hello World</p>
    </div>
  );
};
