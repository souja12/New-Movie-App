import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  let inituser = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  const [users, setusers] = useState(inituser);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])

  const adduser = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      const user = { user: email, pass: password }
      setusers([...users, user]);
      handleClick();
    }
  }

  const handleClick = () => {
    setLogin(!login);
  }

  return (
    <>
      <div>
        {login ? (
          <form onSubmit={adduser}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block my-2">
              Register
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered{" "}log in?
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                Empty data! But every Field is important!
              </Alert>
            )}
          </form>)
          :
          (<Login handleClick={handleClick}/>)
          }
      </div>
    </>
  );
}

export default Registration;
