import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import "../App.css";

function Login(props) {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(false);

  let inituser = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const loginuser = (e) => {
    e.preventDefault();
    console.log("loggin into user");
    for (let i = 0; i < inituser.length; i++) {
      if (emaillog === inituser[i].user && passwordlog === inituser[i].pass) {
        setHome(!home);
        setFlag(false);
      }
    }
    if (home) {
      setFlag(true);
    }
  };
  return (
    <div>
      {!home ? (
        <form onSubmit={loginuser}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>{" "}
          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
          <button type="submit" className="btn btn-dark btn-lg btn-block my-2">
            Login
          </button>
          <p onClick={props.handleClick} className="forgot-password text-right">
            Don't have an account? Sign in
          </p>
        </form>
      ) : (
        <>
          <Home />
          <div class="col-md-12 text-center">
            <button
              onClick={props.handleClick}
              type="button"
              className="btn btn-danger"
              style={{ textAlign: "center" }}
            >
              Logout{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
