import React, { useState, useEffect } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

export const InvoiceStorage = () => {
  const [einvoice, setEinvoice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    try {
      // Post Request

      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await Axios.post("http://127.0.0.1:5000/storage/list", {
        user_id: "0",
      });
      // Handle response {200}
      setData(response.data);

      await delay(5000);
      console.log(data);
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
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
          <h2>Store E-Invoice</h2>
          <form className="single-form" onSubmit={handleSubmit}>
            {/* xml_data */}
            <label htmlFor="einvoice">XML Data</label>
            <input
              value={einvoice}
              onChange={(e) => setEinvoice(e.target.value)}
              type="text"
              placeholder="<b Invoice xml.....ns=\>"
              id="einvoice"
              name="einvoice"
            ></input>

            {/* Submit */}
            <button type="submit">Store E-Invoice</button>
          </form>
        </>
      )}
    </div>
  );
};
