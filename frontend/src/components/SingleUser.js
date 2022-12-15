import "./SingleUser.css";
import { React } from "react";
import { Link } from "react-router-dom";

function SingleUser(user) {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="singleUserContainer">
      <div className="headContainer">
        <div className="profilePic"></div>

        <div className="dropdown iconContainer">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/">Edit</Link>
            </li>
            <li>
              <Link to="/">Delete</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h4>{user.fullName}</h4>
        <h4>{user.email}</h4>
        <p>{user.aboutYou}</p>
      </div>
    </div>
  );
}

export default SingleUser;
