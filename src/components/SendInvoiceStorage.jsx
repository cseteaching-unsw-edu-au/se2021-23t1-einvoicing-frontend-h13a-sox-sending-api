import React, { useState, useEffect } from "react";
import "./Registration.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { Popup } from "./Popup";
import { Confirmation } from "./Confirmation";

export const SendInvoice = (props) => {
  const [receiver_email, setreceiver_email] = useState("");
  const [file_name, setfilename] = useState("");
  const [invoice_id, setInvoice_Id] = useState("");
  const [buttonPopupConfirm, setButtonPupupConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const data = JSON.parse(localStorage.getItem("invoices"));

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  function logInService() {
    userDetails === null
      ? navigate("/Registration", { state: { report: "HelloWorld" } })
      : console.log("");
  }

  const handleSubmit = async (e) => {
    logInService();
    setLoading(true);
    //console.log(data.invoices[invoice_id].invoice_id);
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/send/send_invoice_id",
        {
          user_id: userDetails.auth_user_id,
          receiver_email: receiver_email,
          file_name: file_name,
          invoice_id: data.invoices[invoice_id].invoice_id,
        }
      );
      // Handle response {200}
      console.log(response);
      await delay(500);
      //getInvoices();
      localStorage.setItem("report", JSON.stringify(response.data));

      setButtonPupupConfirm(true);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div>
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
            {/* Invoice ID */}
            <label className="title-white" htmlFor="xml_data">
              Invoice ID
            </label>
            <input
              value={invoice_id}
              onChange={(e) => setInvoice_Id(e.target.value)}
              type="text"
              placeholder="Invoice_id"
              id="invoice_id"
              name="invoice_id"
              style={{ marginBottom: "20px" }}
            ></input>
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
            {/* Submit */}
            <button className="subtitle-steel-blue" type="submit">
              Send E-Invoice
            </button>
            <Popup
              trigger={buttonPopupConfirm}
              setTrigger={setButtonPupupConfirm}
            >
              <Confirmation></Confirmation>
            </Popup>
            ;
          </form>
        </>
      )}
    </div>
  );
};
