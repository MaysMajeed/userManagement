import "./LandingPage.css";
import { React } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="textPart">
        <h1>Lorem ipsum</h1>
        <hr className="Hline" />
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          quisquam fuga. Dicta corporis modi inventore, enim suscipit quia vel
          beatae doloribus ab eum nesciunt tempora repudiandae.
        </h4>
        <Link to="/Register">
          <button className="btn">Try it now</button>
        </Link>
      </div>
      <div className="imgPart"></div>
    </div>
  );
}

export default LandingPage;
