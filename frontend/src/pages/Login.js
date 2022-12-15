import "./Login.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const logingData = {
      email: email,
      password: password,
    };
    await fetch("http://localhost:3009/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logingData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        data.token && window.location.replace("/adminPanel");
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h3 className="title">Login</h3>
        <hr className="loginline" />
        <form onSubmit={handleLogin}>
          <div className="inputController">
            <label>Email</label>
            <input
              type="text"
              className="input"
              required
              onChange={(e) => {
                setEmail(e.target.value);
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
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="inputController">
            <input type="submit" className="btn-form" placeholder="Login" />
          </div>
        </form>
        <p className="note">
          don't have an account please <Link to="/register">sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
