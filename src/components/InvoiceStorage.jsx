import React, { useState, useEffect } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

export const InvoiceStorage = () => {
  const [einvoice, setEinvoice] = useState("");
  const [loading, setLoading] = useState(false);
  const [data2, setData2] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const numbers = [4, 3, 5, 1];
  const navigate = useNavigate();

  useEffect(() => {
    getInvoices();
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const data = JSON.parse(localStorage.getItem("invoices"));

  const getInvoices = async (e) => {
    //e.preventDefault(); /* Prevents page refresh on submit */
    setLoading(true);
    try {
      // Post Request

      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await Axios.post("http://127.0.0.1:5000/storage/list", {
        user_id: userDetails.auth_user_id,
      });
      // Handle response {200}
      localStorage.setItem("invoices", JSON.stringify(response.data));
      setData2(response.data.invoices);

      console.log(response.data);
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  const handleDelete = async (e) => {
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://127.0.0.1:5000/storage/delete_invoice",
        {
          user_id: userDetails.auth_user_id,
          invoice_id: einvoice,
        }
      );
      // Handle response {200}
      console.log(response);
      await delay(500);
      getInvoices();
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  const handleRender = async (e) => {
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://127.0.0.1:5000/storage/delete_invoice",
        {
          user_id: userDetails.auth_user_id,
          invoice_id: einvoice,
        }
      );
      // Handle response {200}
      console.log(response);
      await delay(500);
      getInvoices();
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  const handleSend = async (e) => {
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://127.0.0.1:5000/send/send_invoice_id",
        {
          user_id: "0",
          receiver_email: "sixrip7er@gmail.com",
          file_name: "exampl2.xml",
          invoice_id: "0",
        }
      );
      // Handle response {200}
      console.log(response);
      await delay(500);
      getInvoices();
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="single-page">
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
          <h2 className="large-text-white" >E-Invoice Storage</h2>
          <form className="single-form">
            {/* xml_data */}
            <label className="title-white" htmlFor="einvoice">Invoice ID</label>
            <input
              value={einvoice}
              onChange={(e) => setEinvoice(e.target.value)}
              type="text"
              placeholder="2"
              id="einvoice"
              name="einvoice"
              style={{marginBottom:"20px"}}
            ></input>

            {/* Delete Invoice */}
            <button
              className="subtitle-steel-blue"
              type="submit"
              onClick={() => handleDelete()}
              style={{marginBottom:"20px"}}>
              Delete Invoice
            </button>

            {/* Render Invoice */}
            <button
              className="subtitle-steel-blue"
              type="submit"
              onClick={() => handleRender()}
              style={{marginBottom:"20px"}}>
              Render Invoice
            </button>

            {/* Send Invoice */}
            <button
              className="subtitle-steel-blue"
              type="submit"
              onClick={() => handleSend()}
              style={{marginBottom:"20px"}}>
              Send Invoice
            </button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Created Date</th>
                <th>File Name</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((item) => (
                <tr>
                  <td>{item.invoice_id}</td>
                  <td>{item.created_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
