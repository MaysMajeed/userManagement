import "./Logout.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleYesBtn = () => {
    window.localStorage.removeItem("token");
    window.location.replace("/login");
  };
  const handleCancelBtn = () => {
    navigate(-1);
  };
  return (
    <div className="logOutContainer">
      <div className="logOut">
        <p>Are you sure you want to log out?</p>
        <div className="btns">
          <button className="yesBtn" onClick={handleYesBtn}>
            Yes
          </button>
          <button className="cancelBtn" onClick={handleCancelBtn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
