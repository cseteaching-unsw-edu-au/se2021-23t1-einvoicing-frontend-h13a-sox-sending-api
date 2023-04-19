import React, { useState, useEffect } from "react";
import "./InvoiceStorage.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { Popup } from "./Popup";
import { SendInvoice } from "./SendInvoiceStorage";

export const InvoiceStorage = () => {
  const [einvoice, setEinvoice] = useState("");
  const [loading, setLoading] = useState(false);
  const [data2, setData2] = useState([]);
  const [buttonPopupSend, setButtonPupupSend] = useState(false);
  const [xmlData, setXmlData] = useState("");
  const [xml_file, setXMLFile] = useState("");
  const [filename, setFileName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getInvoices();
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const data = JSON.parse(localStorage.getItem("invoices")).invoices;

  function logInService() {
    userDetails === null
      ? navigate("/Registration", { state: { report: "HelloWorld" } })
      : console.log("");
  }

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
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/list",
        {
          user_id: userDetails.auth_user_id,
        }
      );
      // Handle response {200}
      localStorage.setItem("invoices", JSON.stringify(response.data));
      setData2(response.data.invoices);

      //console.log(response.data);
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  const handleDelete = async (e) => {
    logInService();
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/delete_invoice",
        {
          user_id: userDetails.auth_user_id,
          invoice_id: data.invoices[einvoice].invoice_id,
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

  const handleStore = async (e) => {
    logInService();
    //console.log(xmlData);
    console.log(xml_file.responsetext);
    console.log(xmlData);

    //getBase64(xml_file).then((data) => setXmlData(data));
    //console.log(readTextFile(xml_file));
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/upload",
        {
          user_id: userDetails.auth_user_id,
          data: xmlData,
          filename: filename,
        }
      );
      // Handle response {200}
      //console.log(response);
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

  function handleXMLFile(e) {
    console.log(e.target.files);
    setXMLFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = () => {
      setXmlData(reader.result);
    };

    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  }

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
      localStorage.setItem("token", JSON.stringify(response.data));
    } catch (err) {
      // Handle error
      console.log(err);
    }
  };

  const handleRender = async (e) => {
    logInService();
    setLoading(true);

    retrieveAPI();
    setXmlData(data.invoices[einvoice].data);

    await delay(3000);

    const apiKey = JSON.parse(localStorage.getItem("token")).token;

    try {
      const data = {
        inputFile: xmlData,
        lang: "English",
        option: "Modern",
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
      // setLoading(true);
      await delay(15000);
      const newWindow = window.open(response.data.url);
    } catch (error) {
      console.error(error);
      if (error.response.status == 422) {
        console.log(error);
        alert(
          "Invoice could not be rendered. Please input a validated E-Invoice XML and try again!"
        );
      } else {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="single-page-Invoice">
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
            <h2 className="large-text-white">E-Invoice Storage</h2>
            <form className="single-form">
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

              {/* Store Invoice */}
              <button
                className="subtitle-steel-blue"
                type="submit"
                onClick={() => handleStore()}
                style={{ marginBottom: "20px" }}
              >
                Store Invoice
              </button>
              {/* Invoice_ID */}
              <label className="title-white" htmlFor="einvoice">
                Invoice ID
              </label>
              <input
                value={einvoice}
                onChange={(e) => setEinvoice(e.target.value)}
                type="text"
                placeholder="0"
                id="einvoice"
                name="einvoice"
                style={{ marginBottom: "20px" }}
              ></input>
            </form>
            {/* Delete Invoice */}
            <button
              className="subtitle-steel-blue"
              type="submit"
              onClick={() => handleDelete()}
              style={{ marginBottom: "20px" }}
            >
              Delete Invoice
            </button>

            {/* Render Invoice */}
            <button
              className="subtitle-steel-blue"
              type="submit"
              onClick={() => handleRender()}
              style={{ marginBottom: "20px" }}
            >
              Render Invoice
            </button>

            {/* Send Invoice */}
            <button
              className="subtitle-steel-blue"
              onClick={() => setButtonPupupSend(true)}
            >
              Send Invoice
            </button>
            <Popup trigger={buttonPopupSend} setTrigger={setButtonPupupSend}>
              <SendInvoice></SendInvoice>
            </Popup>

            <table bgcolor="black" width={500}>
              <thead>
                <tr bgcolor="darkcyan">
                  <th>Invoice ID</th>
                  <th>Created Date</th>
                  <th>File Name</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item, index) => (
                  <tr bgcolor="green" align="center">
                    <td>{index}</td>
                    <td>{item.created_date}</td>
                    <td>{item.filename}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};
