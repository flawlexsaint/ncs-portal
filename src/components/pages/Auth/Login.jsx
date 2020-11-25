import React from "react";
import "./Login.css";

import Sitting from "../../images/svg/standing-8.svg";

const Login = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-sm-12 col-md-6 lg-6 xl-6">
          <div className="container">
            <img
              src={Sitting}
              alt=""
              className="d-flex align-items-center custom_login_img"
            />
            <h3 className="text-center">New Here</h3>
            <p className="mt-3 text-center">
              Sign up to create your new account
            </p>
            <div className="d-flex align-items-center">
              <a className="btn btn-primary mt-3">SIGN UP</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="mr-4 shadow">
            <div className="container bg-white ">
              <h3 className="login_header text-center mt-5">Welcome back!</h3>
              <p className="login_text text-center mb-5">
                Login to your account to continue
              </p>
              <form className="mt-4">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control input-field"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email address"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <span>Remember me</span>
                </div>
                <a href="#" class="btn btn-primary">
                  Submit
                </a>
              </form>
            </div>
            {/* <div className="container">
          <h3>Welcome Back</h3>
          <p>Login to your account to continue</p>
          <div className="email_input_section">
            <img src="" alt="" className="email_icon card-img" />
            <input type="email" name="" id="" placeholder="email" />
          </div>
          <div className="password_login_section">
            <img src="" alt="" className="password_icon card-img" />
            <input type="password" name="" id="" placeholder="password" />
          </div>
        </div> */}
          </div>
        </div>
        {/* <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-center">
          <img src="" alt="" className="card-img" />
          <p>Remember me</p>
        </div>
        <p>Forgot password</p>
      </div> */}
      </div>
    </div>
  );
};

export default Login;
