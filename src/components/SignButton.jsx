import "./Single.css";
import { useNavigate } from "react-router-dom";
import logout from "../icons/Logout.png";

export const SignButton = () => {
  const navigate = useNavigate();

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const displayName = (e) => {
    console.log("Hello" + userDetails.first_name);
  };

  function logOut() {
    userDetails === null
      ? navigate("/")
      : localStorage.removeItem("userDetails");
    navigate("/");
  }

  return (
    <>
      <div className="user-info">
        <p>{userDetails === null ? "" : userDetails.first_name}</p>
      </div>

      <div className="user-log">
        <button className="logout" onClick={() => logOut()}>
          {/* Logout Button */}
          <img className="logout" src={logout} alt="Logout" />
          {userDetails === null ? "Sign In" : "Sign Out"}
        </button>
      </div>
    </>
  );
};
