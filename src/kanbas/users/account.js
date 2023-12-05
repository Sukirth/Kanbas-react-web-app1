import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    console.log(account);
    setAccount(account);
  };

  const save = async () => {
    console.log("********save ", account);
    const res = await client.updateUser({...account});
     };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
        findUserById(id);
      } else {
        fetchAccount();
      }
  }, []);


  return (

    <div className="w-50">
      <h1>Account</h1>
      {/* {!account && <div>Hiiiiiiiiiii  </div>} */}
      {account && (
            <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form>
                  <div className="mb-3 row align-items-center">
                    <label for="password" className="col-sm-4 col-form-label font-weight-bold">Password</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="password" value={account.password} onChange={(e) => setAccount({ ...account, password: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label for="firstName" className="col-sm-4 col-form-label font-weight-bold">First Name</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="firstName" value={account.firstName} onChange={(e) => setAccount({ ...account, firstName: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label for="lastName" className="col-sm-4 col-form-label font-weight-bold">Last Name</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="lastName" value={account.lastName} onChange={(e) => setAccount({ ...account, lastName: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label for="dob" className="col-sm-4 col-form-label font-weight-bold">Date of Birth</label>
                    <div className="col-sm-8">
                      <input type="date" className="form-control" id="dob" value={account.dob} onChange={(e) => setAccount({ ...account, dob: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label for="email" className="col-sm-4 col-form-label font-weight-bold">Email</label>
                    <div className="col-sm-8">
                      <input type="email" className="form-control" id="email" value={account.email} onChange={(e) => setAccount({ ...account, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-3 row align-items-center">
                    <label for="role" className="col-sm-4 col-form-label font-weight-bold">Role</label>
                    <div className="col-sm-8">
                      <select className="form-select" id="role" onChange={(e) => setAccount({ ...account, role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    {/* <div className="col-sm-6 ">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div> */}
                    <div className="col-sm-6 ">
                      <button type="submit" onClick={save} className="btn btn-primary">Save</button>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <Link to="/project/admin/users" className="btn btn-warning w-100 col-sm-12">
                        Users
                    </Link>
                  </div>
                    <div className="mb-3 row">
                      <button type="submit" onClick={signout} className="btn btn-danger">signout</button>
                    </div>
                </form>
              </div>
            </div>
          </div>    
      
      )}
    </div>
  );
}
export default Account;