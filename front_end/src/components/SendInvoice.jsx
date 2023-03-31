import React, { useState } from "react";
import "./Registration.css";
import Axios from "axios";

export const SendInvoice = () => {
  const [receiver_email, setreceiver_email] = useState("");
  const [filename, setfilename] = useState("");
  const [xml_data, setxml_data] = useState("");

  const postData = (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    Axios.post("http://127.0.0.1:9090/send/send_invoice", {
      receiver_email,
      filename,
      xml_data,
    })
      .then((res) => console.log("Sending E-invoice", res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="sendInvoice">
      <h2>Send E-Invoice</h2>
      <form className="send-Invoice-form" onSubmit={postData}>
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
          value={filename}
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
