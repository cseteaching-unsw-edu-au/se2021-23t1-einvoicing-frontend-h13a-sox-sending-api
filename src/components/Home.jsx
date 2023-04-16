import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./Style.css";
import logo from "./Logo.png";
import logout from "../icons/Logout.png";
import create from "../icons/CreateInvoice.png";
import authenticate from "../icons/AuthenticateInvoice.png";
import render from "../icons/RenderInvoice.png";
import my_invoices from "../icons/MyInvoices.png";
import send from "../icons/SendInvoice.png";
import inbox from "../icons/CheckInbox.png";

export const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="container-center-horizontal">
        <div className="home-page screen">
          <div className="flex-col">
            <h1 style={{position: "absolute", top: "200px", whiteSpace: "nowrap" }} className="large-text-white">Welcome! How can we help you today?
            </h1>
            <div className="navigation-c">
            {/* Logout Button */}
            <logout-button onClick={() => navigate("Registration")}>
              <img className="logout" src={logout} alt="Logout" />
            </logout-button>
            </div>
            <div>
            {/* Create Invoice Button */}
            <home-page-button style={{position: "absolute", left: "425px", top: "400px" }} onClick={() => navigate("CreateInvoice")}>
              <img src={create} alt="Create Invoice" />
            </home-page-button>
            </div>
            <div>
            {/* Authenticate Invoice Button */}
            <home-page-button style={{position: "absolute", left: "725px", top: "400px" }} onClick={() => navigate("CreateInvoice")}>
              <img src={authenticate} alt="Authenticate Invoice" />
            </home-page-button>
            </div>
            <div>
            {/* Render Invoice Button */}
            <home-page-button style={{position: "absolute", left: "1025px", top: "400px" }} onClick={() => navigate("RenderInvoice")}>
              <img src={render} alt="Render Invoice" />
            </home-page-button>
            </div>
            <div>
            {/* My Invoices Button */}
            <home-page-button style={{position: "absolute", left: "425px", top: "700px" }} onClick={() => navigate("StoreInvoice")}>
              <img src={my_invoices} alt="My Invoices" />
            </home-page-button>
            </div>
            <div>
            {/* Send Invoice Button */}
            <home-page-button style={{position: "absolute", left: "725px", top: "700px" }} onClick={() => navigate("SendInvoice")}>
              <img src={send} alt="Send Invoice" />
            </home-page-button>
            </div>
            <div>
            {/* Inbox Button */}
            <home-page-button style={{position: "absolute", left: "1025px", top: "700px" }} onClick={() => navigate("CreateInvoice")}>
              <img src={inbox} alt="Inbox" />
            </home-page-button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return <div className="rectangle-2"></div>
}

