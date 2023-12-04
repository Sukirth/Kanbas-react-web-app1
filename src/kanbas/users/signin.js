// import * as client from "./client";
// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
 
// function Signin() {
//   const [credentials, setCredentials] = useState({ username: "", password: "" });
//   const navigate = useNavigate();
 
//   const signin = async () => {
//     await client.signin(credentials);
//     navigate("/project/account", { replace: true });
//   };
 
//   return (
//     <div>
//       <h1>Signin</h1>
//       <input
//         className="form-control w-50"
//         placeholder="Enter a username"
//         value={credentials.username}
//         onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//       />
//       <input
//         className="form-control w-50"
//         type="password"
//         placeholder="Enter a password"
//         value={credentials.password}
//         onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//       />
//       <button className="btn btn-primary" onClick={signin}>
//         Signin
//       </button>
//     </div>
//   );
// }
// export default Signin;

import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./signup";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  const navigateToSignup = () => {
    navigate("/project/account/signup");
  };

  return (
    <div>
      <h1>Signin</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div className="form-group">
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
              type="button"
              className="btn btn-primary"
              onClick={signin}
            >
              Signin
            </button>

            <button
              type="button"
              className="btn btn-primary ms-3"
              onClick={navigateToSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>      
    </div>
  );
}
export default Signin;