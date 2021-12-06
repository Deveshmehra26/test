import React from "react";
import { useNavigate } from "react-router";


export const Login = () => {
  const navigate = useNavigate();
  const handhleSubmit = () => {
    console.log("submit clicked");
    navigate("/welcome");
  };
  return (
    <div className="auth-wrapper px-5" >
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group mt-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            onClick={() => handhleSubmit()}
            type="submit"
            className="btn btn-primary form-control btn-block mt-3"
          >
            Submit
          </button>
          <p className="forgot-password text-center">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};
