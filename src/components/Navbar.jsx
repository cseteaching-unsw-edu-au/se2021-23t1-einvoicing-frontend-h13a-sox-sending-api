import { useLocation, NavLink, useNavigate } from "react-router-dom";
import logo from "../icons/Logo.png";
import logout from "../icons/Logout.png";
import login from "../icons/Login.png";
import white_create from "../icons/WhiteCreateNav.png";
import blue_create from "../icons/BlueCreateNav.png";
import white_authenticate from "../icons/WhiteAuthenticateNav.png";
import blue_authenticate from "../icons/BlueAuthenticateNav.png";
import white_render from "../icons/WhiteRenderNav.png";
import blue_render from "../icons/BlueRenderNav.png";
import white_store from "../icons/WhiteMyInvoicesNav.png";
import blue_store from "../icons/BlueMyInvoicesNav.png";
import white_send from "../icons/WhiteSendInvoiceNav.png";
import blue_send from "../icons/BlueSendInvoiceNav.png";
import white_inbox from "../icons/WhiteInboxNav.png";
import blue_inbox from "../icons/BlueInboxNav.png";
import { Login } from "./Login";
import { Register } from "./Register";
import { Home } from "./Home";
import { SendInvoice } from "./SendInvoice";
import { Render } from "./RenderInvoice";
import { Create } from "./CreateInvoice";
import { Store } from "./StoreInvoice";

export const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  function logOut() {
    userDetails === null
      ? navigate("/Registration")
      : localStorage.removeItem("userDetails");
    navigate("/Registration");
  }

  return (
    <nav>
      <div className="navigation-c">
        <div style={{ display: "flex" }}>
          <NavLink to="/">
            <img className="logo-image" src={logo} alt="SOX" />
          </NavLink>
          <NavLink to="/CreateInvoice">
            {location.pathname === "/CreateInvoice" ? (
              <img
                src={blue_create}
                alt="Create Invoice"
                style={{ position: "absolute", left: "60px", top: "10px" }}
              />
            ) : (
              <img
                src={white_create}
                alt="Create Invoice"
                style={{ position: "absolute", left: "60px", top: "10px" }}
              />
            )}
          </NavLink>
          <NavLink to="/RenderInvoice">
            {location.pathname === "/RenderInvoice" ? (
              <img
                src={blue_render}
                alt="Render Invoice"
                style={{ position: "absolute", left: "170px", top: "10px" }}
              />
            ) : (
              <img
                src={white_render}
                alt="Render Invoice"
                style={{ position: "absolute", left: "170px", top: "10px" }}
              />
            )}
          </NavLink>
          <NavLink to="/SendInvoice">
            {location.pathname === "/SendInvoice" ? (
              <img
                src={blue_send}
                alt="Send Invoice"
                style={{ position: "absolute", left: "290px", top: "10px" }}
              />
            ) : (
              <img
                src={white_send}
                alt="Send Invoice"
                style={{ position: "absolute", left: "290px", top: "10px" }}
              />
            )}
          </NavLink>
          <NavLink to="/StoreInvoice">
            {location.pathname === "/StoreInvoice" ? (
              <img
                src={blue_store}
                alt="Store Invoice"
                style={{ position: "absolute", left: "456px", top: "10px" }}
              />
            ) : (
              <img
                src={white_store}
                alt="Store Invoice"
                style={{ position: "absolute", left: "456px", top: "10px" }}
              />
            )}
          </NavLink>
          <NavLink to="/Inbox">
            {location.pathname === "/Inbox" ? (
              <img
                src={blue_inbox}
                alt="Inbox"
                style={{ position: "absolute", left: "616px", top: "10px" }}
              />
            ) : (
              <img
                src={white_inbox}
                alt="Inbox"
                style={{ position: "absolute", left: "616px", top: "10px" }}
              />
            )}
          </NavLink>
        </div>
        {/* Logout Button */}

        <logout-button onClick={() => logOut()}>
          {userDetails === null ? (
            <img className="logout" src={login} alt="Logout" />
          ) : (
            <img className="logout" src={logout} alt="Logout" />
          )}
        </logout-button>
      </div>
    </nav>
  );
};
