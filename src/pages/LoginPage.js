import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import Spinner from "../Components/spinner/Spinner";

const LoginPage = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const onvalidation = () => { 
    setFlag(true);
    setTimeout(() => {
        if (username === "sathya" && password != 280996) {
          props.page("home");
        } else {
          alert("invalid");
        }
        setFlag(false);
      }, 3000)
  };
  const getUserName = (event) => {
    setUserName(event.target.value ? event.target.value : "");
  };

  const getPassword = (event) => {
    setPassword(event.target.value ? event.target.value : "");
  };

  const onReset = () => {
    setPassword("");
    setUserName("");
  };
  const onMovePage = () => {
    props.page("register");
  };

  return (
    <div className="bg-hero">
      {flag && <Spinner />}
      <form>
        <div className="container d-flex justify-content-center align-item-center">
          <div className="col-7">
            <div className="card">
              <div className="card-header bg-primary">
                <h4 className="card-text text-center text-white">Login</h4>
              </div>
              <div className="card-body">
                <div className="row d-flex justify-content-center align-item-center">
                  <div className="form-group col-md-8 my-2">
                    <label htmlFor="username">UserName</label>
                    <input
                      type="text"
                      className={`form-control ${
                        !username.length === 0
                          ? "is-invalid"
                          : username.length > 0
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                      name="username"
                      required
                      onChange={getUserName}
                    />
                    <div className="invalid-feedback">Username is required</div>
                  </div>
                  <div className="form-group col-md-8 my-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={`form-control ${
                        password.length === 0 ? "is-invalid" : "is-valid"
                      }`}
                      required
                      onChange={getPassword}
                    />
                    <div className="invalid-feedback">password is required</div>
                  </div>
                  <div className="form-group col-md-8 my-2">
                    <div className="row">
                      <div className="col-md-6  my-2">
                        <button
                          className="btn btn-primary w-100"
                          type="button"
                          onClick={() => onvalidation()}
                          disabled={
                            username.length > 0 && password.length > 0
                              ? false
                              : true
                          }
                        >
                          Submit
                        </button>
                      </div>
                      <div className="col-md-6  my-2">
                        <button
                          className="btn btn-secondary w-100"
                          type="reset"
                          onClick={onReset}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-8">
                    <button
                      className="btn btn-danger w-100"
                      onClick={onMovePage}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
