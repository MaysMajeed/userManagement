import "./Register.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [aboutYou, setAboutYou] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password === confirmedPassword) {
      const registrationData = {
        fullName: fullName,
        email: email,
        password: password,
        aboutYou: aboutYou,
      };
      await fetch("http://localhost:3009/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(registrationData),
      })
        .then((response) => response.json())
        .then((data) => data && window.location.replace("/login"));
    } else {
      console.log("password does not match!");
    }
  };

  return (
    <div className="signUpContainer">
      <div className="signUpForm">
        <form onSubmit={handleRegistration}>
          <div className="inputController">
            <label>Full Name</label>
            <input
              type="text"
              className="input"
              required
              onChange={(e) => {
                setFullName(e.currentTarget.value);
              }}
            />
          </div>

          <div className="inputController">
            <label>Email</label>
            <input
              type="text"
              className="input"
              required
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>

          <div className="inputController">
            <label>Password</label>
            <input
              type="password"
              className="input"
              required
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          <div className="inputController">
            <label>Confirm Password</label>
            <input
              type="password"
              className="input"
              required
              onChange={(e) => {
                setConfirmedPassword(e.currentTarget.value);
              }}
            />
          </div>

          <div className="inputController">
            <label>About you</label>
            <textarea
              type="text"
              className="input"
              onChange={(e) => {
                setAboutYou(e.currentTarget.value);
              }}
            />
          </div>

          <div className="inputController">
            <input type="submit" className="btn-form" />
          </div>
        </form>
        <p className="note">
          Already have an account please <Link to="/login">sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
