import * as client from "./client";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sign-in</h1>
      <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button
              type="button mb-3"
              className="btn btn-primary"
              onClick={signin}
            >
              Signin
            </button>
          </div>
        </div>
    </div>
  );
}

export default Signin;
