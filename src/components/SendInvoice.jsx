import React, { useState, useEffect } from "react";
import "./Registration.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const SendInvoice = (props) => {
  const [receiver_email, setreceiver_email] = useState("");
  const [file_name, setfilename] = useState("");
  const [xml_data, setxml_data] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [report, setReport] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    setIsSubmitting(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/send/send_invoice",
        {
          receiver_email,
          file_name,
          xml_data,
        }
      );
      // Handle response {200}
      console.log(response);
      //setReport(response.data);
      localStorage.setItem("report", JSON.stringify(response.data));
      navigate("/Confirmation", { state: { report: "HelloWorld" } });
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="send-page">
      <h2>Send E-Invoice</h2>
      <form className="send-Invoice-form" onSubmit={handleSubmit}>
        {/* recipient Email */}
        <label htmlFor="email">Recipients Email</label>
        <input
          value={receiver_email}
          onChange={(e) => setreceiver_email(e.target.value)}
          type="email"
          placeholder="abc123@gmail.com"
          id="email"
          name="email"
        ></input>

        {/* filename */}
        <label htmlFor="file_name">filename</label>
        <input
          value={file_name}
          onChange={(e) => setfilename(e.target.value)}
          type="text"
          placeholder="example2.xml"
          id="file_name"
          name="file_name"
        ></input>
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
