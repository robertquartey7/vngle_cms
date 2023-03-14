import axios from "axios";
import React, { useState } from "react";

import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { setAuth } = useAuth();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src={"/img/logo.png"} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
              <h4>Sign into your account</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      id="username"
                      placeholder="username"
                      autoComplete="off"
                      className="form-control my-3 p-4"
                      value={formData.userName}
                      onChange={(e) => {
                        setFormData({ ...formData, userName: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                      className="form-control my-3 p-4"
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                    ></input>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn1 mt-3 mb-5"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <a href="#">Forgot Password</a>
                <p>
                  Don't have an account? <a href="#">Register here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
