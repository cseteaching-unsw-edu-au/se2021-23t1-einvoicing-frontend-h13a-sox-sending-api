import React, { useState } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const RenderInvoice = () => {
  const [inputFile, setinputFile] = useState("");
  const [lang, setLang] = useState("");
  const [option, setOption] = useState("");
  const [api, setAPI] = useState("");
  const navigate = useNavigate();

  const retrieveAPI = async () => {
    try {
      // Post Request
      const response = await Axios.post(
        "https://einvoice-rendering-api.web.app/auth/login/",
        {
          email: "sixrip7er@gmail.com",
          password: "Bakhtiari2023",
        }
      );
      // Handle response {200}
      //console.log(response);
      //setReport(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      //navigate("/Confirmation", { state: { report: "HelloWorld" } });
      //setAPI(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */

    //console.log(api);
    retrieveAPI();
    //console.log(api);

    const apiKey = JSON.parse(localStorage.getItem("token")).token;

    //console.log(apiKey);

    try {
      const data = {
        inputFile: inputFile,
        lang: "English",
        option: option,
      };
      const urlEncodedData = new URLSearchParams();
      for (const key in data) {
        urlEncodedData.append(key, data[key]);
      }

      const options = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: apiKey,
        },
      };

      const response = await Axios.post(
        "https://einvoice-rendering-api.web.app/render/pdf/v2/",
        urlEncodedData.toString(),
        options
      );
      console.log(response.data.url);
      const newWindow = window.open(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="single-page">
      <h2>Render E-Invoice</h2>
      <form className="single-form" onSubmit={handleSubmit}>
        {/* inputFile */}
        <label htmlFor="inputFile">XML Data</label>
        <input
          value={inputFile}
          onChange={(e) => setinputFile(e.target.value)}
          type="text"
          placeholder="<?xml version= .... </Invoice>"
          id="inputFile"
          name="inputFile"
        ></input>

        {/* Lang */}
        <label htmlFor="lang">Language</label>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          id="lang"
          name="lang"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>

        {/* Option */}
        <label htmlFor="option">Option</label>
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          id="option"
          name="option"
        >
          <option value="Simple">Simple</option>
          <option value="Modern">Modern</option>
        </select>

        {/* Submit */}
        <button type="submit">Render E-Invoice</button>
      </form>
    </div>
  );
};
