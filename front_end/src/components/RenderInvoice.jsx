import React, { useState } from "react";
import "./Registration.css";
import Axios from "axios";

export const RenderInvoice = () => {
  const [xml_data, setxml_data] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
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
      console.log(response);
      //setReport(response.data);
      //localStorage.setItem("report", JSON.stringify(response.data));
      //navigate("/Confirmation", { state: { report: "HelloWorld" } });
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
  };

  return (
    <div className="render-page">
      <h2>Render E-Invoice</h2>
      <form className="auth-form-container" onSubmit={handleSubmit}>
        {/* XML Data */}
        <label htmlFor="xml_data">Xml Data</label>
        <input
          value={xml_data}
          onChange={(e) => setxml_data(e.target.value)}
          type="text"
          placeholder="<?xml version= .... </Invoice>"
          id="xml_data"
          name="xml_data"
        ></input>
        {/* Submit */}
        <button type="submit">Send E-Invoice</button>
      </form>
    </div>
  );
};
