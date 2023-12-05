import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  
  return (
    <div className="container mt-5">
      <h1 className="text-center">Signup</h1>
      <div className="row justify-content-center">
      {error && <div>{error}</div>}
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
                placeholder="Password"
                className="form-control"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
           <div class="text-center">
      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
      </div>
      </div>
    </div>
    </div>
  );
}
export default Signup;