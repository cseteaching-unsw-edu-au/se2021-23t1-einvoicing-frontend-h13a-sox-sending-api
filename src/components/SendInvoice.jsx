import React, { useState, useEffect } from "react";
import "./Registration.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

export const SendInvoice = (props) => {
  const [receiver_email, setreceiver_email] = useState("");
  const [file_name, setfilename] = useState("");
  const [xml_data, setxml_data] = useState("");
  const [xml_file, setXMLFile] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   setLoading(false);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    setLoading(true);
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
      //setLoading(true);
      //await delay(3000);
      navigate("/Confirmation", { state: { report: "HelloWorld" } });
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
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
    <div className="send-page">
      {loading ? (
        <CircleLoader
          color={"#36d7b7"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <h2 className="large-text-white">Send E-Invoice</h2>
          <form className="send-Invoice-form" onSubmit={handleSubmit}>
            {/* recipient Email */}
            <label className="title-white" htmlFor="email">
              Recipients Email
            </label>
            <input
              value={receiver_email}
              onChange={(e) => setreceiver_email(e.target.value)}
              type="email"
              placeholder="abc123@gmail.com"
              id="email"
              name="email"
            ></input>

            {/* filename */}
            <label className="title-white" htmlFor="file_name">
              File Name
            </label>
            <input
              value={file_name}
              onChange={(e) => setfilename(e.target.value)}
              type="text"
              placeholder="example2.xml"
              id="file_name"
              name="file_name"
            ></input>
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
            <button className="subtitle-steel-blue" type="submit">
              Send E-Invoice
            </button>
          </form>
        </>
      )}
    </div>
  );
};
