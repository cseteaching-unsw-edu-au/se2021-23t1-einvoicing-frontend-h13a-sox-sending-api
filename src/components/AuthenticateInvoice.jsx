import React, { useState, useEffect } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

export const AuthenticateInvoice = () => {
  const [loading, setLoading] = useState(false);
  const [xml_data, setxml_data] = useState("");
  const [xml_file, setXMLFile] = useState("");
  const navigate = useNavigate();

  const [inputFile, setinputFile] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
  };

  function handleXMLFile(e) {
    console.log(e.target.files);
    setXMLFile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = () => {
      setxml_data(reader.result);
    };

    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  }

  return (
    <>
      <div className="single-page">
        <h2 className="large-text-white">Authenticate E-Invoice</h2>
        <form className="single-form" onSubmit={handleSubmit}>
          {/* file */}
          <label className="title-white" htmlFor="file">
            File Upload
          </label>
          <input
            type="file"
            id="file"
            name="file"
            style={{ marginBottom: "1px" }}
            onChange={handleXMLFile}
          ></input>
          {/* Submit */}
          <button
            className="subtitle-steel-blue"
            onClick={navigate("../Success")}
            type="submit"
          >
            Authenticate E-Invoice
          </button>
        </form>
      </div>
    </>
  );
};
