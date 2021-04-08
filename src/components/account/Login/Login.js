import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { auth } from "../../../firebase";

const Login = () => {
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const loginSubmit = (event) => {
    event.preventDefault();
    if (loginEmail === "") {
      setEmailErrorText("");
      setError(true);
      setEmailErrorText("Email can't remain empty");
    }
    if (loginEmail.length > 0) {
      setError(false);
      setEmailErrorText("");
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(loginEmail).toLowerCase())) {
        setError(true);
        setEmailErrorText("Check your email");
      }
    }
    if (loginPassword === "") {
      setPasswordErrorText("");
      setError(true);
      setPasswordErrorText("Password can't remain empty");
    }
    // if (loginPassword > 0) {
    //   const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,10}$/;
    //   if (!re.test(String(loginPassword))) {
    //     setError(true);
    //     setPasswordErrorText(
    //       "Password must contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    //     );
    //   }
    // }
    else {
      console.log(loginEmail, loginPassword);
    }
    const loginCred = {
      email: loginEmail,
      password: loginPassword,
    };

    axios
      .post("http://localhost:3030/api/login", loginCred, {
        "content-type": "application/javascript",
      })
      .then((res) => console.log(res.data))
      .catch((error) =>
        error ? console.log(error.message) : history.push("/account")
      );

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(`%c ${null}`, "font-size: 24px; color: #ffc93c");
      }
      console.log("%c null", "font-size: 24px; color: #ffc93c");
    });
  };

  return (
    <form
      onSubmit={loginSubmit}
      className="row d-flex mt-5 w-100 align-items-center justify-content-center"
    >
      <div className="col col-lg-6 col-10">
        <div className="display-4 my-5">Login</div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            className="form-control bg-transparent border-secondary my-3"
            aria-describedby="emailHelp"
            name="loginEmail"
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
          />
          {error && <small className="text-danger">{emailErrorText}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control bg-transparent border-secondary my-3"
            name="loginPassword"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          {error && (
            <small className="text-danger m-0">{passwordErrorText}</small>
          )}
        </div>
        <div className="form-group">
          <NavLink
            className="form-check-label link-secondary text-decoration-none"
            exact
            to="/account/signup"
          >
            New User? Signup
          </NavLink>
        </div>
        <button type="submit" className="btn text-white border-light my-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
