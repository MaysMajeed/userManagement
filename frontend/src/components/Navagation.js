import { React } from "react";
import "./Navagation.css";
import { Link } from "react-router-dom";

function Navagation() {
  const user = localStorage.getItem("token");
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="link">
          LOGO
        </Link>
      </div>
      <ul className="mainNav">
        <li className="link">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        {user && (
          <li className="link">
            <Link className="link" to="/AdminPanel">
              Admin Panel
            </Link>
          </li>
        )}
        <li>
          <Link to="/about" className="link">
            About Us
          </Link>
        </li>
        {user ? (
          <li>
            <Link to="/logout" className="link">
              Log out
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" className="link">
              Log in
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navagation;
